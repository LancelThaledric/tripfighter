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
            <TfPageTitle inverted={true}>Tous les articles de Trip Fighter en une page</TfPageTitle>
            <TfAllArticles title={null}
                           description={<p className="tf-center">C'est si beau qu'on aurait du mal à y croire !</p>}/>
        </TfPage>;
    }

}

module.exports = TfArticles;