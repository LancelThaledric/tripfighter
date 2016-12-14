import 'babel-polyfill';
// React
import React from 'react';
// Additional libraries
import {Link} from 'react-router';
import ClassNames from 'classnames';
// Components
// Style
import style from './tfarticleReader_style.scss';

class TfArticleReader extends React.Component {

    render(){

        let className = this.props.className;

        return <section className="tf-article-reader">
            Lecture de l'article.
        </section>;
    }

}

module.exports = TfArticleReader;