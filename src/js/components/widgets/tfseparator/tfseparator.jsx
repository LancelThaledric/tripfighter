import 'babel-polyfill';
// React
import React from 'react';
// Additional librairies
// Components
// Style
import style from './tfseparator_style.scss';

class TfSeparator extends React.Component {

    render(){
        return <div className="tf-separator">
            <div className="tf-separator-icon"></div>
            <div className="tf-separator-icon"></div>
            <div className="tf-separator-icon"></div>
        </div>;
    }

}

module.exports = TfSeparator;