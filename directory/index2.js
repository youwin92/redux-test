const { createStore } = require('redux');
const reducer = require("./reducers/reducer");
const { addPost} = require("./actions/post");
const { login, logout } = require("./actions/user");

const initialState = {
    user : {
        isLoggingIn: true,
        data: null
    },
    posts : [],
    comments:[],
    favorites: [],
    history: [],
    likes: [],
    followers: [],
};

const store = createStore(reducer, initialState);

console.log("1st",store.getState());


store.dispatch( login({
    id: 1,
    name: "name",
    admin: true
}));
console.log("2nd",store.getState());

store.dispatch( addPost({
    userId: 1,
    id: 1,
    content: "안녕하세요 리덕스"
}));
console.log("3rd",store.getState());

store.dispatch( addPost({
    userId: 1,
    id: 2,
    content: "두번째 리덕스"
}));
console.log("4th",store.getState());

store.dispatch( logout());
console.log("5th",store.getState());



