import React from 'react';

import './App.css' ;
import './Header.css';
import Header from "./Header";
import './Menu.css';
import Menu from "./Menu";
import './Profile.css';
import Profile from "./Profile";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="profile">
                <Menu/>
                <Profile/>
            </div>
        </div>
    )
}

export default App;
