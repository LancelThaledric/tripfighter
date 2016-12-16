import 'babel-polyfill';
// React
import React from 'react';
// Additional libraries
import {Link} from 'react-router';
import ClassNames from 'classnames';
import Url from './../../../module/url.jsx';
import Article from './../../../module/article.jsx';
// Components
// Style
import style from './tfarticleMini_style.scss';

class TfArticleMini extends React.Component {

    render(){

        let tfArticleMiniThumbnail = this.props.article.image ? (
        <div className="tf-article-mini-thumbnail"
                style={{backgroundImage: 'url('+this.props.article.image+')'}}
        ></div>) : (<div className="tf-article-mini-thumbnail" ></div>);

        let articleUnivers = Article.getUnivers(this.props.article);
        let articleMiniInnerClassName = ClassNames("tf-article-mini-inner", articleUnivers.className);

        return <div className="tf-article-mini-wrapper">
        <Link to={Url.computeUrl('', '', this.props.article.slug)} className="tf-article-mini-box">
            {tfArticleMiniThumbnail}
            <div className={articleMiniInnerClassName}>
                <div className="tf-transiter"></div>
                <div className="tf-article-mini-content">
                    {this.props.children}
                </div>
            </div>
        </Link>
    </div>;
    }

}

TfArticleMini.propTypes = {
    article: React.PropTypes.object
}

module.exports = TfArticleMini;