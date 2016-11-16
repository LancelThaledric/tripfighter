import 'babel-polyfill';

import React from 'react';

import {Icon} from 'react-fa';

import TfArticleMini from './articleMini.jsx';

import resource_hokusai from '../../resource/thumbnail/hokusai.png';
import resource_mochis from '../../resource/thumbnail/mochis.png';
import resource_thermes from '../../resource/thumbnail/thermes.jpg';
import resource_onepiece from '../../resource/thumbnail/onepiece.jpg';
import resource_tower from '../../resource/thumbnail/tower.jpg';
import resource_city from '../../resource/thumbnail/city.jpg';

class TfLastArticles extends React.Component {

    render(){

        return <section className="tf-last-articles">
            <div className="tf-article-grid">
                <TfArticleMini imageUrl={resource_hokusai}>
                    <h3>Hokusai : Où trouver les meilleurs oeuvres ?</h3>
                    <p>Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
                </TfArticleMini>
                <TfArticleMini imageUrl={resource_mochis}>
                    <h3>Goûtez aux meilleurs mochis de Tokyo</h3>
                    <p>Huuummm ! La belle bête ! C'est gourmand-croquant !</p>
                </TfArticleMini>
                <TfArticleMini imageUrl={resource_thermes}>
                    <h3>Les thermes traditionnels c'est bon pour la santé des cheveux</h3>
                    <p>Ces bains chauds sont super trop suuuuuuuuper !</p>
                </TfArticleMini>
                <TfArticleMini imageUrl={resource_onepiece}>
                    <h3>One Piece Gold, le nouveau film de la Toei Animation</h3>
                    <p>Gum-gum supercopter ! Hmmmmm de la viande !!! Et un squelette vivant !</p>
                </TfArticleMini>
                <TfArticleMini imageUrl={resource_tower}>
                    <h3>La tour de Tokyo, classique indémodable</h3>
                    <p>Franchement je ne sais plus trop quoi mettre comme vignettes. Je fatigue.</p>
                </TfArticleMini>
                <TfArticleMini imageUrl={resource_city}>
                    <h3>Une ville de nuit, je ne sais même pas laquelle</h3>
                    <p>Cependant, je dois avouer que ça reste stylé.</p>
                </TfArticleMini>
                <TfArticleMini>
                    <h3>Sans déconner, même sans image ça rend pas mal, non ?</h3>
                    <p>C'est ça qui est sympa avec le css. En ajoutant un peu de confiture, de simples carrés deviennent swag.</p>
                </TfArticleMini>
            </div>
            <div className="tf-center-button-bar tf-last-articles-more">
                <a href="#" className="tf-abutton" title="Voir plus d'articles">Mettez-moi une dose de <strong>Japon</strong> supplémentaire</a>
            </div>
        </section>;
    }

}

module.exports = TfLastArticles;