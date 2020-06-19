import React, { Component } from 'react';
import {connect} from "react-redux";
import store from "./basic";





//connect say component connect redux store

class App extends Component {
  //updated props milengay
  componentDidMount() {
  console.log(this.props);
  // store.dispatch({type:"ADD_TODO"});
 this.props.updateTodo() 
 ///////jis func say dispatch wala kaam karana hai ussay this.props karkay bulana
}

getDerivedState(Props){
  console.log("componentWillReceiveProps",Props);
}
render(){
  return (
    <div className="App">
     Redux all over
    </div>
  );
}
}



function UpdateTodo(){
  return{
    type:"ADD_TODO"
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
    updateTodo:(data)=>dispatch(UpdateTodo(data))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);