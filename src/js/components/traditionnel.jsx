import 'babel-polyfill';

import React from 'react';

import TfPage from './page.jsx';
import TfSeparator from './separator.jsx';
import TfThemeSelect from './themeSelect.jsx';

class TfTraditionnel extends React.Component {

    render(){

        return <TfPage>
            <TfSeparator/>
            <h1>Traditionnel</h1>
            <TfThemeSelect/>
        </TfPage>;
    }

}

module.exports = TfTraditionnel;