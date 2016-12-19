import 'babel-polyfill';
// Configuration
import {baseURL} from 'config';
// React
import React from 'react';
// Additional libraries
import {Icon} from 'react-fa';
import {Link} from 'react-router';
// Components
import TfAButton from './../../widgets/tfabutton/tfabutton.jsx';
// Style
import style from './tfheader_style.scss';
// Resources
//import logo from './../../../../resource/logo.svg'; // copied with webpack

class TfHeader extends React.Component {

    constructor(props){
        super(props);

        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    handleMenuClick(e){
        this.props.onMenuToggle();
        e.preventDefault();
    }

    handleSearchClick(e){
        this.props.onSearchToggle();
        e.preventDefault();
    }

    render(){

        let menuIcon = this.props.menuToggled ? 'times' : 'bars';
        let searchIcon = this.props.searchToggled ? 'times' : 'search';

        return <header className="tf-site-header"><nav>
            <div>
                <TfAButton to="#tf-menu" id="tf-main-menu-toggle" onClick={this.handleMenuClick}><Icon fixedWidth name={menuIcon}/><span className="tf-menu-label"> Menu</span></TfAButton>
            </div>
            <div>
                <TfAButton to={baseURL} id="tf-home-link" className="tf-site-title"><img src={baseURL+"resource/logo.svg"} alt="TRIP FIGHTER"/></TfAButton>
            </div>
            <div>
                <TfAButton to="#" id="tf-search-link" title="Recherchez du Japon" onClick={this.handleSearchClick}><Icon fixedWidth name={searchIcon}/></TfAButton>
                <TfAButton to="#" id="tf-login-box" title="Connexion / Inscription"><Icon fixedWidth name="user"/></TfAButton>
            </div>
            
        </nav>
        </header>;
    }

}

module.exports = TfHeader;