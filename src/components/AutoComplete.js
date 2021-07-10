import React, {useState, useMemo} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { EDIT_ACTION } from '../constants';
import { getAutoSuggestURLDetails } from '../constants/endPoints';
import { debounce_loading } from '../utils';

const AutoComplete = (props)=> {
    const [activeSuggestion, setActiveSuggestion] = useState(0);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [userInput, setUserInput] = useState(props.value);
    const autoComment = useSelector(state => state.autoComment?.autoComment)
    const domain = useSelector(state => state.home?.domain)
    const dispatch = useDispatch();

    const fetchData = (query) => {
        console.log('query ',query, domain)
        const {url, header} = getAutoSuggestURLDetails(domain, query)
        query && fetch(url, header)
            .then(response => response.json())
            .then(data => {
                console.log('data ',data, domain)
                const dataList = data?.sections?.[0]?.issues.length>0 ? data.sections?.[0].issues : [];
                // console.log('dataList ', dataList)
                setFilteredSuggestions(dataList)
                setActiveSuggestion(0);
                setShowSuggestions(true)
            })
            .catch(err => {
                console.error(err);
                setFilteredSuggestions([])
                setShowSuggestions(false)
            });
    }
   
    const processChanges = useMemo(() => {
        return debounce_loading(fetchData, 300);
    }, []);

    const addAutoComment = (issue)=>{
        if(autoComment){
            dispatch({
                type: EDIT_ACTION,
                payload: {
                  id: props.id,
                  name: 'comment',
                  value: 'worked on issue '+issue
                }
            });
        }
    }

    const onChange = e => {
        const userInput = e.currentTarget.value;
        processChanges(userInput)
        setUserInput(userInput)
        dispatch({
            type: EDIT_ACTION,
            payload: {
              id: props.id,
              name: props.name,
              value: userInput
            }
        });
        addAutoComment(userInput);
    };
    const onClick = issue => {
        setActiveSuggestion(0);
        setFilteredSuggestions([]);
        setShowSuggestions(false);
        setUserInput(issue);
        dispatch({
            type: EDIT_ACTION,
            payload: {
              id: props.id,
              name: props.name,
              value: issue
            }
        });
        addAutoComment(issue);
    };
    
    const onKeyDown = e => {
        // User pressed the enter key
        if (e.keyCode === 13) {
            setActiveSuggestion(0);
            setShowSuggestions(false);
            console.log('enter ',activeSuggestion, filteredSuggestions);
            setUserInput(filteredSuggestions[activeSuggestion].key);
        }
        // User pressed the up arrow
        else if (e.keyCode === 38) {
          if (activeSuggestion === 0) {
            return;
          }
          setActiveSuggestion(activeSuggestion - 1);
        }
        // User pressed the down arrow
        else if (e.keyCode === 40) {
          if (activeSuggestion - 1 === filteredSuggestions.length-2) {
            return;
          }
          setActiveSuggestion(activeSuggestion +1);
          console.log(activeSuggestion)
        }
    };

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li className={className} key={suggestion.id} onClick={(e)=>onClick(suggestion.key)}>
                  <div className='img-issue-id'>
                        <img src={`https://irfangg.atlassian.net${suggestion.img}`}/>
                        <span>{suggestion.key}</span>
                  </div>
                  <div>{suggestion.summaryText}</div>
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-options">
            <em>No matching issues found !</em>
          </div>
        );
      }
    }
    return (
        <>
            <input
                type="text"
                name={props.name}
                onChange={onChange}
                value={userInput}
                autoComplete="off"
                className='class_issue'
                placeholder='Issue'
                onKeyDown={onKeyDown}
            />
            {suggestionsListComponent}
        </>
    )
}
export default AutoComplete;