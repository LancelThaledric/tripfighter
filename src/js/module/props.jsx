// Configuration
import {baseURL} from 'config';

module.exports = {

    makeUniversProps: function(univers){
        return {
            universName: univers.name,
            universSlug: univers.slug,
            universClass: univers.className,
            universTax: univers
        };
    },

    makeThemeProps: function(theme){
        return {
            themeName: theme.name,
            themeSlug: theme.slug,
            themeTax: theme
        };
    }

};