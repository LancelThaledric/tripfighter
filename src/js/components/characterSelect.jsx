import 'babel-polyfill';

import React from 'react';

class TfCharacterSelect extends React.Component {

    render(){

        return <section className="tf-character-select">
            <div className="tf-character-left">
                <a href="#" className="tf-character-select-link">
                    <div className="tf-character-inner">
                        <h3>Moderne</h3>
                    </div>
                </a>
            </div>
            <div className="tf-character-right">
                <a href="#"  className="tf-character-select-link">
                    <div className="tf-character-inner">
                        <h3>Traditionnel</h3>
                    </div>
                </a>
            </div>
        </section>;
    }

}

module.exports = TfCharacterSelect;