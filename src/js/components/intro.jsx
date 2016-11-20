import 'babel-polyfill';

import React from 'react';

class TfIntro extends React.Component {

    render(){
        return <section className="tf-site-intro">
            <p><a href="#">Inscrivez-vous</a> pour être informé des nouveaux contenus.</p>
        </section>;
    }

}

module.exports = TfIntro;