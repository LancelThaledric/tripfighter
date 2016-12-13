import 'babel-polyfill';
// React
import React from 'react';
// Additional librairies
// Components
import TfPage from './../../layouts/tfpage/tfpage.jsx';
import TfSeparator from './../../widgets/tfseparator/tfseparator.jsx';
import TfThemeSelectMini from './../../widgets/tfthemeSelect/tfthemeSelectMini.jsx';
import TfPageTitle from './../../sections/tfpagetitle/tfpagetitle.jsx';
import TfAllArticles from './../../sections/tfarticleGrid/tfallArticles.jsx';
// Style
import style from './tfunivers_style.scss';

class TfUnivers extends React.Component {

    render(){

        return <TfPage {...this.props}>
            <TfSeparator/>
            <TfPageTitle>Univers {this.props.name}</TfPageTitle>
            <TfThemeSelectMini/>
            <TfAllArticles title={"Articles dans l'univers "+this.props.name}
                           description={<p>Such wow !</p>}
                           tags={[this.props.name]}/>
        </TfPage>;
    }

}

TfUnivers.defaultProps = {
    name: '<UniversName>'
};

module.exports = TfUnivers;