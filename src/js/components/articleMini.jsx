import 'babel-polyfill';

import React from 'react';

class TfArticleMini extends React.Component {

    render(){

        let tfArticleMiniThumbnail = this.props.imageUrl ? (
        <div className="tf-article-mini-thumbnail"
                style={{backgroundImage: 'url('+this.props.imageUrl+')'}}
        ></div>) : (<div className="tf-article-mini-thumbnail" ></div>);

        return <div className="tf-article-mini-wrapper">
        <a href="#" className="tf-article-mini-box">
            {tfArticleMiniThumbnail}
            <div className="tf-article-mini-inner">
                <div className="tf-transiter"></div>
                <div className="tf-article-mini-content">
                    {this.props.children}
                </div>
            </div>
        </a>
    </div>;
    }

}

TfArticleMini.propTypes = {
    imageUrl: React.PropTypes.string
}

module.exports = TfArticleMini;