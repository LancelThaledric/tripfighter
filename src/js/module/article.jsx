// Configuration
import {baseURL} from 'config';

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
    }

};