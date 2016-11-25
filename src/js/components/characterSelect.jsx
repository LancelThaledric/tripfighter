import 'babel-polyfill';

import React from 'react';

import {Link} from 'react-router';

import resource_leftFighter from '../../resource/fighter-left.png';
import resource_rightFighter from '../../resource/fighter-right.png';
import resource_versus from '../../resource/versus.png';

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
                    <Link to="/tripfighter/build/moderne/" className="tf-character-select-link">
                        <div className="tf-character-inner">
                            <h3 className="tf-character-select-title"><span className="tf-character-title-small">Japon</span>Moderne</h3>
                            <img className="tf-fighter" src={resource_leftFighter} alt=""/>
                            <p className="tf-fighter-description">
                                Partez à la découverte des somptueux paysages urbains japonais !
                            </p>
                            <div className="tf-fighter-bar">
                                <div className="tf-fighter-bar-in"></div>
                            </div>
                            <img className="tf-character-select-versus" src={resource_versus} alt=""/>
                        </div>
                    </Link>
                </div>
                <div className="tf-character-right">
                    <Link to="/tripfighter/build/traditionnel/" className="tf-character-select-link">
                        <div className="tf-character-inner">
                            <h3 className="tf-character-select-title"><span className="tf-character-title-small">Japon</span>Traditionnel</h3>
                            <img className="tf-fighter" src={resource_rightFighter} alt=""/>
                            <p className="tf-fighter-description">
                                Explorez les campagnes luxuriantes du pays du Soleil levant !
                            </p>
                            <div className="tf-fighter-bar">
                                <div className="tf-fighter-bar-in"></div>
                            </div>
                            <img className="tf-character-select-versus" src={resource_versus} alt=""/>
                        </div>
                    </Link>
                </div>
            </div>
        </section>;
    }

}

module.exports = TfCharacterSelect;