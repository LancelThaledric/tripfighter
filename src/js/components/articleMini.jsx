import 'babel-polyfill';

import React from 'react';

class TfArticleMini extends React.Component {

    render(){
        return <div className="tf-article-mini-wrapper">
        <div className="tf-article-mini-box">
            <div className="tf-article-mini-inner">
                <h3>{this.props.title}</h3>
            </div>
        </div>
    </div>;
    }

}

module.exports = TfArticleMini;