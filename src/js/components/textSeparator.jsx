import 'babel-polyfill';

import React from 'react';

class TfTextSeparator extends React.Component {

    render(){
        return <h2 className="tf-text-separator">
            {this.props.children}
        </h2>;
    }

}

module.exports = TfTextSeparator;