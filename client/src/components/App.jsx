import React, { Component } from 'react';
import axios from 'axios';
import PopularDish from './PopularDish.jsx';
import DishDetail from './DishDetail.jsx';
import styled from "styled-components";


const AppComponent = styled.div`
`;

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

const Modal = styled.div`
  display: ${props => props.modal ? "flex" : "none"};
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

Modal.displayName = "Modal";

const CloseButton = styled.div`
  float: right;
  color: white;
  cursor: pointer;
`;

CloseButton.displayName = "CloseButton";

const NextDishButton = styled.button`
  float: right;
  cursor: pointer;
`;

const CrossButton = styled.img`
  margin-left: 10px;
  float: right;
  cursor: pointer;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { restaurants: [{ popularDishes: [] }], positionX: 0, modal: false, currentDish: 0 };
    this.queryData();
    this.carousel = React.createRef();
    this.handleModal = this.handleModal.bind(this);
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

  handleModal(event, index) {
    event.preventDefault();
    if (this.state.modal === false) {
      document.body.style.background = 'rgba(0,0,0,.7)';
    } else {
      document.body.style.background = 'transparent';
    }
    this.setState({ modal: !this.state.modal, currentDish: index })
  }

  handlePreviousModal(event) {
    event.preventDefault();
    this.setState({ currentDish: this.state.currentDish - 1 });
  }

  handleNextModal(event) {
    event.preventDefault();
    this.setState({ currentDish: this.state.currentDish + 1 });
  }

  render() {
    if (this.state.restaurants[5] === undefined) {
      var restaurantSample = [];
    } else {
      var restaurantSample = this.state.restaurants[5]['popularDishes'];
    }

    return <AppComponent>
      <Heading>Popular Dishes</Heading>
      <Button onClick={(e) => this.handlePrevious(e)}>Previous</Button>
      <Button onClick={(e) => this.handleNext(e)}>Next</Button>
      <Carousel>
        <CarouselWrapper ref={this.carousel} onScroll={this.handleScroll.bind(this)}>
          {restaurantSample.map((dish, index) => <PopularDish dish={dish} key={index} dishIndex={index} handleModal={this.handleModal} />)}
        </CarouselWrapper>
      </Carousel>
      <Modal modal={this.state.modal}>
        <div className="close">
          <CrossButton src="./icons/cross.svg" onClick={(e) => this.handleModal(e)}></CrossButton>
          <CloseButton onClick={(e) => this.handleModal(e)}>Close</CloseButton>
        </div>
        <DishDetail dish={restaurantSample[this.state.currentDish]} />
        <div className="changedish">
          <button className="previousdish" onClick={(e) => this.handlePreviousModal(e)}>Previous</button>
          <NextDishButton onClick={(e) => this.handleNextModal(e)}>Next</NextDishButton>
        </div>
      </Modal>
    </AppComponent>
  }
}

export default App;