
import React, { Component } from 'react';
import { connect } from "react-redux";

import store from "./store";
import TodoReducer from './store/Reducers/todoReducer';
import TodoAction from './store/Actions/todoAction';
import TodoMiddleware from "./store/Middleware/todoMiddleware"


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }



    componentDidMount() {
        //  console.log(store.getState());
        // console.log(this.props);
        this.props.getTodo();
        // console.log(this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps : ", nextProps);
        this.setState({
            todos: nextProps.todos
        })
    }


    render() {
        const { todos } = this.state
        return (
            <div>
                hello worlds of redux
                <ul>
                    {
                        todos.length && todos.map((todo, index) => {
                            return <li className="todo" key={index}>{todo.name}</li>
                        })
                    }


                </ul>


            </div>);
    }
}



function mapStateToProps(state) {
    return {
        isLoading: state.TodoReducer.isLoading,
        isError: state.TodoReducer.isError,
        todos: state.TodoReducer.todos
    }
}


function mapDispatchToProps(dispatch) {
    return {

        // getTodo: (data) => dispatch(TodoAction.getTodo(data))
        getTodo: (data) => dispatch(TodoMiddleware.getTodo(data))
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(App);