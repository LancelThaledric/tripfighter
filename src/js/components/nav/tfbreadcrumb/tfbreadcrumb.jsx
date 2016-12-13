import 'babel-polyfill';
// React
import React from 'react';
// Additional libraries
import {Icon} from 'react-fa';
import {Link} from 'react-router';
import Url from './../../../module/url.jsx';
// Components
// Style
import style from './tfbreadcrumb_style.scss';

class TfBreadcrumb extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

        let links = [];
        if(this.props.univers)
            links.push(<Icon name="angle-right" key={'icon-univers-'+this.props.univers.slug}/>, <Link to={Url.computeUrl(this.props.univers.slug)} key={'univers-'+this.props.univers.slug}>{this.props.univers.name}</Link>);
        if(this.props.theme)
            links.push(<Icon name="angle-right" key={'icon-theme-'+this.props.theme.slug}/>, <Link to={Url.computeUrl(this.props.theme.slug)} key={'theme-'+this.props.theme.slug}>{this.props.theme.name}</Link>);
        if(this.props.articleTitle && this.props.articleSlug)
            links.push(<Icon name="angle-right" key={'icon-article-'+this.props.articleSlug}/>, <Link to={Url.computeUrl(this.props.articleSlug)} key={'article-'+this.props.articleSlug}>{this.props.articleTitle}</Link>);
        
        return <nav className="tf-breadcrumb">
            <div className="tf-breadcrumb-nav">
                <Link to={Url.homeUrl()}><Icon name="home"/></Link>
                {links}
            </div>
            <div className="tf-breadcrumb-switcher">

            </div>
        </nav>;
    }

}

TfBreadcrumb.defaultProps = {
    univers: '',
    theme: '',
    articleTitle: '',
    articleSlug: ''
};

module.exports = TfBreadcrumb;