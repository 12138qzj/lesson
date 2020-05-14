
//入口文件

import React from 'react';
import ReactDOM from 'react-dom';//index.js 入口文件

import CommentApp from './CommentApp';//导入模块

import './index.css';//动态插入 css文件

// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <CommentApp/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
