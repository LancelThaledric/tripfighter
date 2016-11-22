import 'babel-polyfill';

import React from 'react';

import {Icon} from 'react-fa';

import TfHeader from './header.jsx'
import TfMenu from './menu.jsx'

class TfPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            menuToggled: false,
            menuDisplayed: false,

            searchToggled: false,
            searchDisplayed: false,

            logboxToggled: false,
            logboxDisplayed: false
        };

        this.handleMenuToggle = this.handleMenuToggle.bind(this);
        this.handleMenuTransitionEnd = this.handleMenuTransitionEnd.bind(this);
        this.computeShowMenu = this.computeShowMenu.bind(this);
        this.computeHideMenu = this.computeHideMenu.bind(this);
    }

    handleMenuToggle(){
        var newState = {};
        if(!this.state.menuToggled) this.computeShowMenu(newState);
        else this.computeHideMenu(newState);
        this.setState(newState);
    }
    handleMenuTransitionEnd(e){
        if(this.state.menuToggled) return; // On dé-display le menu que si c'est la transition de masquage qui s'est terminée, pas l'autre.
        if(!e.propertyName == 'left') return; // On ne prend qu'une des transitions, sinon c'est appelé plusieurs fois.
        this.setState({menuDisplayed: false});
    }

    computeShowMenu(newState){
        let varthis = this;
        // hideSearch();
        // hideLogbox();
        newState.menuDisplayed = true;
        setTimeout(function(){  //Le timeout à 10ms est fait pour séparer le display de la transition, sinon elle ne s'effectue pas.'
            varthis.setState({menuToggled: true});
        }, 10);
    }
    computeHideMenu(newState){
        newState.menuToggled = false;
    }

    render(){

        return <div id="tf-app">
            <div className="tf-header-background"/>
            <TfHeader onMenuToggle={this.handleMenuToggle} menuToggled={this.state.menuToggled}/>
            <TfMenu
                active={this.state.menuToggled}
                displayed={this.state.menuDisplayed}
                onTransitionEnd={this.handleMenuTransitionEnd}
            />
            <div id="#tf-content" className="tf-content">
                {this.props.children}
            </div>
        </div>;
    }

}

TfPage.defaultProps = {
    active: false
};

module.exports = TfPage;