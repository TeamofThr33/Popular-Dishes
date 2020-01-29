import React, { Component } from 'react';
import axios from 'axios';
import PopularDishes from './PopularDishes.jsx';
import styled from "styled-components";

const Heading = styled.h1`
  color: red;
  text-align: center;
`;

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
    return (<div>
      <h2>Bob</h2>
      <Heading>Testing</Heading>
      <PopularDishes />
    </div>)
  }
}

export default App;