import 'babel-polyfill';

import React from 'react';

import TfPage from './page.jsx';
import TfSeparator from './separator.jsx';

class Tf404 extends React.Component {

    render(){

        return <TfPage>
            <TfSeparator/>
            <h1>404 - Page non trouvée</h1>
            <TfSeparator/>
        </TfPage>;
    }

}

module.exports = Tf404;