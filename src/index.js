import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './clock/clock';
import Tab from './tab/tab';
import Parent  from './parent/parent'
import Par from './children/children'
import EventPar from './event/event'
import List from './list/list'
import Covid from './covidProject/covidProject'






ReactDOM.render(
  <React.StrictMode>
    <Covid  />
  </React.StrictMode>,
  document.getElementById('root')
);
























// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
