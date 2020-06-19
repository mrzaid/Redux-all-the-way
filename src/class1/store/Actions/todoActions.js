class TodoAction {
    static GET_TODO = "GET_TODO"
    static GET_TODO_SUCCESSFUL = "GET_TODO_SUCCESSFUL"
    static GET_TODO_FAILED = "GET_TODO_FAILED"


    static getTodo(data) {
        return {
            type: this.GET_TODO,
            payload: data
        }
    }
    static getTodoSuccessful(data) {
        return {
            type: this.GET_TODO_SUCCESSFUL,
            payload: data
        }
    }
    static getTodoFailed(data) {
        return {
            type: this.GET_TODO_FAILED,
            payload: data
        }
    }


}

export default TodoAction;