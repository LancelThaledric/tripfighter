import 'babel-polyfill';

import React from 'react';

import {Icon} from 'react-fa';

import TfAButton from './abutton.jsx';

class TfHeader extends React.Component {

    render(){

        return <header className="tf-site-header"><nav>
            <div>
                <TfAButton href="#" id="tf-main-menu-toggle"><Icon fixedWidth name="bars"/> Menu</TfAButton>
            </div>
            <div>
                <a href="#" id="tf-home-link" className="tf-site-title">TRIP FIGHTER</a>
            </div>
            <div>
                <TfAButton href="#" id="tf-search-link" title="Recherchez du Japon"><Icon fixedWidth name="search"/></TfAButton>
                <TfAButton href="#" id="tf-login-box" title="Connexion / Inscription"><Icon fixedWidth name="user"/></TfAButton>
            </div>
            
        </nav></header>;
    }

}

module.exports = TfHeader;