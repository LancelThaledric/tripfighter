import 'babel-polyfill';

import React from 'react';

import TfHeader from './header.jsx';
import TfIntro from './intro.jsx';
import TfSeparator from './separator.jsx';
import TfLastArticles from './lastArticles.jsx';
import TfCharacterSelect from './characterSelect.jsx';

class TfHome extends React.Component {

    render(){

        return <div id="tf-app">
            <TfHeader/>
            <TfIntro/>
            <TfSeparator/>
            <TfLastArticles/>
            <TfSeparator/>
            <TfCharacterSelect/>
        </div>;
    }

}

module.exports = TfHome;