import 'babel-polyfill';
// Configuration
import {baseURL} from 'config';
// React
import React from 'react';
// Additional librairies
import {Link} from 'react-router';
// Components
// Style
import style from './tfcharacterSelectMini_style.scss';
// Resources
import resource_leftFighter from '../../../../resource/fighter-left.png';
import resource_rightFighter from '../../../../resource/fighter-right.png';

class TfCharacterSelectMini extends React.Component {

    render(){

        return <section className="tf-character-select-mini">
            <h2>
                Choisissez un univers
            </h2>
            <div className="tf-character-select-selector">
                <div className="tf-character-left">
                    <Link to={baseURL+"moderne/"} className="tf-character-select-link">
                        <div className="tf-character-inner">
                            <h3 className="tf-character-select-title"><span className="tf-character-title-small">Japon</span>Moderne</h3>
                            <img className="tf-fighter" src={resource_leftFighter} alt=""/>
                        </div>
                    </Link>
                </div>
                <div className="tf-character-right">
                    <Link to={baseURL+"traditionnel/"}  className="tf-character-select-link">
                        <div className="tf-character-inner">
                            <h3 className="tf-character-select-title"><span className="tf-character-title-small">Japon</span>Traditionnel</h3>
                            <img className="tf-fighter" src={resource_rightFighter} alt=""/>
                        </div>
                    </Link>
                </div>
            </div>
        </section>;
    }

}

module.exports = TfCharacterSelectMini;