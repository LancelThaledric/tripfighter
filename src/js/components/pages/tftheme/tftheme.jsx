import 'babel-polyfill';
// React
import React from 'react';
// Additional librairies
import Taxonomy from './../../../module/taxonomy.jsx';
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

        let tags = [this.props.themeName];
        if(this.props.universName) tags.push(this.props.universName);

        return <TfPage {...this.props}>
            <TfSeparator/>
            <TfPageTitle>Thème {this.props.themeName}</TfPageTitle>
            {this.props.universName ? null : <TfCharacterSelectMini themeSlug={this.props.themeSlug}/>}
            <TfAllArticles title={"Articles dans le thème "+this.props.themeName}
                           description={<p>Many fighter !</p>}
                           tags={tags}/>
        </TfPage>;
    }

}

TfTheme.defaultProps = {
    themeName: '<ThemeName>',
    themeSlug: null,
    universClass: Taxonomy.Univers.default.className,
    universName: null
};

module.exports = TfTheme;