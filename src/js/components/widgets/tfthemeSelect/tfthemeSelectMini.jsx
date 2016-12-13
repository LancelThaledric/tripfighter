import 'babel-polyfill';
// Configuration
import {baseURL} from 'config';
// React
import React from 'react';
// Additional libraries
import {Link} from 'react-router';
// Components
// Style
import style from './tfthemeSelectMini_style.scss';

class TfThemeSelectMini extends React.Component {

    render(){

        let universSuffix = this.props.universName ? '/' : '';

        return <section className="tf-theme-select-mini">
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

TfThemeSelectMini.propTypes = {
    universName: React.PropTypes.string
};

TfThemeSelectMini.defaultProps = {
    universName: ''
};

module.exports = TfThemeSelectMini;