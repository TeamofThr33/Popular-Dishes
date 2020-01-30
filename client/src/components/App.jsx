import React, { Component } from 'react';
import axios from 'axios';
import PopularDish from './PopularDish.jsx';
import styled from "styled-components";

const Heading = styled.h1`
  color: red;
  text-align: center;
`;

const Carousel = styled.div`
  width: 200px;
`;

Carousel.displayName = "Carousel";

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* position: absolute; */
  transform: translateX(${(props) => props.position}px);
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

CarouselWrapper.displayName = "CarouselWrapper";

const Button = styled.button`
  transform: translateX(${(props) => props.position}px);
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { restaurants: [{ popularDishes: [] }], position: 0 };
    this.queryData();
  }

  queryData() {
    axios.get('/restaurants')
      .then((response) => {
        this.setState({ restaurants: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleNext(event) {
    event.preventDefault();
    console.log('clicked');
    this.setState({ position: this.state.position - 750 });
  }

  handlePrevious(event) {
    event.preventDefault();
    console.log('clicked');
    this.setState({ position: this.state.position + 750 });
  }

  render() {
    var restaurantSample = this.state.restaurants[0]['popularDishes'];
    return <div>
      <h2>Bob</h2>
      <Heading>Popular Dishes</Heading>
      <Button onClick={(e) => this.handlePrevious(e)}>Previous</Button>
      <Button onClick={(e) => this.handleNext(e)}>Next</Button>
      <Carousel>
        <CarouselWrapper position={this.state.position}>
          {restaurantSample.map((dish, index) => <PopularDish dish={dish} key={index} />)}
        </CarouselWrapper>
      </Carousel>
    </div>
  }
}

export default App;