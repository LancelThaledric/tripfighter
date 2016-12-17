import 'babel-polyfill';
// React
import React from 'react';
// Additional libraries
import {Link} from 'react-router';
import {Icon} from 'react-fa';
import ClassNames from 'classnames';
// Components
import TfAButton from './../../widgets/tfabutton/tfabutton.jsx';
// Style
import style from './tfcomments_style.scss';
// Resources
import resource_perenoel from '../../../../resource/perenoel.png';
import resource_tamarre from '../../../../resource/tamarre.png';

class TfComments extends React.Component {

    render(){
        // on va dire que tous les articles ont les mêmes commentaires...

        return <section className="tf-comments">

            <h2>2 commentaires sur cet article</h2>
            
            <textarea placeholder="Laissez un commentaire. Validez avec la touche [Entrée]."></textarea>

            <div className="tf-comment">
                <div className="tf-author">
                    <img src={resource_perenoel} alt="Le père Noël"/>
                </div>
                <div className="tf-comment-content">
                    <div className="tf-comment-info">
                        <strong>Le père Noël</strong><span className="tf-comment-date">Hier, à 22h05</span>
                    </div>
                    Ho ho ho ! C'est bien évidemment un super article ! Tous les enfants sages qui s'y sont rendus auront un joli cadeau à Noël ! Hé oui, ce sont bien les chinois qui fabriquent vos jouets, pas les japonais !
                </div>
            </div>

            <div className="tf-comment">
                <div className="tf-author">
                    <img src={resource_tamarre} alt="Tamarre"/>
                </div>
                <div className="tf-comment-content">
                    <div className="tf-comment-info">
                        <strong>Tamarre Dequoigélair</strong><span className="tf-comment-date">Mardi, à 11h44</span>
                    </div>
                    Ça c'est du voyage ! Super article, je vous bénis toi et toute ta famille ! Ainsi que tes cousins, tes demi-frères, tes futurs petits-enfants, ainsi que ceux de ta tante Germaine, celle qui t'a donné tes cousins germains.
                </div>
            </div>

        </section>;
    }

}

module.exports = TfComments;