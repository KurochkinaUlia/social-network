import React from 'react';

import './App.css';
import './components/Header/Header.module.css';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import './components/Profile/Profile.module.css';
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {



    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="profiles">
                    <Menu/>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} mess age={props.message} /> }/>
                    <Route path="/profile" render={() => <Profile posts={props.posts} /> }/>
                    <Route path="/news" render={() => <News /> }/>
                    <Route path="/music" render={() => <Music /> }/>
                    <Route path="/settings" render={() => <Settings /> }/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
