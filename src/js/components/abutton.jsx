import 'babel-polyfill';

import React from 'react';
import ClassNames from 'classnames';

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