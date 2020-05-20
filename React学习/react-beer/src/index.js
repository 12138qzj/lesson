import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//给react 添加路由对象
//BrowserRouter 浏览器路由
import Main from './components/Mian'
import About from './components/About'
import Search from './components/Search'


import { BrowserRouter,Route } from 'react-router-dom';

ReactDOM.render(

  <BrowserRouter>

    <div>
    {/*组件加载
    :searchTerm  :动态部分 
    path:路由地址
    exact：将path加入路由 使该组件可以通过path 访问*/}

      <Route exact path="/" component={Main}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/search/:searchTerm" component={Main}/>


    </div>
  </BrowserRouter>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
