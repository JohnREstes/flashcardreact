import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import BuildTable from './components/buildTable.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      flashCards:[],
      loading: true
    }

  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/collections`)
    .then(res => this.setState({ 
      flashCards: res.data,
      loading: false
    }));
  }

  render(){
    return (this.state.loading ? <div>Loading...</div> : (
    <div>
        <div id="titleHeader"><h1>Flash Cards</h1>

        <span id="sortAlpha">click title to sort alphabetically</span>
        </div>
          <BuildTable data={this.state.flashCards}/>
    </div>
    )
    )
  }  
}

export default App;