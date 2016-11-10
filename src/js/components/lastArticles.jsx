import 'babel-polyfill';

import React from 'react';

import {Icon} from 'react-fa';

class TfLastArticles extends React.Component {

    render(){

        return <section className="tf-last-articles">
            <div className="tf-article-grid">
                <div className="tf-article-wrapper">
                    <div className="tf-article-box">
                        <div className="tf-article-inner">
                            <h3>Titre de l'article</h3>
                        </div>
                    </div>
                </div>
                <div className="tf-article-wrapper">
                    <div className="tf-article-box">
                        <div className="tf-article-inner">
                            <h3>Titre de l'article</h3>
                        </div>
                    </div>
                </div>
                <div className="tf-article-wrapper">
                    <div className="tf-article-box">
                        <div className="tf-article-inner">
                            <h3>Titre de l'article</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tf-center-button-bar tf-last-articles-more">
                <a href="#" className="tf-abutton">Mettez-moi une dose de <strong>Japon</strong> supplémentaire</a>
            </div>
        </section>;
    }

}

module.exports = TfLastArticles;