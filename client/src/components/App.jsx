import React, { Component } from 'react';
import axios from 'axios';
import PopularDish from './PopularDish.jsx';
import DishDetail from './DishDetail.jsx';
import styled from "styled-components";
import Modal from "./Modal.jsx";

const AppComponent = styled.div`
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  margin: 50px;
`;

const Heading = styled.h3`
  text-align: left;
`;

const Carousel = styled.div`
  max-height: 210px;
  width: 610px;
  padding-left: 0px;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
`;

Carousel.displayName = "Carousel";

const CarouselWrapper = styled.div`
  height: 420px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  overflow-x: scroll;
  transform: scaleY(1);
  scroll-behavior: smooth;
`;

CarouselWrapper.displayName = "CarouselWrapper";

const CloseButton = styled.div`
  float: right;
  font-size: 14px;
  color: white;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

CloseButton.displayName = "CloseButton";

const PreviousDishBox = styled.div`
  visibility: ${props => props.currentDish ? "visible" : "hidden"};
  margin-top: 3px;
  margin-left: 10px;
  font-size: 14px;
`;

const NextDishBox = styled.div`
  display: ${props => props.currentDish === (props.AmountOfDishes - 1) ? "none" : "flex"};
  /* float: right; */
  margin-right: 10px;
  margin-top: 3px;
  font-size: 14px;
`;

const PreviousDishButton = styled.input`
  width: 6px;
  cursor: pointer;
  &:focus {
    outline:0;
  }
`;

const NextDishButton = styled.input`
  float: right;
  width: 6px;
  cursor: pointer;
  &:focus {
    outline:0;
  }
`;

const CrossButton = styled.img`
  margin-left: 10px;
  float: right;
  cursor: pointer;
`;

const CircleBox = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #e6e6e6;
  &:hover {
        box-shadow: 0 2px 6px rgba(0,0,0,.15);
  }
`;

const LeftSelectionButton = styled.img`
  height: 12px;
    opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

const RightSelectionButton = styled.img`
  height: 12px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  margin-left: 2px;
`;

const LeftSelectionBox = styled.div`
  display: ${props => props.positionX ? "flex" : "none"};
  position: absolute;
  margin-top: 76px;
  margin-left: -17px;
  z-index: 10;
  cursor:pointer;
`;

const RightSelectionBox = styled.div`
  display: ${props => props.positionX === props.carouselWidth ? "none" : "flex"};
  position: absolute;
  margin-top: 77px;
  margin-left: 592px;
  z-index: 10;
  cursor:pointer;
`;

const DishName = styled.span`
  color: white;
  cursor: pointer;
  margin-left: 15px;
  margin-right: 15px;
  &:hover {
    text-decoration: underline;
  }
`;

const CloseSection = styled.div`
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-end;
  width: 1290px;
`;

const ChangeDishControl = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1275px;
`;

