import 'babel-polyfill';
// Configuration
import {baseURL} from 'config';
// React
import React from 'react';
// Additional libraries
import {Link} from 'react-router';
import Url from './../../../module/url.jsx';
import Taxonomy from './../../../module/taxonomy.jsx';
// Components
// Style
import style from './tfthemeSelectMini_style.scss';

class TfThemeSelectMini extends React.Component {

    render(){

        let universSuffix = this.props.universName ? '/' : '';

        return <section className="tf-theme-select-mini">
            <div className="tf-theme-select-selector">
                <Link to={Url.computeUrl(this.props.universSlug, Taxonomy.Themes.lieux.slug)} className="tf-theme-lieux">
                    <div className="tf-theme-thumbnail"/>
                    <h3 className="tf-theme-title">{Taxonomy.Themes.lieux.name}</h3>
                </Link>
                <Link to={Url.computeUrl(this.props.universSlug, Taxonomy.Themes.art.slug)} className="tf-theme-art">
                    <div className="tf-theme-thumbnail"/>
                    <h3 className="tf-theme-title">{Taxonomy.Themes.art.name}</h3>
                </Link>
                <Link to={Url.computeUrl(this.props.universSlug, Taxonomy.Themes.divertissement.slug)} className="tf-theme-divertissement">
                    <div className="tf-theme-thumbnail"/>
                    <h3 className="tf-theme-title">{Taxonomy.Themes.divertissement.name}</h3>
                </Link>
                <Link to={Url.computeUrl(this.props.universSlug, Taxonomy.Themes.gastronomie.slug)} className="tf-theme-gastronomie">
                    <div className="tf-theme-thumbnail"/>
                    <h3 className="tf-theme-title">{Taxonomy.Themes.gastronomie.name}</h3>
                </Link>
                <Link to={Url.computeUrl(this.props.universSlug, Taxonomy.Themes.vetements.slug)} className="tf-theme-vetements">
                    <div className="tf-theme-thumbnail"/>
                    <h3 className="tf-theme-title">{Taxonomy.Themes.vetements.name}</h3>
                </Link>
                <Link to={Url.computeUrl(this.props.universSlug, Taxonomy.Themes.styledevie.slug)} className="tf-theme-styledevie">
                    <div className="tf-theme-thumbnail"/>
                    <h3 className="tf-theme-title">{Taxonomy.Themes.styledevie.name}</h3>
                </Link>
            </div>
        </section>;
    }

}

TfThemeSelectMini.propTypes = {
    universSlug: React.PropTypes.string
};

TfThemeSelectMini.defaultProps = {
    universSlug: ''
};

module.exports = TfThemeSelectMini;