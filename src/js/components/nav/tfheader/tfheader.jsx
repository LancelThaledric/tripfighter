import 'babel-polyfill';
// React
import React from 'react';
// Additional libraries
import {Icon} from 'react-fa';
import {Link} from 'react-router';
// Components
import TfAButton from './../../widgets/tfabutton/tfabutton.jsx';
// Style
import style from './tfheader_style.scss';

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
                <TfAButton href="/tripfighter/build/" id="tf-home-link" className="tf-site-title">TRIP FIGHTER</TfAButton>
            </div>
            <div>
                <TfAButton href="#" id="tf-search-link" title="Recherchez du Japon"><Icon fixedWidth name="search"/></TfAButton>
                <TfAButton href="#" id="tf-login-box" title="Connexion / Inscription"><Icon fixedWidth name="user"/></TfAButton>
            </div>
            
        </nav></header>;
    }

}

module.exports = TfHeader;