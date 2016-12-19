import 'babel-polyfill';
// React
import React from 'react';
// Additional libraries
import {Link} from 'react-router';
import {Icon} from 'react-fa';
import ClassNames from 'classnames';
// Components
import TfAButton from './../../widgets/tfabutton/tfabutton.jsx';
import TfComments from './../../sections/tfcomments/tfcomments.jsx';
// Style
import style from './tfarticleReader_style.scss';

class TfArticleReader extends React.Component {

    render(){

        let className = this.props.className;

        return <section className="tf-article-reader">
            <div className="tf-article-image-wrapper">
                <div className="tf-article-image" style={{backgroundImage: 'url('+this.props.article.image+')'}}/>
            </div>
            <div className="tf-article-social">
                <TfAButton to="#" className="tf-facebook-button"><Icon name="facebook"/></TfAButton>
                <TfAButton to="#" className="tf-twitter-button"><Icon name="twitter"/></TfAButton>
                <TfAButton to="#" className="tf-pinterest-button"><Icon name="pinterest-p"/></TfAButton>
            </div>
            <div className="tf-article-content">
                <h1>{this.props.article.title}</h1>
                <p>{this.props.article.description}</p>
                <div className="tf-article-text" dangerouslySetInnerHTML={{__html: this.props.article.content}}></div>
                <TfComments/>

            </div>
        </section>;
    }

}

module.exports = TfArticleReader;