

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeAccount: 15},
            {id: 2, message: 'It`s my first post', likeAccount: 20},
        ],
    },
    dialogsPage: {
        message: [
            {id: 1, message: 'Привет!'},
            {id: 2, message: 'Пошли учить английский?'},
            {id: 3, message: 'Пошли!'},
            {id: 4, message: 'Ох ты!'},
            {id: 5, message: 'Ох ты!!'},
            {id: 6, message: 'Ох ты!!!'},
        ],
        dialogs: [
            {id: 1, name: 'Юля'},
            {id: 2, name: 'Даша'},
            {id: 3, name: 'Света'},
            {id: 4, name: 'Таня'},
            {id: 5, name: 'Соня'},
            {id: 6, name: 'Маша'},
        ],
    },
    friendsPage:{
        friends: [
            {id: 1, name: 'Даша'},
            {id: 2, name: 'Настя'},
            {id: 3, name: 'Наташа'},
        ],
    }
}
export default state;