import React from 'react';
import './App.css';
import axios from 'axios';

import Cards from './Components/Cards';
import Card from './Components/Card';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      account: '',
      followers: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/danieltantonio')
    .then(res => {
      this.setState({
        account: res.data
      })
    })
    .catch(err => console.log(err));

    axios.get('https://api.github.com/users/danieltantonio/followers')
    .then(res => {
      this.setState({
        followers: res.data
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <h1>React Github User-Cards w/ Class Components</h1>
        <Card user={this.state.account}/>
        <Cards users={this.state.followers}/>
      </div>
    )
  }
}

export default App;
