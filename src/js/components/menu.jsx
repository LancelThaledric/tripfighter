import 'babel-polyfill';

import React from 'react';

import {Icon} from 'react-fa';
import ClassNames from 'classnames';

import TfCharacterSelectMini from './characterSelectMini.jsx';
import TfThemeSelect from './themeSelect.jsx';

class TfMenu extends React.Component {

    render(){
        let className = ClassNames('tf-menu', {active:this.props.active, displayed:this.props.displayed, figed:this.props.figed});
        let styles = {};
        if(this.props.scrollOffset !== undefined) styles.top = this.props.scrollOffset;
        return <div id="tf-menu" className={className} style={styles}>
            <div className="tf-transiter" onTransitionEnd={this.props.onTransitionEnd}/>
            <div className="tf-menu-content">
                <TfCharacterSelectMini/>
                <TfThemeSelect/>
            </div>
        </div>;
    }

}

module.exports = TfMenu;