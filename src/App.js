/*global chrome*/
import React, {useEffect} from "react";
import "./style.css";
import NewRow from './components/workLog/NewRow';
import WorkLog from "./components/workLog";
import Save from "./components/Save";
import SavedLogs from "./components/SavedLogs";
import Options from './components/options';
import { useDispatch } from 'react-redux';
import { SAVE_DOMAIN } from "./constants";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const queryInfo = {active: true, lastFocusedWindow: true};
    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
        const url = tabs[0].url;
        console.log(url)
        dispatch({
          type: SAVE_DOMAIN,
          payload: {domain:url.split('/')[2]}
        })
    });
  }, []);
  return (
    <div className="App">
      <NewRow />
      <Options />
      <WorkLog />
      <Save />
      <SavedLogs />
      <Footer />
    </div>
  );
};
export default App;