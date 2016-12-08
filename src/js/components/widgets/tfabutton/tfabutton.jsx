import 'babel-polyfill';
// React
import React from 'react';
// Additional libraries
import {Link} from 'react-router';
import ClassNames from 'classnames';
// Components
// Style
import style from './tfabutton_style.scss';

class TfAButton extends React.Component {

    render(){

        let className = this.props.className;

        return <Link {...this.props} className={ClassNames(className, 'tf-abutton')}>
            <div className="tf-transiter"/>
            <div className="tf-transiter-2"/>
            <span>{this.props.children}</span>
        </Link>;
    }

}

module.exports = TfAButton;