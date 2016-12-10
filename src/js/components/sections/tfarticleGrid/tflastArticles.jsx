import 'babel-polyfill';
// React
import React from 'react';
// Additional libraries
import {Icon} from 'react-fa';
import {parseArticles} from './../../../module/article.jsx';
// Components
import TfArticleGrid from './../../sections/tfarticleGrid/tfarticleGrid.jsx';
import TfAButton from './../../widgets/tfabutton/tfabutton.jsx';
// Style
import style from './tflastArticles_style.scss';
// Resources
// Data
import data_articles from 'raw!../../../../resource/articles.json';

class TfLastArticles extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: []
        };

        this.componentWillMount = this.componentWillMount.bind(this);
        this.loadData = this.loadData.bind(this);

        this.maxLoadedArticles = 8;
    }

    componentWillMount(){
        this.loadData(parseArticles(JSON.parse(data_articles)));
    }

    loadData(data){
        data.sort(function(a, b){return b.date - a.date;});
        data = data.slice(0, this.maxLoadedArticles);
        this.setState({data: data});
    }

    render(){

        return <section className="tf-last-articles">
            <h2>
                Derniers articles qui tuent
            </h2>

            <TfArticleGrid data={this.state.data}/>

            <div className="tf-center-button-bar">
                <TfAButton href="#" title="Plus d'articles">Mettez-moi une dose de <strong>Japon</strong> supplémentaire</TfAButton>
            </div>
        </section>;
    }

}

module.exports = TfLastArticles;