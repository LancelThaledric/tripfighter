import 'babel-polyfill';

import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import index from 'file?name=[name].[ext]!../index.html';
import style from '../style/style.scss';

import '../.htaccess';

import TfHome from './components/pages/tfhome/tfhome.jsx';
import TfUnivers from './components/pages/tfunivers/tfunivers.jsx';
import Tf404 from './components/pages/tf404/tf404.jsx';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="tripfighter/build">
            <IndexRoute component={TfHome}/>
            <Route path="moderne" component={TfUnivers}/>
            <Route path="traditionnel" component={TfUnivers}/>
        </Route>
        <Route path="*" component={Tf404}/>
    </Router>,
    document.getElementById('root')
);
