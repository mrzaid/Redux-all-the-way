import {createStore} from 'redux';
import rootReducer from './Reducers/rootReducer';

const Store = createStore(rootReducer,{});
// console.log(Store.getState())
export default Store;