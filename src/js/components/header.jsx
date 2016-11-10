import 'babel-polyfill';

import React from 'react';

import {Icon} from 'react-fa';

class TfHeader extends React.Component {

    render(){

        return <header className="tf-site-header"><nav>
            <a id="tf-main-menu-toggle"><Icon fixedWidth name="bars"/> Menu</a>
            <a id="tf-home-link" className="tf-site-title">TRIP FIGHTER</a>
            <a id="tf-search-link" title="Recherchez du Japon"><Icon fixedWidth name="search"/>Rechercher</a>
            <a id="tf-login-box">Connexion</a>
        </nav></header>;
    }

}

module.exports = TfHeader;