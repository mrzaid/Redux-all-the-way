import {combineReducers} from 'redux';
import Todo from "./TodoReducer";
import User from "./UserReducer";

const rootReducer = combineReducers(
    {Todo,  // jo bhi state deiga iasay
        // Todo:Todo
        User

    }
)
export default rootReducer;