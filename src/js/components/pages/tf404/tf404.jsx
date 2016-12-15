import 'babel-polyfill';
// React
import React from 'react';
// Additional librairies
// Components
import TfPage from './../../layouts/tfpage/tfpage.jsx';
import TfSeparator from './../../widgets/tfseparator/tfseparator.jsx';
// Style
import style from './tf404_style.scss';

class Tf404 extends React.Component {

    render(){

        return <TfPage {...this.props}>
            <h1>404 - Page non trouvée</h1>
            <TfSeparator/>
        </TfPage>;
    }

}

module.exports = Tf404;