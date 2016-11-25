import 'babel-polyfill';

import React from 'react';

import {Icon} from 'react-fa';
import {Link} from 'react-router';

import TfAButton from './abutton.jsx';

class TfHeader extends React.Component {

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.onMenuToggle();
        e.preventDefault();
    }

    render(){

        let menuIcon = this.props.menuToggled ? 'times' : 'bars';

        return <header className="tf-site-header"><nav>
            <div>
                <TfAButton href="#tf-menu" id="tf-main-menu-toggle" onClick={this.handleClick}><Icon fixedWidth name={menuIcon}/> Menu</TfAButton>
            </div>
            <div>
                <Link to="/tripfighter/build/" id="tf-home-link" className="tf-site-title">TRIP FIGHTER</Link>
            </div>
            <div>
                <TfAButton href="#" id="tf-search-link" title="Recherchez du Japon"><Icon fixedWidth name="search"/></TfAButton>
                <TfAButton href="#" id="tf-login-box" title="Connexion / Inscription"><Icon fixedWidth name="user"/></TfAButton>
            </div>
            
        </nav></header>;
    }

}

module.exports = TfHeader;