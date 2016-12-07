import 'babel-polyfill';
// React
import React from 'react';
// Additional libraries
// Components
// Style
import style from './tfpagetitle_style.scss';

class TfPageTitle extends React.Component {

    render(){
        return <section className="tf-pagetitle"><div>
            <h1>{this.props.children}</h1>
        </div></section>;
    }

}

module.exports = TfPageTitle;