import 'babel-polyfill';

import React from 'react';

import {Icon} from 'react-fa';

class TfHeader extends React.Component {

    render(){

        return <header className="tf-site-header"><nav>
            <a id="tf-main-menu-toggle"><Icon fixedWidth name="bars" /> Menu</a>
            <a id="tf-home-link" className="tf-site-title">TRIP FIGHTER</a>
            <form className="tf-search-box">
                <input type="search" name="search" className="tf-search-box-input"/>
            </form>
            <a id="tf-login-box">Connexion</a>
        </nav></header>;
    }

}

module.exports = TfHeader;