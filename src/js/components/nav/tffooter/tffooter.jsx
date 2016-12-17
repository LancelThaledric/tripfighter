import 'babel-polyfill';
// Configuration
import {baseURL} from 'config';
// React
import React from 'react';
// Additional libraries
import {Icon} from 'react-fa';
import {Link} from 'react-router';
import Url from './../../../module/url.jsx';
import Taxonomy from './../../../module/taxonomy.jsx';
// Components
import TfAButton from './../../widgets/tfabutton/tfabutton.jsx';
import TfSeparator from './../../widgets/tfseparator/tfseparator.jsx';
// Style
import style from './tffooter_style.scss';

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

        return <footer className="tf-site-footer">
            <TfSeparator/>
            <nav>
                <div className="tf-footer-row">
                    <TfAButton to={baseURL} className="tf-footer-home-link"><strong>TRIP FIGHTER</strong></TfAButton>
                    <TfAButton to="#" className="tf-facebook-button"><Icon name="facebook"/></TfAButton>
                    <TfAButton to="#" className="tf-twitter-button"><Icon name="twitter"/></TfAButton>
                    <TfAButton to="#" className="tf-pinterest-button"><Icon name="pinterest-p"/></TfAButton>

                    <TfAButton to={Url.computeUrl('moderne')} className="tf-modern">Japon Moderne</TfAButton>
                    <TfAButton to={Url.computeUrl('traditionnel')} className="tf-trad">Japon Traditionnel</TfAButton>
                </div>
                <div className="tf-footer-row">
                    <TfAButton to="#" className="tf-footer-mentions">Mentions légales</TfAButton>
                    <TfAButton to="#" className="tf-footer-contact">Contact</TfAButton>
                    <TfAButton to="#" className="tf-footer-newsletter">Newsletter</TfAButton>

                    <TfAButton to={Url.computeUrl('', 'lieux')} className="tf-footer-theme">Lieux</TfAButton>
                    <TfAButton to={Url.computeUrl('', 'art')} className="tf-footer-theme">Art</TfAButton>
                    <TfAButton to={Url.computeUrl('', 'divertissement')} className="tf-footer-theme">Divertissement</TfAButton>
                    <TfAButton to={Url.computeUrl('', 'gastronomie')} className="tf-footer-theme">Gastronomie</TfAButton>
                    <TfAButton to={Url.computeUrl('', 'vetements')} className="tf-footer-theme">Vêtements</TfAButton>
                    <TfAButton to={Url.computeUrl('', 'styledevie')} className="tf-footer-theme">Style de vie</TfAButton>
                </div>
            </nav>
        </footer>;
    }

}

module.exports = TfHeader;