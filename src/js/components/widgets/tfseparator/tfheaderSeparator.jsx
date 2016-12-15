import 'babel-polyfill';
// React
import React from 'react';
// Additional librairies
// Components
// Style
import style from './tfseparator_style.scss';

class TfHeaderSeparator extends React.Component {

    render(){
        return <div className="tf-header-separator tf-separator">
            <div className="tf-separator-icon"></div>
            <div className="tf-separator-icon"></div>
            <div className="tf-separator-icon"></div>
        </div>;
    }

}

module.exports = TfHeaderSeparator;