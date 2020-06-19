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
export default User;