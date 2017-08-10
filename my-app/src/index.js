import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App'
//import INPUTS from './comm/inputs';
//import Todo from './comm/todo';
import Ctp from './comm/chitopar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Ctp />, document.getElementById('root'));
registerServiceWorker();
