import TodoAction from "../Actions/todoAction";


function TodoReducer (state={
isLoading: false,
isError:false,
todos:[],
errorMessage:"",
successMessage:"",

},action){
switch (action.type) {
    case TodoAction.TODO_GET:
        return {
            ...state,
            isLoading:true
        } 
        break;
    case TodoAction.TODO_GET_SUCCESSFUL:
        return{
            ...state,
            isLoading:false,
            isError:false,
            todos:action.data,
        } 
        break;
    case TodoAction.TODO_GET_FAILED:
        return{
            ...state,
            isLoading:false,
            isError:true,
            // todos:action.data,
            //error message
        } 
        break;

    default:
        return state 
        break;
} 
}

export default TodoReducer;