// Configuration
import {baseURL} from 'config';

module.exports = {

    makeUrl: function(path = ''){
        return baseURL + path;
    },

    computeUrl: function(univers = '', theme = '', article = ''){
        
        let path = '';
        if(univers) path += univers + '/';
        if(theme) path += theme + '/';
        if(article) path += 'article/' + article + '/';

        return this.makeUrl(path);

    },

    homeUrl: function(){
        return baseURL;
    }

};