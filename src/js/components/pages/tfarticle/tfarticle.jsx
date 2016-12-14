import 'babel-polyfill';
// React
import React from 'react';
// Additional librairies
import Article from './../../../module/article.jsx';
import Props from './../../../module/props.jsx';
// Components
import TfPage from './../../layouts/tfpage/tfpage.jsx';
import TfSeparator from './../../widgets/tfseparator/tfseparator.jsx';
import TfPageTitle from './../../sections/tfpagetitle/tfpagetitle.jsx';
import TfArticleReader from './../../sections/tfarticleReader/tfarticleReader.jsx';
// Style
import style from './tfarticle_style.scss';

class TfArticle extends React.Component {

    render(){
        let article = Article.getBySlug(this.props.params.slug);
        let universArticle = Article.getUnivers(article);
        let themeArticle = Article.getTheme(article);

        return <TfPage {...this.props} {...Props.makeUniversProps(universArticle)} {...Props.makeThemeProps(themeArticle)} articleTitle={article.title} articleSlug={article.slug}>
            <TfSeparator/>
            <TfArticleReader article={article}/>
        </TfPage>;
    }

}

module.exports = TfArticle;