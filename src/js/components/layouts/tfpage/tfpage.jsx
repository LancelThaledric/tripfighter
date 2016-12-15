import 'babel-polyfill';
// React
import React from 'react';
// Additionnal librairies
import {Icon} from 'react-fa';
import ClassNames from 'classnames';
import Taxonomy from './../../../module/taxonomy.jsx';
// Components
import TfHeader from './../../nav/tfheader/tfheader.jsx';
import TfMenu from './../../nav/tfmenu/tfmenu.jsx';
import TfBreadcrumb from './../../nav/tfbreadcrumb/tfbreadcrumb.jsx';
import TfHeaderSeparator from './../../widgets/tfseparator/tfheaderSeparator.jsx';
// Style
import style from './tfpage_style.scss';

class TfPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            menuToggled: false,
            menuDisplayed: false,

            searchToggled: false,
            searchDisplayed: false,

            logboxToggled: false,
            logboxDisplayed: false,

            scrollTop: 0,
            toScroll: undefined
        };

        this.handleMenuToggle = this.handleMenuToggle.bind(this);
        this.handleMenuTransitionEnd = this.handleMenuTransitionEnd.bind(this);
        this.computeShowMenu = this.computeShowMenu.bind(this);
        this.computeHideMenu = this.computeHideMenu.bind(this);

        this.scrollTop = 0;
        this.toScroll = undefined;
        this.contentDOM = undefined;
        this.headerHeight = this.props.isHome ? "4.4rem" : this.props.headerHeight;
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
            varthis.toScroll = 0;
            varthis.setState({menuToggled: true});
        }, 10);

        this.scrollTop = window.scrollY;
    }
    computeHideMenu(newState){
        newState.menuToggled = false;
        this.toScroll = this.scrollTop;
        this.scrollTop = window.scrollY;
    }

    isFiged(){
        return (this.state.menuToggled || this.state.searchToggled || this.state.logboxToggled);
    }

    componentDidUpdate(){
        if(this.toScroll !== undefined){
            window.scrollTo(0, this.toScroll);
            this.toScroll = undefined;
        }

        if(this.isFiged()){
            let contentStyleTop = "calc("+(-this.scrollTop)+"px + "+this.headerHeight+")";
            this.contentDOM.style.top = contentStyleTop;
        }

    }

    render(){

        let contentClass = ClassNames('tf-content', {'tf-figed': this.isFiged()});

        let universClass = ClassNames(this.props.universClass, 'tf-app', {isHome: this.props.isHome});

        let breadcrumb = !this.props.isHome ? <TfBreadcrumb
                univers={this.props.universTax}
                theme={this.props.themeTax}
                articleTitle={this.props.articleTitle}
                articleSlug={this.props.articleSlug}
            /> : null;

        return <div id="tf-app" className={universClass}>
            <div className="tf-header-background"/>
            <TfHeader {...this.props} onMenuToggle={this.handleMenuToggle} menuToggled={this.state.menuToggled}/>
            {breadcrumb}
            <TfHeaderSeparator/>
            <TfMenu
                active={this.state.menuToggled}
                displayed={this.state.menuDisplayed}
                onTransitionEnd={this.handleMenuTransitionEnd}
                figed={!this.isFiged()}
                scrollOffset={this.isFiged() ? undefined : "calc("+(-this.scrollTop)+"px + "+this.headerHeight+")"}
            />
            <div id="#tf-content" className={contentClass} ref={(contentDOM) => { this.contentDOM = contentDOM; }}>
                {this.props.children}
            </div>
        </div>;
    }

}

TfPage.defaultProps = {
    headerHeight: "7.6rem",
    isHome: false
};

module.exports = TfPage;