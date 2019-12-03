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
import Friends from "./components/Friends/Friends";
import FriendsInfo from "./components/Friends/FriendsInfo/FriendsInfo";


const App = (props) => {

    console.log('Пропсы в App');
    console.log(props);

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="profiles">
                    <Menu state={props.state.friendsPage} />
                    <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage} /> }/>
                    <Route path="/profile" render={() => <Profile state={props.state.profilePage} /> }/>
                    <Route path="/news" render={() => <News /> }/>
                    <Route path="/music" render={() => <Music /> }/>
                    <Route path="/settings" render={() => <Settings /> }/>
                    {/*<Route path="/friends" render={ () => <FriendsInfo state={props.} comp={'app'}/> }/>*/}

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
