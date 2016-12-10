import 'babel-polyfill';
// React
import React from 'react';
// Additional libraries
import {Icon} from 'react-fa';
import Article from './../../../module/article.jsx';
// Components
import TfArticleGrid from './../../sections/tfarticleGrid/tfarticleGrid.jsx';
import TfAButton from './../../widgets/tfabutton/tfabutton.jsx';
// Style
import style from './tflastArticles_style.scss';
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
        data.sort(Article.sortRecent);
        this.setState({data: data});
    }

    render(){

        return <section className="tf-last-articles">
            <h2>
                Tous les articles de Trip Fighter en une page !
            </h2>
            <p>
                C'est tellement extra qu'aurait du mal à y croire !
            </p>

            <TfArticleGrid data={this.state.data}/>
        </section>;
    }

}

module.exports = TfAllArticles;