import 'babel-polyfill';
// Configuration
import {baseURL} from 'config';
// React
import React from 'react';
// Additional libraries
import {Icon} from 'react-fa';
import Article from './../../../module/article.jsx';
import ClassNames from 'classnames';
// Components
import TfArticleGrid from './../../sections/tfarticleGrid/tfarticleGrid.jsx';
import TfAButton from './../../widgets/tfabutton/tfabutton.jsx';
// Style
import style from './tfallArticles_style.scss';
// Resources
// Data
import data_articles from 'raw!../../../../resource/articles.json';

class TfAllArticles extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        };

        this.componentWillMount = this.componentWillMount.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    componentWillMount(){
        this.loadData(Article.parseArticles(JSON.parse(data_articles)));
    }

    loadData(data){
        // filter tags
        data = Article.filterByTags(this.props.tags, data);
        // Sorting
        if(this.props.reverse) data.sort(Article.sortRecent);
        else data.sort(Article.sortDate);
        // limit
        if(this.props.limit !== null) data = data.slice(0, this.props.limit);

        this.setState({data: data});
    }

    render(){

        let title = this.props.title ? <h2>{this.props.title}</h2> : null;

        let buttonmore = this.props.buttonmore ? <div className="tf-center-button-bar">
                <TfAButton to={baseURL+'articles/'} title="Plus d'articles">Mettez-moi une dose de <strong>Japon</strong> supplémentaire</TfAButton>
            </div> : null;

            let sectionClassName = ClassNames("tf-all-articles", this.props.className)

        return <section className={sectionClassName}>
            {title}
            {this.props.description}

            <TfArticleGrid data={this.state.data}/>
            {buttonmore}
        </section>;
    }

}

TfAllArticles.propTypes = {
    reverse: React.PropTypes.bool,
    tags: React.PropTypes.arrayOf(React.PropTypes.string),
    limit: React.PropTypes.number,
    title: React.PropTypes.string,
    description: React.PropTypes.element,
};

TfAllArticles.defaultProps = {
    reverse: false,
    tags: [],
    limit: null,
    title: '&lt;Ici un titre&gt',
    description: <p>&lt;Ici description&gt;</p>,
    buttonmore: false
};

module.exports = TfAllArticles;