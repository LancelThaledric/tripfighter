import 'babel-polyfill';
// React
import React from 'react';
// Additional Libraries
// Components
// Style
import style from './tfintro_style.scss';

class TfIntro extends React.Component {

    render(){
        return <section className="tf-site-intro">
            <p><a href="#">Inscrivez-vous</a> pour être informé des nouveaux contenus.</p>
        </section>;
    }

}

module.exports = TfIntro;