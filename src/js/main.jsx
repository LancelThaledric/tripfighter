import 'babel-polyfill';

import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import index from 'file?name=[name].[ext]!../index.html';
import style from '../style/style.scss';

import '../.htaccess';

import TfHome from './components/home.jsx';
import TfModerne from './components/moderne.jsx';
import TfTraditionnel from './components/traditionnel.jsx';
import Tf404 from './components/tf404.jsx';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="tripfighter/build">
            <IndexRoute component={TfHome}/>
            <Route path="moderne" component={TfModerne}/>
            <Route path="traditionnel" component={TfTraditionnel}/>
        </Route>
        <Route path="*" component={Tf404}/>
    </Router>,
    document.getElementById('root')
);
