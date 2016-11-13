import 'babel-polyfill';

import React from 'react';

import {Icon} from 'react-fa';

import TfArticleMini from './articleMini.jsx'

class TfLastArticles extends React.Component {

    render(){

        return <section className="tf-last-articles">
            <div className="tf-article-grid">
                <TfArticleMini title="Titre de l'article 1"/>
                <TfArticleMini title="Titre de l'article 2"/>
                <TfArticleMini title="Titre de l'article 3"/>
                <TfArticleMini title="Titre de l'article 4"/>
                <TfArticleMini title="Titre de l'article 5"/>
                <TfArticleMini title="Titre de l'article 6"/>
                <TfArticleMini title="Titre de l'article 7"/>
            </div>
            <div className="tf-center-button-bar tf-last-articles-more">
                <a href="#" className="tf-abutton" title="Voir plus d'articles">Mettez-moi une dose de <strong>Japon</strong> supplémentaire</a>
            </div>
        </section>;
    }

}

module.exports = TfLastArticles;