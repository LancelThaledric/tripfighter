import 'babel-polyfill';
// Configuration
import {baseURL} from 'config';
// React
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
// Components
import TfHome from './components/pages/tfhome/tfhome.jsx';
import TfUnivers from './components/pages/tfunivers/tfunivers.jsx';
import Tf404 from './components/pages/tf404/tf404.jsx';
// Style
import style from '../style/style.scss';
// Resources
import index from 'file?name=[name].[ext]!../index.html';
import '../.htaccess';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path={baseURL}>
            <IndexRoute component={(props, state, params) => <TfHome univers="tf-modern"/>}/>
            <Route path="moderne" component={(props, state, params) => <TfUnivers univers="tf-modern" name="Moderne"/>}/>
            <Route path="traditionnel" component={(props, state, params) => <TfUnivers univers="tf-trad" name="Traditionnel"/>}/>
        </Route>
        <Route path="*" component={(props, state, params) => <Tf404 univers="tf-modern"/>}/>
    </Router>,
    document.getElementById('root')
);
