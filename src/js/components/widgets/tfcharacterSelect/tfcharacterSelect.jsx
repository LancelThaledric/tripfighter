import 'babel-polyfill';
// Configuration
import {baseURL} from 'config';
// React
import React from 'react';
// Additional librairies
import {Link} from 'react-router';
import Url from './../../../module/url.jsx';
import Taxonomy from './../../../module/taxonomy.jsx';
// Components
// Style
import style from './tfcharacterSelect_style.scss';
// Resources
import resource_leftFighter from '../../../../resource/moderne_kun_by_hellowizz.png';
import resource_rightFighter from '../../../../resource/traditionnel_kun_by_hellowizz.png';
import resource_versus from '../../../../resource/versus.png';

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
                    <Link to={Url.computeUrl(Taxonomy.Univers.moderne.slug, this.props.themeSlug)} className="tf-character-select-link">
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
                    <Link to={Url.computeUrl(Taxonomy.Univers.traditionnel.slug, this.props.themeSlug)} className="tf-character-select-link">
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

TfCharacterSelect.propTypes = {
    themeName: React.PropTypes.string,
    themeSlug:React.PropTypes.string
};

TfCharacterSelect.defaultProps = {
    themeName: '',
    themeSlug: ''
};

module.exports = TfCharacterSelect;