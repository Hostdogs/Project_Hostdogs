import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginModal from './components/LoginForm/LoginModal'
import Tab from './components/LoginForm/LoginTab'
import NavbarIsAuth from './components/Navbar/NavbarIsAuth';




ReactDOM.render(<NavbarIsAuth />, document.getElementById('root'));
