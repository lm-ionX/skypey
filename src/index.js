import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './containers/App';
import store from "./store";
import reportWebVitals from './reportWebVitals';

const render = () => {
  fancyLog();
  return ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

const fancyLog = () => {
  console.log("%c Rendered with 👉 👉 👇", "background: purple; color: #FFF");
  console.log(store.getState());
}

render();
store.subscribe(render);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
