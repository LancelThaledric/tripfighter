import 'babel-polyfill';
// React
import React from 'react';
// Additional librairies
import {Icon} from 'react-fa';
import ClassNames from 'classnames';
// Components
import TfCharacterSelectMini from './../../widgets/tfcharacterSelect/tfcharacterSelectMini.jsx';
import TfThemeSelect from './../../widgets/tfthemeSelect/tfthemeSelect.jsx';
// Style
import style from './tfmenu_style.scss';

class TfMenu extends React.Component {

    render(){
        let className = ClassNames('tf-menu', {active:this.props.active, displayed:this.props.displayed, figed:this.props.figed});
        let styles = {};
        if(this.props.scrollOffset !== undefined) styles.top = this.props.scrollOffset;
        return <div id="tf-menu" className={className} style={styles}>
            <div className="tf-transiter" onTransitionEnd={this.props.onTransitionEnd}/>
            <div className="tf-menu-content">
                <h2>Choisissez un univers</h2>
                <TfCharacterSelectMini/>
                <TfThemeSelect/>
            </div>
        </div>;
    }

}

module.exports = TfMenu;