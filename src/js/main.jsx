import 'babel-polyfill';

import ReactDOM from 'react-dom';
import React from 'react';

import index from 'file?name=[name].[ext]!../index.html';

import style from '../style/style.scss';

import TfHome from './components/home.jsx';

ReactDOM.render(
  <TfHome/>,
  document.getElementById('root')
);
