import 'babel-polyfill';

import React from 'react';

class TfHeader extends React.Component {

    render(){

        return <header className="tf-site-header"><nav>
            <a id="main-menu-toggle">E Menu</a>
            <a id="home-link" className="site-title">TRIP FIGHTER</a>
            <form className="search-box">
                <input type="search" name="search" className="search-box-input"/>
            </form>
            <a id="login-box">Connexion</a>
        </nav></header>;
    }

}

module.exports = TfHeader;