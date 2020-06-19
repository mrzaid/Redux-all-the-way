import {createStore} from  "redux"
import rootReducer from "./Reducers"//root pay jo index ki file hogi woh utha kar layega 
const store  = createStore(rootReducer,{});
export default store