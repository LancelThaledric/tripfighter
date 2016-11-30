import 'babel-polyfill';

import React from 'react';

import TfPage from './page.jsx';
import TfSeparator from './separator.jsx';
import TfThemeSelect from './themeSelect.jsx';
import TfPageTitle from './pagetitle.jsx';

class TfModerne extends React.Component {

    render(){

        return <TfPage>
            <TfSeparator/>
            <TfPageTitle>Moderne</TfPageTitle>
            <TfThemeSelect/>
        </TfPage>;
    }

}

module.exports = TfModerne;