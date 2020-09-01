import React from 'react';
import './App.css';
import axios from 'axios';

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
        Waddup!
        {this.state.account.bio}
      </div>
    )
  }
}

export default App;
