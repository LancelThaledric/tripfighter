import 'babel-polyfill';
// React
import React from 'react';
// Additional libraries
import {Icon} from 'react-fa';
// Components
import TfArticleMini from './../../widgets/tfarticleMini/tfarticleMini.jsx';
import TfAButton from './../../widgets/tfabutton/tfabutton.jsx';
// Style
import style from './tflastArticles_style.scss';
// Resources
import resource_hokusai from '../../../../resource/thumbnail/hokusai.png';
import resource_mochis from '../../../../resource/thumbnail/mochis.png';
import resource_thermes from '../../../../resource/thumbnail/thermes.jpg';
import resource_onepiece from '../../../../resource/thumbnail/onepiece.jpg';
import resource_tower from '../../../../resource/thumbnail/tower.jpg';
import resource_city from '../../../../resource/thumbnail/city.jpg';

class TfLastArticles extends React.Component {

    render(){

        return <section className="tf-last-articles">
            <h2>
                Derniers articles
            </h2>

            <div className="tf-article-grid">
                <TfArticleMini imageUrl={resource_hokusai}>
                    <h3>Hokusai : Où trouver les meilleurs oeuvres ?</h3><hr/>
                    <p>Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</p>
                    <div className="tf-tag-list">
                        <div className="tf-tag-little">Art</div>
                        <div className="tf-tag-little">Traditionnel</div>
                    </div>
                </TfArticleMini>
                <TfArticleMini imageUrl={resource_mochis}>
                    <h3>Goûtez aux meilleurs mochis de Tokyo</h3><hr/>
                    <p>Huuummm ! La belle bête ! C'est gourmand-croquant !</p>
                    <div className="tf-tag-list">
                        <div className="tf-tag-little">Gastronomie</div>
                        <div className="tf-tag-little">Moderne</div>
                    </div>
                </TfArticleMini>
                <TfArticleMini imageUrl={resource_thermes}>
                    <h3>Les thermes traditionnels c'est bon pour la santé des cheveux</h3><hr/>
                    <p>Ces bains chauds sont super trop suuuuuuuuper !</p>
                    <div className="tf-tag-list">
                        <div className="tf-tag-little">Style de vie</div>
                        <div className="tf-tag-little">Traditionnel</div>
                    </div>
                </TfArticleMini>
                <TfArticleMini imageUrl={resource_onepiece}>
                    <h3>One Piece Gold, le nouveau film de la Toei Animation</h3><hr/>
                    <p>Gum-gum supercopter ! Hmmmmm de la viande !!! Et un squelette vivant !</p>
                    <div className="tf-tag-list">
                        <div className="tf-tag-little">Art</div>
                        <div className="tf-tag-little">Moderne</div>
                    </div>
                </TfArticleMini>
                <TfArticleMini imageUrl={resource_tower}>
                    <h3>La tour de Tokyo, classique indémodable</h3><hr/>
                    <p>Franchement je ne sais plus trop quoi mettre comme vignettes. Je fatigue.</p>
                    <div className="tf-tag-list">
                        <div className="tf-tag-little">Environnement</div>
                        <div className="tf-tag-little">Moderne</div>
                    </div>
                </TfArticleMini>
                <TfArticleMini imageUrl={resource_city}>
                    <h3>Une ville de nuit, je ne sais même pas laquelle</h3><hr/>
                    <p>Cependant, je dois avouer que ça reste stylé.</p>
                    <div className="tf-tag-list">
                        <div className="tf-tag-little">Environnement</div>
                        <div className="tf-tag-little">Traditionnel</div>
                    </div>
                </TfArticleMini>
                <TfArticleMini>
                    <h3>Sans déconner, même sans image ça rend pas mal, non ?</h3><hr/>
                    <p>C'est ça qui est sympa avec le css. En ajoutant un peu de confiture, de simples carrés deviennent swag.</p>
                    <div className="tf-tag-list">
                        <div className="tf-tag-little">Art</div>
                        <div className="tf-tag-little">Moderne</div>
                    </div>
                </TfArticleMini>
                <TfArticleMini>
                    <h3>Une autre article dummy</h3><hr/>
                    <p>C'est ça, l'art du dummy !</p>
                    <div className="tf-tag-list">
                        <div className="tf-tag-little">Divertissement</div>
                        <div className="tf-tag-little">Traditionnel</div>
                    </div>
                </TfArticleMini>
            </div>
            <div className="tf-center-button-bar">
                <TfAButton href="#" title="Plus d'articles">Mettez-moi une dose de <strong>Japon</strong> supplémentaire</TfAButton>
            </div>
        </section>;
    }

}

module.exports = TfLastArticles;