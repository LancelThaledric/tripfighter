import 'babel-polyfill';
// React
import React from 'react';
// Additionel libraries
// Components
import TfPage from './../../layouts/tfpage/tfpage.jsx';
import TfSeparator from './../../widgets/tfseparator/tfseparator.jsx';
import TfLastArticles from './../../sections/tfarticleGrid/tflastArticles.jsx';
import TfCharacterSelect from './../../widgets/tfcharacterSelect/tfcharacterSelect.jsx';
import TfScrollInvitation from './../../widgets/tfscrollInvitation/tfscrollInvitation.jsx';
import TfPunchline from './../../sections/tfpunchline/tfpunchline.jsx';
// Style
import style from './tfhome_style.scss';

class TfHome extends React.Component {

    render(){

        return <TfPage>
            <TfPunchline/>
            <TfSeparator/>
            <TfCharacterSelect/>
            <TfLastArticles/>
            <TfSeparator/>
        </TfPage>;
    }

}

module.exports = TfHome;