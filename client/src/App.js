import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      good:'',
      goods:[],
      price:"",
      
    }
  }

  addGood = ()=>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
  };
  fetch('http://localhost:4000/goods/', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

handelchange= (event)=>{
  const {name,value} = event.target;
  this.setState({[name]:value})
}

  render(){
    return ( 
      <div>
        <form>
  <label>
    Name:
    <input type="text" name="good" value={this.state.good} />
    <input type="text" name="price" value={this.state.price} />
    <button >click</button>
  </label>
</form>
      </div>
    )
    
  }
}
export default App;
