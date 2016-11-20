import 'babel-polyfill';

import React from 'react';

import TfHeader from './header.jsx';
import TfSeparator from './separator.jsx';
import TfTextSeparator from './textSeparator.jsx';
import TfLastArticles from './lastArticles.jsx';
import TfCharacterSelect from './characterSelect.jsx';
import TfScrollInvitation from './scrollInvitation.jsx';
import TfPunchline from './punchline.jsx';

class TfHome extends React.Component {

    render(){

        return <div id="tf-app">
            <TfHeader/>
            <TfPunchline/>
            <TfSeparator/>
            <TfCharacterSelect/>
            <TfLastArticles/>
            <TfSeparator/>
        </div>;
    }

}

module.exports = TfHome;