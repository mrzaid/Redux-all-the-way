import TodoAction from "../Actions/todoActions";


function Todo(
    state={Todo:"TODO_ONE" },action)
{
    switch (action.type) {
        //case "ADD_TODO":
        case TodoAction.GET_TODO:
            return{     //state ka obejct return kar raha hai
            ...state,   //destructuring of previosu state
            text:"TODO_ADDEDsfad"
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
    export default Todo;