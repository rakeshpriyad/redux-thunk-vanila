//import React from 'react';
import store from './store/configStore'
import {bugAdd, bugRemove} from './actions/actions'
import {addUser, updateUser, findUsers, removeUser,createUser, fetchingUsers, saveUser, submitRemoveUser, submitUpdateUser, submitSaveUser} from './actions/userActions'

//console.log(store)
//console.log(store.getState())

//store.subscribe( () => {console.log(store.getState())});
store.dispatch(bugAdd("Bug1"));
store.dispatch(bugRemove(1));

const user1 = createUser("rk", "35", "200K");
console.log(user1)
//store.dispatch(addUser(user1));
let lastId =900;

//const user2 = {...createUser("rakesh", "35", "200K"), id: ++lastId};

//store.dispatch(updateUser(user2));
//store.dispatch(findUsers(1));
//store.dispatch(removeUser(1));

store.dispatch(fetchingUsers());
//store.getState().users.map(u => console.log("u-----"+u))
//store.subscribe( () => {console.log(store.getState().users)});

//store.subscribe( () => { store.getState().users.map(u => console.log("id "+u.id + " user id"+ u.userId+ " title "+ u.title))});
store.subscribe( () => {console.log(store.getState())});
//store.dispatch(submitSaveUser(user0));
const user3 = {...createUser("rakesh", "35", "200K"), id: ++lastId};
const user0 = {...createUser("rakesh", "35", "200K"), id: user3.id};
store.dispatch(submitSaveUser(user3));
const user4 = {...createUser("rakesh", "35", "200K"), id: ++lastId};
//store.dispatch(submitSaveUser(user4)); 
store.dispatch(submitUpdateUser(user0));

//store.dispatch(submitRemoveUser(user3.id));
