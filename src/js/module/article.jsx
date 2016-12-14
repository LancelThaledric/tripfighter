// Configuration
import {baseURL} from 'config';
// Additional Libraries
import Taxonomy from './taxonomy.jsx';
// Data
import data_articles from 'raw!../../resource/articles.json';

module.exports = {

    parseArticles: function(data){
        for(let article of data){
            // Image parsing
            article.image = baseURL+article.image;

            // Date parsing
            article.date = new Date(article.date);
        }
        return data;
    },

    sortRecent: function(a, b){
        return b.date - a.date;
    },

    sortDate: function(a, b){
        return a.date - b.date;
    },

    filterByTags: function(tags, articles){
        var out_articles = articles;
        for(var tag of tags){
            out_articles = this.filterByTag(tag, out_articles);
        }
        return out_articles;
    },

    filterByTag: function(tag, articles){
        var out_articles = [];
        var regex = new RegExp(tag, 'i');
        for(let article of articles){
            if(regex.test(article.tags))
                out_articles.push(article);
        }
        return out_articles;
    },

    getBySlug: function(slug){
        if(!slug) return null;
        var articles = JSON.parse(data_articles);
        for(let article of articles){
            if(article.slug == slug)
                return article;
        }
        return null;
    },

    getUnivers: function(article){
        for(let tag of article.tags){
            if(tag in Taxonomy.Univers){
                return Taxonomy.Univers[tag];
            }
        }
        return Taxonomy.Univers.default;
    },

    getTheme: function(article){
        for(let tag of article.tags){
            if(tag in Taxonomy.Themes){
                return Taxonomy.Themes[tag];
            }
        }
        return null
    }

};