import 'babel-polyfill';

import React from 'react';

class TfIntro extends React.Component {

    render(){
        return <section className="tf-site-intro">
            <h2>TRIP FIGHTER, le magazine en ligne qui te donne l'envie d'aller au <strong>Japon</strong> !</h2>
            <p><a href="#">Inscrivez-vous</a> pour être informé des nouveaux contenus.</p>
        </section>;
    }

}

module.exports = TfIntro;