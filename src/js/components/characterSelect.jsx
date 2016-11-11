import 'babel-polyfill';

import React from 'react';

import resource_leftFighter from '../../resource/fighter-left.png';
import resource_rightFighter from '../../resource/fighter-right.png';

class TfCharacterSelect extends React.Component {

    render(){

        return <section className="tf-character-select">
            <h2>
                Select your challenger
            </h2>
            <p className="tf-character-select-intro">
                Choisissez un univers et commencez votre voyage culturel
            </p>
            <div className="tf-character-select-selector">
                <div className="tf-character-left">
                    <a href="#" className="tf-character-select-link">
                        <div className="tf-character-inner">
                            <h3 className="tf-character-select-title"><span className="tf-character-title-small">Japon</span>Moderne</h3>
                            <img className="tf-fighter" src={resource_leftFighter}/>
                            <p className="tf-fighter-description">
                                Partez à la découverte des somptueux paysages urbains japonais !
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tf-character-right">
                    <a href="#"  className="tf-character-select-link">
                        <div className="tf-character-inner">
                            <h3 className="tf-character-select-title"><span className="tf-character-title-small">Japon</span>Traditionnel</h3>
                            <img className="tf-fighter" src={resource_rightFighter}/>
                            <p className="tf-fighter-description">
                                Explorez les campagnes luxuriantes du pays du Soleil levant !
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </section>;
    }

}

module.exports = TfCharacterSelect;