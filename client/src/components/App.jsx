import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor (props) {
    super(props);
    this.queryData();
  }

  queryData () {
    axios.get('/restaurants')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

export default App;