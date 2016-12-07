import 'babel-polyfill';
// React
import React from 'react';
// Additional libraries
// Components
// Style
import style from './tfpunchline_style.scss';

class TfPunchline extends React.Component {

    render(){
        return <section className="tf-site-punchline">
            <h2>TRIP FIGHTER, le magazine en ligne qui te donne l'envie d'aller au <strong>Japon</strong> !</h2>
        </section>;
    }

}

module.exports = TfPunchline;