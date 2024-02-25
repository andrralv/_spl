import { useState } from 'react';
import { fetchLogs } from '../api/fetchLogs';
import './LogViewer.css'

const LogViewer = () => {
  const [logs, setLogs] = useState([]);

  const getLogs = async () => {
    const apilogs = await fetchLogs();
    if (logs && logs.length > 0) {
      setLogs([]);
    } else {
      setLogs(apilogs);
    }
  };

  const clickHandler = (e) => {
    e.preventDefault();
    getLogs();
  }

  const getHTTPResponseColor = (httpCode) => {
    if (httpCode) {
      if (httpCode.charAt(0) === '2') {
        return '#89c269';
      } else if (httpCode.charAt(0) === '4' || httpCode.charAt(0) === '5') {
        return  '#913946'
      } 
    }
    return '#adadad'
  }

  return (
    <div className={"log-viewer"}>
      <button className={"logs-list-button"} onClick={clickHandler}>View Logs</button>
      <ul className={"logs-list"}>
        {logs && logs.length > 0 ? logs.map((log, i) => {
        return (
        <li key={i}>
            <div className="log-header">
              <span>Timestamp</span>
              <span>Res_Code</span>
              <span>Host</span>
            </div>
            <div className="log-body">
              <span>{new Date(log.result?._time).toLocaleString()}</span>
              <span style={{ fontWeight: 900, color: getHTTPResponseColor(log.result["line.data.status"])}}>{log.result["line.data.status"] ? log.result["line.data.status"] : 'Code not Provided'}</span>
              <span>{log.result?.host}</span>
            </div>
        </li>
      )
  }): <div>{""}</div>}</ul></div>)
}

export default LogViewer;