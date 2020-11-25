import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Card from "./Card"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      good: '',
      goods: [],
      price: "",

    }
  }

  addGood = (event) => {
    event.preventDefault()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    };
    fetch('http://localhost:4000/goods/', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.getgood();
        this.setState({ good: "", price: "" })
      });

  }

  getgood =()=>{
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch('http://localhost:4000/goods/', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log("getdata",data)
        this.setState({ goods : data })
      });
  }
  componentDidMount = ()=>{
    this.getgood();
  };

  handelChange = (e) => {
    const {name,value} = e.target;
    console.log(value);
    this.setState({[name]:value});
  }

  render() {  
    return (
      <div>
        <form>
          <label>
            Name:
            <input type="text" name="good" value={this.state.good} onChange={this.handelChange}/>
            <input type="text" name="price" value={this.state.price} onChange={this.handelChange}/>
            <button onClick={this.addGood}>click</button>
          </label>
        </form>
        <div>
          {
          this.state.goods.map((good,i)=>{
            return <Card  good={good} key={i} />
          })
        }
        </div>


      </div>
    )
  }
}
export default App;
