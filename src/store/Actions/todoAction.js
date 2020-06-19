class TodoAction {
    //action ki types ko as a variable store karleingay
static TODO_GET = "TODO_GET"
static TODO_GET_SUCCESSFUL = "TODO_GET_SUCCESSFUL"
static TODO_GET_FAILED = "TODO_GET_FAILED"

//now creating action creator
 
static getTodo(){
    //static ka this nae hota woh parent ka this uthata hai
    return(
        type=this.TODO_GET
    )
}
static getTodoSuccessful() {
    //static ka this nae hota woh parent ka this uthata hai
    return(
        type=this.TODO_GET_SUCCESSFUL
    )
}
static getTodoFailed(){
    //static ka this nae hota woh parent ka this uthata hai
    return(
        type=this.TODO_GET_FAILED
    )
}

}
export default TodoAction
