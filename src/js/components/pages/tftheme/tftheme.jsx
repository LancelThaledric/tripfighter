import 'babel-polyfill';
// React
import React from 'react';
// Additional librairies
// Components
import TfPage from './../../layouts/tfpage/tfpage.jsx';
import TfSeparator from './../../widgets/tfseparator/tfseparator.jsx';
import TfCharacterSelectMini from './../../widgets/tfcharacterSelect/tfcharacterSelectMini.jsx';
import TfPageTitle from './../../sections/tfpagetitle/tfpagetitle.jsx';
import TfAllArticles from './../../sections/tfarticleGrid/tfallArticles.jsx';
// Style
import style from './tftheme_style.scss';

class TfTheme extends React.Component {

    render(){

        let tags = [this.props.name];
        if(this.props.universName) tags.push(this.props.universName);
        console.log(tags);

        return <TfPage {...this.props}>
            <TfSeparator/>
            <TfPageTitle>Thème {this.props.name}</TfPageTitle>
            <TfCharacterSelectMini/>
            <TfAllArticles title={"Articles dans le thème "+this.props.name}
                           description={<p>Many fighter !</p>}
                           tags={tags}/>
        </TfPage>;
    }

}

TfTheme.defaultProps = {
    name: '<ThemeName>',
    univers: 'tf-modern',
    universName: null
};

module.exports = TfTheme;