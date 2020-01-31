import React, { Component } from 'react';
import axios from 'axios';
import PopularDish from './PopularDish.jsx';
import DishDetail from './DishDetail.jsx';
import styled from "styled-components";

const Heading = styled.h1`
  color: red;
  text-align: center;
`;

const Carousel = styled.div`
  max-height: 300px;
  width: 650px;
  border: solid;
  overflow: hidden;
`;

Carousel.displayName = "Carousel";

const CarouselWrapper = styled.div`
  height: 420px;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  transform: scaleY(1);
  scroll-behavior: smooth;
`;

CarouselWrapper.displayName = "CarouselWrapper";

const Button = styled.button`
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { restaurants: [{ popularDishes: [] }], positionX: 0 };
    this.queryData();
    this.carousel = React.createRef();
    console.log(this.carousel);
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
    this.carousel.current.scrollBy(665, 0)
  }

  handlePrevious(event) {
    event.preventDefault();
    this.carousel.current.scrollBy(- 665, 0)
  }

  handleScroll(event) {
    this.setState({ positionX: event.target.scrollLeft })
  }

  render() {

    if (this.state.restaurants[5] === undefined) {
      var restaurantSample = [];
    } else {
      var restaurantSample = this.state.restaurants[5]['popularDishes'];
    }

    return <div>
      <h2>Bob</h2>
      <Heading>Popular Dishes</Heading>
      <Button onClick={(e) => this.handlePrevious(e)}>Previous</Button>
      <Button onClick={(e) => this.handleNext(e)}>Next</Button>
      <Carousel>
        <CarouselWrapper ref={this.carousel} onScroll={this.handleScroll.bind(this)}>
          {restaurantSample.map((dish, index) => <PopularDish dish={dish} key={index} />)}
        </CarouselWrapper>
      </Carousel>
      <div className="modal">
        <button>Close</button>
        <DishDetail dish={restaurantSample[0]} />
      </div>
    </div>
  }
}

export default App;