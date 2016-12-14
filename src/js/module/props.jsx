// Configuration
import {baseURL} from 'config';

module.exports = {

    makeUniversProps: function(univers){
        if(!univers) return {};
        return {
            universName: univers.name,
            universSlug: univers.slug,
            universClass: univers.className,
            universTax: univers
        };
    },

    makeThemeProps: function(theme){
        if(!theme) return {};
        return {
            themeName: theme.name,
            themeSlug: theme.slug,
            themeTax: theme
        };
    }

};