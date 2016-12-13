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
import TfArticles from './components/pages/tfarticles/tfarticles.jsx';
import TfTheme from './components/pages/tftheme/tftheme.jsx';
import Tf404 from './components/pages/tf404/tf404.jsx';
// Style
import style from '../style/style.scss';
// Resources
import index from 'file?name=[name].[ext]!../index.html';
import '../.htaccess';


ReactDOM.render(
    <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
        <Route path={baseURL}>
            {/*Home*/}
            <IndexRoute component={(props, state, params) => <TfHome univers="tf-modern"/>}/>
            {/*Tous les articles*/}
            <Route path="articles" component={(props, state, params) => <TfArticles univers="tf-modern"/>}/>
            {/*Univers*/}
            <Route path="moderne" component={(props, state, params) => <TfUnivers univers="tf-modern" name="Moderne"/>}/>
            <Route path="traditionnel" component={(props, state, params) => <TfUnivers univers="tf-trad" name="Traditionnel"/>}/>
            {/*Thèmes*/}
            <Route path="lieux" component={(props, state, params) => <TfTheme univers="tf-modern" name="Lieux" slug="lieux"/>}/>
            <Route path="art" component={(props, state, params) => <TfTheme univers="tf-modern" name="Art" slug="art"/>}/>
            <Route path="divertissement" component={(props, state, params) => <TfTheme univers="tf-modern" name="Divertissement" slug="divertissement"/>}/>
            <Route path="gastronomie" component={(props, state, params) => <TfTheme univers="tf-modern" name="Gastronomie" slug="gastronomie"/>}/>
            <Route path="vetements" component={(props, state, params) => <TfTheme univers="tf-modern" name="Vêtements" slug="vetements"/>}/>
            <Route path="styledevie" component={(props, state, params) => <TfTheme univers="tf-modern" name="Style de vie" slug="styledevie"/>}/>
            {/*Univers (moderne) + thèmes*/}
            <Route path="moderne/lieux" component={(props, state, params) => <TfTheme univers="tf-modern" name="Lieux" slug="lieux" universName="moderne"/>}/>
            <Route path="moderne/art" component={(props, state, params) => <TfTheme univers="tf-modern" name="Art" slug="art" universName="moderne"/>}/>
            <Route path="moderne/divertissement" component={(props, state, params) => <TfTheme univers="tf-modern" name="Divertissement" slug="divertissement" universName="moderne"/>}/>
            <Route path="moderne/gastronomie" component={(props, state, params) => <TfTheme univers="tf-modern" name="Gastronomie" slug="gastronomie" universName="moderne"/>}/>
            <Route path="moderne/vetements" component={(props, state, params) => <TfTheme univers="tf-modern" name="Vêtements" slug="vetements" universName="moderne"/>}/>
            <Route path="moderne/styledevie" component={(props, state, params) => <TfTheme univers="tf-modern" name="Style de vie" slug="styledevie" universName="moderne"/>}/>
            {/*Univers (traditionnel) + thèmes*/}
            <Route path="traditionnel/lieux" component={(props, state, params) => <TfTheme univers="tf-modern" name="Lieux" slug="lieux" universName="traditionnel"/>}/>
            <Route path="traditionnel/art" component={(props, state, params) => <TfTheme univers="tf-modern" name="Art" slug="art" universName="traditionnel"/>}/>
            <Route path="traditionnel/divertissement" component={(props, state, params) => <TfTheme univers="tf-modern" name="Divertissement" slug="divertissement" universName="traditionnel"/>}/>
            <Route path="traditionnel/gastronomie" component={(props, state, params) => <TfTheme univers="tf-modern" name="Gastronomie" slug="gastronomie" universName="traditionnel"/>}/>
            <Route path="traditionnel/vetements" component={(props, state, params) => <TfTheme univers="tf-modern" name="Vêtements" slug="vetements" universName="traditionnel"/>}/>
            <Route path="traditionnel/styledevie" component={(props, state, params) => <TfTheme univers="tf-modern" name="Style de vie" slug="styledevie" universName="traditionnel"/>}/>
        </Route>
        <Route path="*" component={(props, state, params) => <Tf404 univers="tf-modern"/>}/>
    </Router>,
    document.getElementById('root')
);
