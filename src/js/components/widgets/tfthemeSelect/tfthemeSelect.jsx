import 'babel-polyfill';
// Configuration
import {baseURL} from 'config';
// React
import React from 'react';
// Additional librairies
import {Link} from 'react-router';
// Components
// Style
import style from './tfthemeSelect_style.scss';

class TfThemeSelect extends React.Component {

    render(){

        let universSuffix = this.props.universName ? '/' : '';

        return <section className="tf-theme-select">
            <h2>
                Choisissez un thème
            </h2>
            <div className="tf-theme-select-selector">
                <Link to={baseURL+this.props.universName+universSuffix+"lieux"} className="tf-theme-environnement">
                    <div className="tf-theme-thumbnail"/>
                    <h3 className="tf-theme-title">Lieux</h3>
                </Link>
                <Link to={baseURL+this.props.universName+universSuffix+"art"} className="tf-theme-art">
                    <div className="tf-theme-thumbnail"/>
                    <h3 className="tf-theme-title">Art</h3>
                </Link>
                <Link to={baseURL+this.props.universName+universSuffix+"divertissement"} className="tf-theme-divertissement">
                    <div className="tf-theme-thumbnail"/>
                    <h3 className="tf-theme-title">Divertissement</h3>
                </Link>
                <Link to={baseURL+this.props.universName+universSuffix+"gastronomie"} className="tf-theme-gastronomie">
                    <div className="tf-theme-thumbnail"/>
                    <h3 className="tf-theme-title">Gastronomie</h3>
                </Link>
                <Link to={baseURL+this.props.universName+universSuffix+"vetements"} className="tf-theme-vetements">
                    <div className="tf-theme-thumbnail"/>
                    <h3 className="tf-theme-title">Vêtements</h3>
                </Link>
                <Link to={baseURL+this.props.universName+universSuffix+"styledevie"} className="tf-theme-styledevie">
                    <div className="tf-theme-thumbnail"/>
                    <h3 className="tf-theme-title">Style de vie</h3>
                </Link>
            </div>
        </section>;
    }

}


TfThemeSelect.propTypes = {
    universName: React.PropTypes.string
};

TfThemeSelect.defaultProps = {
    universName: ''
};

module.exports = TfThemeSelect;