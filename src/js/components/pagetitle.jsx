import 'babel-polyfill';

import React from 'react';

class TfPageTitle extends React.Component {

    render(){
        return <section className="tf-pagetitle">
            <h1>{this.props.children}</h1>
        </section>;
    }

}

module.exports = TfPageTitle;