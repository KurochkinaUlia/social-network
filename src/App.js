import React from 'react';

import './App.css';
import './Header.css';
import Header from "./Header";
import './Menu.css';
import Menu from "./Menu";

const App = () => {
    return (
        <div className="app-wrapper">
        <Header/>
        <Menu />
        </div>
    )
}

export default App;
