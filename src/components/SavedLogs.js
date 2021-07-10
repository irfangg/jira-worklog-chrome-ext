import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSavedLogs } from '../redux/save/action'
import Error from './Error'

export default function SavedLogs() {
    const savedLogs = useSelector(state => state?.loggedDetails?.savedLogs || [])
    const dispatch = useDispatch()
    const onDelWorklog = (url, index)=>{
        console.log(url,index)
        fetch(`${url}`, { method: 'DELETE' })
        .then(response => {
            return response.text();
        })
        .then(text => {
            //console.log(text)
            let logArry = savedLogs.filter((s,i)=> i!==index);
            dispatch(updateSavedLogs({savedLogs: logArry}));
        })
        .catch(err => console.error(err));
    }
    return (
        <div className='savedLogs'>
        {
            savedLogs.length >0 ?
            <>
                <span>Saved log details:</span>
                <ul className='logDetails'>
                    {savedLogs.map((res,i)=>{
                        const {issue, data} = res.value;
                        return (
                            <li key={i}>
                                <span>{issue}:</span>
                                {
                                    data?.self && !data?.errorMessages ? (
                                    <div style={{marginLeft:'1em'}}>
                                        <span> Time Spent : <strong>{data.timeSpent}</strong></span>
                                        <span>,  Date : <strong>{data?.started? data.started?.split('T')?.[0] : ''}</strong></span>
                                        {'  '}
                                        {
                                        data?.self && <button className='logDelBtn' onClick={() => onDelWorklog(data.self, i)}>Delete log</button>
                                        }
                                    </div>
                                    ): (<span style={{color:'red', marginLeft:'1em'}}> {data.errorMessages?.join(',')}</span>)
                                }
                            </li>
                        );
                    })}
                </ul>
            </>
            :  <Error/>
        }
        </div>
        
    )
}