const PlaceHolder = styled.div`
  width: 20px;
  margin-left:-14px;
  border: solid 1px transparent;
`;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { restaurants: [{ popularDishes: [] }], positionX: 0, modal: false, currentDish: 0, currentPhotoIndex: 0, carouselWidth: 1, dishCollectionLength: 0, randomSample: 0 };
    this.queryData();
    this.carousel = React.createRef();
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 27) {
        this.handleCloseModal();
      } else if (e.keyCode === 39) {
        e.preventDefault();
        this.handleNextPhoto();
      } else if (e.keyCode === 37) {
        e.preventDefault();
        this.handlePreviousPhoto();
      }
    });
    this.generateRandomSample();
  }

  generateRandomSample() {
    this.setState({randomSample: Math.floor(Math.random() * (101))})
  }

  handleCloseModal() {
    this.setState({ modal: false, currentPhotoIndex: 0})
  }

  handleNextPhoto() {
    if (this.state.currentPhotoIndex === this.state.dishCollectionLength - 1) {
      this.setState({ currentPhotoIndex: 0 });
    } else {
      this.setState({ currentPhotoIndex: this.state.currentPhotoIndex + 1 });
    }
  }

  handlePreviousPhoto() {
    if (this.state.currentPhotoIndex === 0) {
      this.setState({ currentPhotoIndex: this.state.dishCollectionLength - 1 });
    } else {
      this.setState({ currentPhotoIndex: this.state.currentPhotoIndex - 1 });
    }
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
    this.carousel.current.scrollBy(614, 0)
  }

  handlePrevious(event) {
    event.preventDefault();
    this.carousel.current.scrollBy(- 614, 0)
  }

  handleScroll(event) {
    this.setState({ positionX: event.target.scrollLeft, carouselWidth: event.target.scrollWidth - 610 })
  }

  handleOpenModal(event, index, CollectionLength) {
    event.preventDefault();
    this.setState({ modal: true, currentDish: index, dishCollectionLength: CollectionLength, currentPhotoIndex: 0})
  }

  handlePreviousDish(event) {
    event.preventDefault();
    this.setState({ currentDish: this.state.currentDish - 1, currentPhotoIndex: 0 });
  }

  handleNextDish(event) {
    event.preventDefault();
    this.setState({ currentDish: this.state.currentDish + 1, currentPhotoIndex: 0 });
  }

  render() {
    if (this.state.restaurants[this.state.randomSample] === undefined) {
      var restaurantSample = [];
    } else {
      var restaurantSample = this.state.restaurants[this.state.randomSample]['popularDishes'];
    }

    // if (this.state.restaurants[28] === undefined) {
    //   var restaurantSample = [];
    // } else {
    //   var restaurantSample = this.state.restaurants[28]['popularDishes'];
    // }

    return <AppComponent>
      <Heading>Popular Dishes</Heading>
      <LeftSelectionBox onClick={(e) => this.handlePrevious(e)} positionX={this.state.positionX}>
        <CircleBox>
          <LeftSelectionButton src="./icons/leftArrow-black.svg"></LeftSelectionButton>
        </CircleBox>
      </LeftSelectionBox>
      <RightSelectionBox onClick={(e) => this.handleNext(e)} positionX={this.state.positionX} carouselWidth={this.state.carouselWidth} >
        <CircleBox>
          <RightSelectionButton src="./icons/rightArrow-black.svg" ></RightSelectionButton>
        </CircleBox>
      </RightSelectionBox>
      <Carousel id="carousel">
        <CarouselWrapper ref={this.carousel} onScroll={this.handleScroll.bind(this)} id="carousel">
          {restaurantSample.map((dish, index) => <PopularDish dish={dish} key={index} dishIndex={index} handleOpenModal={this.handleOpenModal} />)}
          <PlaceHolder></PlaceHolder>
        </CarouselWrapper>
      </Carousel>
      {this.state.modal ? (
        <Modal handleCloseModal = {this.handleCloseModal}>
          <CloseSection>
            <CloseButton onClick={(e) => this.handleCloseModal(e)}>Close</CloseButton>
            <CrossButton src="./icons/cross.svg" onClick={(e) => this.handleCloseModal(e)}></CrossButton>
          </CloseSection>
          <DishDetail dish={restaurantSample[this.state.currentDish]} currentPhotoIndex={this.state.currentPhotoIndex} handleNextPhoto={this.handleNextPhoto.bind(this)} handlePreviousPhoto={this.handlePreviousPhoto.bind(this)} />
          <ChangeDishControl>
            <PreviousDishBox currentDish={this.state.currentDish} onClick={(e) => this.handlePreviousDish(e)}>
              <PreviousDishButton type="image" src="./icons/leftArrow.svg"></PreviousDishButton>
              <DishName>{restaurantSample[this.state.currentDish - 1] ? restaurantSample[this.state.currentDish - 1]['dishName'] : "hello"}</DishName>
            </PreviousDishBox>
            <NextDishBox currentDish={this.state.currentDish} AmountOfDishes={restaurantSample.length} onClick={(e) => this.handleNextDish(e)} onKeyPress={this.handleKeyPress}>
              <DishName>{restaurantSample[this.state.currentDish + 1] ? restaurantSample[this.state.currentDish + 1]['dishName'] : "hello"}</DishName>
              <NextDishButton type="image" src="./icons/rightArrow.svg"></NextDishButton>
            </NextDishBox>
          </ChangeDishControl>
        </Modal>) : null}
    </AppComponent>
  }
}

export default App;