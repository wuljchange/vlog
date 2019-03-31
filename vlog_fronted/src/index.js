import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Router from './router/router';

ReactDOM.render(<Router />, document.getElementById('base'));
