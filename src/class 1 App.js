import React, { Component } from 'react';
import {connect} from "react-redux";
import TodoAction from './store/Actions/todoActions';
import Store from './store/store';


class App extends Component {
    componentDidMount() {
         console.log(this.props);
        // store.dispatch({type:"ADD_TODO"});
      // this.props.updateTodo({name:"john wick",passwprd:"123"}) 
       ///////jis func say dispatch wala kaam karana hai ussay this.props karkay bulana
      this.props.getTodo()
    
    }   
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps" , nextProps);
      }
    render() { 
        return ( 
            <div>
                Redux game over
            </div>
         );
    }
}
function mapStateToProps(state){
    return({
      Todo:state.Todo.name 
      //jo redux kay store say chahiye woh component mein manga lou
    })
  }
  
function mapDispatchToProps(dispatch){
    return{
                //john ka naam aur password
     // updateTodo:(data)=>dispatch(UpdateTodo(data))
     getTodo:(data)=>dispatch(TodoAction.getTodo(data))
    } //is arrow function say middleware ko maal mileiga
  }
  function UpdateTodo(){
    return {
      type:"ADD_TODO"
    }
  } 
export default connect(mapStateToProps,mapDispatchToProps)(App);
 