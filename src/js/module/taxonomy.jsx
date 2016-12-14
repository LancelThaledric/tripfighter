// Configuration
import {baseURL} from 'config';

var Univers = {
    moderne: {
        name: 'Moderne',
        slug: 'moderne',
        className: 'tf-modern'
    },
    traditionnel: {
        name: 'Traditionnel',
        slug: 'traditionnel',
        className: 'tf-trad'
    }
};
Univers.default = Univers.moderne;

var Themes = {
    lieux: {
        name: 'Lieux',
        slug: 'lieux'
    },
    art: {
        name: 'Art',
        slug: 'art'
    },
    divertissement: {
        name: 'Divertissement',
        slug: 'divertissement'
    },
    gastronomie: {
        name: 'Gastronomie',
        slug: 'gastronomie'
    },
    vetements: {
        name: 'Vêtements',
        slug: 'vetements'
    },
    styledevie: {
        name: 'Style de vie',
        slug: 'styledevie'
    }
}

module.exports = {Univers, Themes};