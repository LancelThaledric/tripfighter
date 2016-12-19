import 'babel-polyfill';
// React
import React from 'react';
// Additional librairies
// Components
import TfPage from './../../layouts/tfpage/tfpage.jsx';
import TfSeparator from './../../widgets/tfseparator/tfseparator.jsx';
import TfPageTitle from './../../sections/tfpagetitle/tfpagetitle.jsx';
// Style
import style from './tfcontact_style.scss';

class TfContact extends React.Component {

    render(){
        return <TfPage {...this.props} className="tf-contact">
            <TfPageTitle inverted={true}>Contactez l'équipe Trip Fighter</TfPageTitle>
            <p>Contactez les trois personnages à l'origine de ce site, à moins que vous ne préféreriez directement parler à Moderne-kun ou Traditionnel-kun pour leur faire part de vos prières !</p>
            <form method="post" action="#">
                <div className="tf-input-row">
                    <input type="text" placeholder="Votre nom"/>
                    <input type="text" placeholder="Votre adresse e-mail"/>
                </div>
                <input type="text" placeholder="Titre du message"/>
                <textarea placeholder="Tapez ici un message qui frappe !"></textarea>
                <input type="submit" value="Envoyer"/>
            </form>
        </TfPage>;
    }

}

module.exports = TfContact;