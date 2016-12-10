import 'babel-polyfill';
// React
import React from 'react';
// Additional librairies
// Components
import TfPage from './../../layouts/tfpage/tfpage.jsx';
import TfSeparator from './../../widgets/tfseparator/tfseparator.jsx';
import TfPageTitle from './../../sections/tfpagetitle/tfpagetitle.jsx';
import TfAllArticles from './../../sections/tfarticleGrid/tfallArticles.jsx';
// Style
import style from './tfarticles_style.scss';

class TfArticles extends React.Component {

    render(){

        return <TfPage {...this.props}>
            <TfSeparator/>
            <TfPageTitle>Articles</TfPageTitle>
            <TfAllArticles/>
        </TfPage>;
    }

}

module.exports = TfArticles;