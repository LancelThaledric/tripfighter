import 'babel-polyfill';
// React
import React from 'react';
// Additional librairies
// Components
import TfPage from './../../layouts/tfpage/tfpage.jsx';
import TfSeparator from './../../widgets/tfseparator/tfseparator.jsx';
import TfThemeSelectMini from './../../widgets/tfthemeSelect/tfthemeSelectMini.jsx';
import TfPageTitle from './../../sections/tfpagetitle/tfpagetitle.jsx';
import TfLastArticles from './../../sections/tfarticleGrid/tflastArticles.jsx';
// Style
import style from './tfunivers_style.scss';

class TfUnivers extends React.Component {

    render(){

        return <TfPage {...this.props.route}>
            <TfSeparator/>
            <TfPageTitle>Univers {this.props.name}</TfPageTitle>
            <TfThemeSelectMini/>
            <TfLastArticles/>
        </TfPage>;
    }

}

TfUnivers.defaultProps = {
    name: '<UniversName>'
};

module.exports = TfUnivers;