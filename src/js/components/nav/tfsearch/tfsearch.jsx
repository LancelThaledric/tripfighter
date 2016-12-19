import 'babel-polyfill';
// React
import React from 'react';
import ReactDOM from 'react-dom';
// Additional librairies
import {Icon} from 'react-fa';
import ClassNames from 'classnames';
// Components
import TfAllArticles from './../../sections/tfarticleGrid/tfallArticles.jsx';
// Style
import style from './tfsearch_style.scss';

class TfSearch extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            results: false,
        };

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.textInput = null;
        this.focus = this.focus.bind(this);
    }

    handleSearchChange(){
        this.setState({results: false});
        setTimeout(() => this.setState({results: true}), 200);
    }

    focus(){
        console.log(ReactDOM.findDOMNode(this.textInput)); 
        ReactDOM.findDOMNode(this.textInput).focus();
    }

    render(){
        let className = ClassNames('tf-search', {active:this.props.active, displayed:this.props.displayed, figed:this.props.figed});
        let styles = {};
        let resultsClass = ClassNames({tfResults: this.state.results})
        if(this.props.scrollOffset !== undefined) styles.top = this.props.scrollOffset;
        return <div id="tf-search" className={className} style={styles}>
            <div className="tf-transiter" onTransitionEnd={this.props.onTransitionEnd}/>
            <div className="tf-search-content">
                <input type="search" placeholder="Recherchez des articles" onChange={this.handleSearchChange} ref={(input) => { this.textInput = input; }} />
                <TfAllArticles title={null}
                           description={null}
                           tags={["art"]}
                           className={resultsClass}/>
            </div>
        </div>;
    }

}

module.exports = TfSearch;