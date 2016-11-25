import 'babel-polyfill';

import React from 'react';

import TfPage from './page.jsx';
import TfSeparator from './separator.jsx';
import TfThemeSelect from './themeSelect.jsx';

class TfModerne extends React.Component {

    render(){

        return <TfPage>
            <TfSeparator/>
            <h1>Moderne</h1>
            <TfThemeSelect/>
        </TfPage>;
    }

}

module.exports = TfModerne;