import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi, how are you?', likeAccount: 15},
    {id: 2, message: 'It`s my first post', likeAccount: 20},
]

let dialogs = [
    {id: 1, name: 'Юля'},
    {id: 2, name: 'Даша'},
    {id: 3, name: 'Света'},
    {id: 4, name: 'Таня'},
    {id: 5, name: 'Соня'},
    {id: 6, name: 'Маша'},
]

let message = [
    {id: 1, message: 'Привет!'},
    {id: 2, message: 'Пошли учить английский?'},
    {id: 3, message: 'Пошли!'},
    {id: 4, message: 'Ох ты!'},
    {id: 5, message: 'Ох ты!!'},
    {id: 6, message: 'Ох ты!!!'},
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} message={message}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
