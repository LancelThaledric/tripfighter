import 'babel-polyfill';
// React
import React from 'react';
// Additional libraries
import ClassNames from 'classnames';
// Components
// Style
import style from './tfpagetitle_style.scss';

class TfPageTitle extends React.Component {

    render(){

        let className = this.props.inverted ? 'tf-pagetitle' : 'tf-pagetitle inverted-section';

        return <section className={className}><div>
            <h1>{this.props.children}</h1>
        </div></section>;
    }

}

module.exports = TfPageTitle;