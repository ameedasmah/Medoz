import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Card from "./Card"
import Signup from './Signup'
import SignIn from './SignIn'
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from "./HomePage"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // good: '',
      // goods: [],
      // price: "",

    }
  }

  render() {  
    return (
      <div>
      <Switch>
      <Route exact path = "/"  render={(props)=> <HomePage otherprops={props} />}/>
      <Route exact path='/signin'  render={(props)=> <SignIn otherprops ={props} />}/>
      <Route exact path="/signup" render={(props)=> <Signup otherprops={props} />} />
      </Switch> 
      </div>
    )
  }
}
export default App;
