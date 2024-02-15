import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.scss"
import reportWebVitals from './reportWebVitals';
import {Snake} from './snake/ui';


const snake = {
  dummy: "Something",
  children: [
    {ClName:"head", dir:"up", coord:{top:100, left: 200}},
    {ClName:"body", dir:"down", coord:{top:172, left: 200}},
    {ClName:"tail", dir:"up", coord:{top:244, left: 200}},
  ]
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Snake data={snake} />      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
