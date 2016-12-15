import 'babel-polyfill';
// Configuration
import {baseURL} from 'config';
// React
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
// Additional libraries
import Props from './module/props.jsx';
import Taxonomy from './module/taxonomy.jsx';
// Components
import TfHome from './components/pages/tfhome/tfhome.jsx';
import TfUnivers from './components/pages/tfunivers/tfunivers.jsx';
import TfArticles from './components/pages/tfarticles/tfarticles.jsx';
import TfTheme from './components/pages/tftheme/tftheme.jsx';
import TfArticle from './components/pages/tfarticle/tfarticle.jsx';
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
            <IndexRoute component={
                (props, state, params) => <TfHome
                universClass={Taxonomy.Univers.default.className}
                isHome={true}/>
            }/>
            {/*Tous les articles*/}
            <Route path="articles" component={
                (props, state, params) => <TfArticles
                universClass={Taxonomy.Univers.default.className}/>
            }/>
            {/*Univers*/}
            <Route path={Taxonomy.Univers.moderne.slug} component={
                (props, state, params) => <TfUnivers
                {...Props.makeUniversProps(Taxonomy.Univers.moderne)}/>
            }/>
            <Route path={Taxonomy.Univers.traditionnel.slug} component={
                (props, state, params) => <TfUnivers
                {...Props.makeUniversProps(Taxonomy.Univers.traditionnel)}/>
            }/>
            {/*Thèmes sans univers*/}
            <Route path={Taxonomy.Themes.lieux.slug} component={
                (props, state, params) => <TfTheme
                universClass={Taxonomy.Univers.default.className}
                {...Props.makeThemeProps(Taxonomy.Themes.lieux)}/>
            }/>
            <Route path={Taxonomy.Themes.art.slug} component={
                (props, state, params) => <TfTheme
                universClass={Taxonomy.Univers.default.className}
                {...Props.makeThemeProps(Taxonomy.Themes.art)}/>
            }/>
            <Route path={Taxonomy.Themes.divertissement.slug} component={
                (props, state, params) => <TfTheme
                universClass={Taxonomy.Univers.default.className}
                {...Props.makeThemeProps(Taxonomy.Themes.divertissement)}/>
            }/>
            <Route path={Taxonomy.Themes.gastronomie.slug} component={
                (props, state, params) => <TfTheme
                universClass={Taxonomy.Univers.default.className}
                {...Props.makeThemeProps(Taxonomy.Themes.gastronomie)}/>
            }/>
            <Route path={Taxonomy.Themes.vetements.slug} component={
                (props, state, params) => <TfTheme
                universClass={Taxonomy.Univers.default.className}
                {...Props.makeThemeProps(Taxonomy.Themes.vetements)}/>
            }/>
            <Route path={Taxonomy.Themes.styledevie.slug} component={
                (props, state, params) => <TfTheme
                universClass={Taxonomy.Univers.default.className}
                {...Props.makeThemeProps(Taxonomy.Themes.styledevie)}/>
            }/>
            {/*Univers (moderne) + thèmes*/}
            <Route path={Taxonomy.Univers.moderne.slug+'/'+Taxonomy.Themes.lieux.slug} component={
                (props, state, params) => <TfTheme
                {...Props.makeUniversProps(Taxonomy.Univers.moderne)}
                {...Props.makeThemeProps(Taxonomy.Themes.lieux)}/>
            }/>
            <Route path={Taxonomy.Univers.moderne.slug+'/'+Taxonomy.Themes.art.slug} component={
                (props, state, params) => <TfTheme
                {...Props.makeUniversProps(Taxonomy.Univers.moderne)}
                {...Props.makeThemeProps(Taxonomy.Themes.art)}/>
            }/>
            <Route path={Taxonomy.Univers.moderne.slug+'/'+Taxonomy.Themes.divertissement.slug} component={
                (props, state, params) => <TfTheme
                {...Props.makeUniversProps(Taxonomy.Univers.moderne)}
                {...Props.makeThemeProps(Taxonomy.Themes.divertissement)}/>
            }/>
            <Route path={Taxonomy.Univers.moderne.slug+'/'+Taxonomy.Themes.gastronomie.slug} component={
                (props, state, params) => <TfTheme
                {...Props.makeUniversProps(Taxonomy.Univers.moderne)}
                {...Props.makeThemeProps(Taxonomy.Themes.gastronomie)}/>
            }/>
            <Route path={Taxonomy.Univers.moderne.slug+'/'+Taxonomy.Themes.vetements.slug} component={
                (props, state, params) => <TfTheme
                {...Props.makeUniversProps(Taxonomy.Univers.moderne)}
                {...Props.makeThemeProps(Taxonomy.Themes.vetements)}/>
            }/>
            <Route path={Taxonomy.Univers.moderne.slug+'/'+Taxonomy.Themes.styledevie.slug} component={
                (props, state, params) => <TfTheme
                {...Props.makeUniversProps(Taxonomy.Univers.moderne)}
                {...Props.makeThemeProps(Taxonomy.Themes.styledevie)}/>
            }/>
            {/*Univers (traditionnel) + thèmes*/}
            <Route path={Taxonomy.Univers.traditionnel.slug+'/'+Taxonomy.Themes.lieux.slug} component={
                (props, state, params) => <TfTheme
                {...Props.makeUniversProps(Taxonomy.Univers.traditionnel)}
                {...Props.makeThemeProps(Taxonomy.Themes.lieux)}/>
            }/>
            <Route path={Taxonomy.Univers.traditionnel.slug+'/'+Taxonomy.Themes.art.slug} component={
                (props, state, params) => <TfTheme
                {...Props.makeUniversProps(Taxonomy.Univers.traditionnel)}
                {...Props.makeThemeProps(Taxonomy.Themes.art)}/>
            }/>
            <Route path={Taxonomy.Univers.traditionnel.slug+'/'+Taxonomy.Themes.divertissement.slug} component={
                (props, state, params) => <TfTheme
                {...Props.makeUniversProps(Taxonomy.Univers.traditionnel)}
                {...Props.makeThemeProps(Taxonomy.Themes.divertissement)}/>
            }/>
            <Route path={Taxonomy.Univers.traditionnel.slug+'/'+Taxonomy.Themes.gastronomie.slug} component={
                (props, state, params) => <TfTheme
                {...Props.makeUniversProps(Taxonomy.Univers.traditionnel)}
                {...Props.makeThemeProps(Taxonomy.Themes.gastronomie)}/>
            }/>
            <Route path={Taxonomy.Univers.traditionnel.slug+'/'+Taxonomy.Themes.vetements.slug} component={
                (props, state, params) => <TfTheme
                {...Props.makeUniversProps(Taxonomy.Univers.traditionnel)}
                {...Props.makeThemeProps(Taxonomy.Themes.vetements)}/>
            }/>
            <Route path={Taxonomy.Univers.traditionnel.slug+'/'+Taxonomy.Themes.styledevie.slug} component={
                (props, state, params) => <TfTheme
                {...Props.makeUniversProps(Taxonomy.Univers.traditionnel)}
                {...Props.makeThemeProps(Taxonomy.Themes.styledevie)}/>
            }/>
            {/*Articles*/}
            <Route path="article/:slug" component={
                (props, state, params) => <TfArticle
                {...props} {...params}/>
            }/>
        </Route>
        <Route path="*" component={
            (props, state, params) => <Tf404
            universClass={Taxonomy.Univers.default.className}/>
        }/>
    </Router>,
    document.getElementById('root')
);
