import 'babel-polyfill';
// React
import React from 'react';
// Additional libraries
// Components
// Style
import style from './tfthemeSelect_style.scss';

class TfThemeSelect extends React.Component {

    render(){

        return <section className="tf-theme-select">
            <h2>
                Choisissez un thème
            </h2>
            <div className="tf-theme-select-selector">
                <a className="tf-theme-environnement" href="#">
                    <div className="tf-theme-thumbnail"/>
                    <h3 className="tf-theme-title">Environnement</h3>
                </a>
                <a className="tf-theme-art" href="#">
                    <div className="tf-theme-thumbnail"/>
                    <h3 className="tf-theme-title">Art</h3>
                </a>
                <a className="tf-theme-divertissement" href="#">
                    <div className="tf-theme-thumbnail"/>
                    <h3 className="tf-theme-title">Divertissement</h3>
                </a>
                <a className="tf-theme-gastronomie" href="#">
                    <div className="tf-theme-thumbnail"/>
                    <h3 className="tf-theme-title">Gastronomie</h3>
                </a>
                <a className="tf-theme-vetements" href="#">
                    <div className="tf-theme-thumbnail"/>
                    <h3 className="tf-theme-title">Vêtements</h3>
                </a>
                <a className="tf-theme-styledevie" href="#">
                    <div className="tf-theme-thumbnail"/>
                    <h3 className="tf-theme-title">Style de vie</h3>
                </a>
            </div>
        </section>;
    }

}

module.exports = TfThemeSelect;