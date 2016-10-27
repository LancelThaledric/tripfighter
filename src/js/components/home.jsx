import 'babel-polyfill';

import React from 'react';

import TfHeader from './header.jsx';

class TfHome extends React.Component {

    render(){

        let links = ['Character select', 'Stage select'];

        return <TfHeader title="Accueil Trip Fighter" links={links}/>;
    }

}

module.exports = TfHome;