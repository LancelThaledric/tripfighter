import 'babel-polyfill';

import React from 'react';

class TfHeader extends React.Component {

    render(){

        let links = [];
        this.props.links.forEach(function(elem) {
            links.push(<li><a href="#">{elem}</a></li>);
        });

        return <header className="tf-site-header"><nav>
            <a href="#">{this.props.title}</a>
            <ul className="tf-site-menu">{links}</ul>
        </nav></header>;
    }

}

module.exports = TfHeader;