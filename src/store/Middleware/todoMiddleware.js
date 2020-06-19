import TodoAction from "../Actions/todoAction"

// middleware laganay kay baad sub fn mein  dispatch mil jayeingay
class TodoMiddleware {
    static getTodo() {
        return (dispatch) => {
            dispatch(TodoAction.getTodo())
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(response => response.json())
                .then(json =>{
                     console.log(json)
                     dispatch(TodoAction.getTodoSuccessful({
                       todos:json     
                     }
                     )
                     )
                    }
                     )
                .catch((err) => {
                    console.log(err)
                })

        }



        // TodoAction.getTodo()
        // fetch("https://jsonplaceholder.typicode.com/users")
        // .then(repsonse=>Response.json())
        // .then(json=> console.log(json))


    }
}
export default TodoMiddleware