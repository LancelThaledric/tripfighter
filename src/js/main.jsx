import 'babel-polyfill';

import ReactDOM from 'react-dom';
import React from 'react';

import index from 'file?name=[name].[ext]!../index.html';

import style from '../style/style.scss';

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
