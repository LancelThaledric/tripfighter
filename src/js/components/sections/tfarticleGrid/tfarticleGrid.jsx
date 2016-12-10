import 'babel-polyfill';
// React
import React from 'react';
// Additional libraries
import {Icon} from 'react-fa';
// Components
import TfArticleMini from './../../widgets/tfarticleMini/tfarticleMini.jsx';
import TfAButton from './../../widgets/tfabutton/tfabutton.jsx';
// Style
import style from './tfarticleGrid_style.scss';

class TfArticleGrid extends React.Component {

    render(){
        let out_articles = [];
        for(var article of this.props.data){
            let tags = [];
            for(var tagid in article.tags){
                tags.push(<div className="tf-tag-little" key={tagid}>{article.tags[tagid]}</div>);
            }

            out_articles.push(<TfArticleMini imageUrl={article.image} key={article.id}>
                <h3>{article.title}</h3><hr/>
                <p>{article.description}</p>
                <div className="tf-tag-list">{tags}</div>
            </TfArticleMini>);
        }

        return <div className="tf-article-grid">
            {out_articles}
        </div>;
    }

}

TfArticleGrid.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number,
        title: React.PropTypes.string,
        description: React.PropTypes.string,
        tags: React.PropTypes.arrayOf(React.PropTypes.string),
        image: React.PropTypes.string
    }))
};

TfArticleGrid.defaultProps = {
    data: []
};

module.exports = TfArticleGrid;