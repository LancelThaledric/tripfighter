import 'babel-polyfill';
// React
import React from 'react';
// Additional libraries
import ClassNames from 'classnames';
// Components
// Style
import style from './tfabutton_style.scss';

class TfAButton extends React.Component {

    render(){

        let className = this.props.className;

        return <a {...this.props} className={ClassNames(className, 'tf-abutton')}>
            <div className="tf-transiter"/>
            <div className="tf-transiter-2"/>
            <span>{this.props.children}</span>
        </a>;
    }

}

module.exports = TfAButton;