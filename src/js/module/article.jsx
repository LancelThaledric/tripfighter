// Configuration
import {baseURL} from 'config';

module.exports = {

    parseArticles: function(data){
        console.log(data);
        for(let article of data){
            //console.log(article);
            // Image parsing
            article.image = baseURL+article.image;

            // Date parsing
            article.date = new Date(article.date);
        }
        return data;
    }

};