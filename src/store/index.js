import { createStore, applyMiddleware } from "redux"
import rootReducer from "./Reducers"//root pay jo index ki file hogi woh utha kar layega 
import thunkMiddleware from "redux-thunk"
import logger from "redux-logger"


const store = createStore(rootReducer, {}, applyMiddleware(thunkMiddleware,logger));
// rootreducer ya phir combine reduce 
// default state 
// middleware ya phir custom middleware 
export default store