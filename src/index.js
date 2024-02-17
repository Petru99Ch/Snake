import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.scss"
import reportWebVitals from './reportWebVitals';
import {Game} from './game/ui';


const game = {
  score:0,
  state: "started",

  children: [

    {name: "snake",

      children: [
        {ClName:"head", dir:"up", coord:{top:100, left: 200}},
        {ClName:"body", dir:"up", coord:{top:172, left: 200}},
        {ClName:"tail", dir:"up", coord:{top:244, left: 200}},
      ]

    },

    {
      name: "apple",
      id:"apple",
      coord: { top: 300, left : 400}
    }
    
  ]
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Game data={game} />      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
