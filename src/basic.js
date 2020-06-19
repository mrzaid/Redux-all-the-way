import {createStore,combineReducers} from 'redux';

function Todo(
    state={
             name: "zaid from todo" },action){
    switch (action.type) {
        case "ADD_TODO":
            return{     //state ka obejct return kar raha hai
            ...state,   //destructuring of previosu state
            text:"TODO_ADDED"
            }
        
        case "DELETE_TODO":
            return{     //state ka obejct return kar raha hai
                ...state,   //destructuring of previosu state
                text:"TODO_DELETE"
                }    
        default: //yeh default isi ki state update kareiga
            return state
    }
}
function User(
    state={
             name: "zaid form user" },action)
             
{
    switch (action.type) {
        case "ADD_User":
            return{     //state ka obejct return kar raha hai
            ...state,   //destructuring of previosu state
            text:"User_ADDED"
            }
        
        case "DELETE_User":
            return{     //state ka obejct return kar raha hai
                ...state,   //destructuring of previosu state
                text:"User_DELETED"
                }    
        default:
            return state
    }
}

const rootReducer = combineReducers({
    Todo, //object kay andar key value pair mein maal todo:todo
    User
    //user:user user ki key mein user ki state phekyaga
})
///////////////ismein ek say ziyada user nae paass kartay
const store = createStore(rootReducer,{});
// store.dispatch({  //STORE NAY DIYA METHOD JO DISPATCH HAI AUR DISPATCH ACTION HAI 
//     type:"ADD_TODO"
// });
// console.log(store.getState());

//redux ka store ladeiga initialy khali  jub tak action nae chalayga sub kuch khalik
//yeh maal ayega
// {Todo: {…}, User: {…}}
// Todo: {name: "zaid from todo", text: "TODO_ADDED"}
// User: {name: "zaid form user"}
// __proto__: Object
// var x = {
//     todo:name:zaid
//     user:user
// }
export default store
 