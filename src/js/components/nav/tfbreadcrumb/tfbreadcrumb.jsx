import 'babel-polyfill';
// React
import React from 'react';
// Additional libraries
import {Icon} from 'react-fa';
import {Link} from 'react-router';
import Url from './../../../module/url.jsx';
import Taxonomy from './../../../module/taxonomy.jsx';
import ClassNames from 'classnames';
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
        
        // Calcul du switcher
        // 1 : univers
        let switchLink = {
            url: '', text: '', subtext: '', icon: null, universSlug: null, universClass: null
        }
        if(this.props.univers == Taxonomy.Univers.moderne){
            switchLink.url = Url.computeUrl(Taxonomy.Univers.traditionnel.slug);
            switchLink.text = 'Aller au Japon traditionnel';
            switchLink.icon = <Icon name="angle-right"/>
            switchLink.universSlug = Taxonomy.Univers.traditionnel.slug;
            switchLink.universClass = Taxonomy.Univers.traditionnel.className;
        } else if(this.props.univers == Taxonomy.Univers.traditionnel){
            switchLink.url = Url.computeUrl(Taxonomy.Univers.moderne.slug);
            switchLink.text = 'Aller au Japon moderne';
            switchLink.icon = <Icon name="angle-right"/>
            switchLink.universSlug = Taxonomy.Univers.moderne.slug;
            switchLink.universClass = Taxonomy.Univers.moderne.className;
        }
        // 2 : thème
        if(this.props.theme){
            switchLink.url = Url.computeUrl(switchLink.universSlug, this.props.theme.slug)
            switchLink.subtext = 'Thème '+this.props.theme.name;
        }
        // 3 : switcher
        let switcherElement = null;
        if(switchLink.universSlug){
            switcherElement = <div className="tf-breadcrumb-switcher">
                <Link to={switchLink.url} className={switchLink.universClass}>
                    <div>
                        <h3>{switchLink.text}</h3>
                        <span>{switchLink.subtext}</span>
                    </div>
                    {switchLink.icon}
                </Link>
            </div>;
        }

        return <nav className="tf-breadcrumb">
            <div className="tf-breadcrumb-nav">
                <Link to={Url.homeUrl()}><Icon name="home"/></Link>
                {links}
            </div>
            {switcherElement}
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