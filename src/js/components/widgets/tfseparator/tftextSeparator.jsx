import 'babel-polyfill';
// React
import React from 'react';
// Additional librairies
// Components
// Style
import style from './tfseparator_style.scss';

class TfTextSeparator extends React.Component {

    render(){
        return <h2 className="tf-text-separator">
            {this.props.children}
        </h2>;
    }

}

module.exports = TfTextSeparator;