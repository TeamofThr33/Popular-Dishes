import React, { Component } from 'react';
import axios from 'axios';
import PopularDish from './PopularDish.jsx';
import DishDetail from './DishDetail.jsx';
import styled from "styled-components";


const AppComponent = styled.div`
`;

const Heading = styled.h3`
  text-align: left;
`;

const Carousel = styled.div`
  max-height: 210px;
  width: 650px;
  /* border: solid; */
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

const Modal = styled.div`
  display: ${props => props.modal ? "flex" : "none"};
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index:20;
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

const CircleBox = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #e6e6e6;
`;

const LeftSelectionButton = styled.img`
  height: 12px;
`;

const RightSelectionButton = styled.img`
  height: 12px;
`;

const LeftSelectionBox = styled.div`
  display: ${props => props.positionX ? "flex" : "none"};
  position: absolute;
  margin-top: 85px;
  z-index: 10;
  cursor:pointer;
`;

const RightSelectionBox = styled.div`
  display: ${props => props.positionX === props.carouselWidth ? "none" : "flex"};
  position: absolute;
  margin-top: 85px;
  margin-left: 626px;
  z-index: 10;
  cursor:pointer;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { restaurants: [{ popularDishes: [] }], positionX: 0, modal: false, currentDish: 0, currentPhotoIndex: 0, carouselWidth: 1 };
    this.queryData();
    this.carousel = React.createRef();
    this.handleModal = this.handleModal.bind(this);
  }

  handleNextPhoto(event, CollectionLength) {
    event.preventDefault();
    if (this.state.currentPhotoIndex === CollectionLength - 1) {
    this.setState({ currentPhotoIndex: 0 });
    } else {
    this.setState({ currentPhotoIndex: this.state.currentPhotoIndex + 1 });      
    }
  }

  handlePreviousPhoto(event, CollectionLength) {
    event.preventDefault();
    if (this.state.currentPhotoIndex === 0) {
    this.setState({ currentPhotoIndex: CollectionLength -1 });
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
    this.carousel.current.scrollBy(665, 0)
  }

  handlePrevious(event) {
    event.preventDefault();
    this.carousel.current.scrollBy(- 665, 0)
  }

  handleScroll(event) {
    this.setState({ positionX: event.target.scrollLeft, carouselWidth: event.target.scrollWidth - 650})
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
    this.setState({ currentDish: this.state.currentDish - 1, currentPhotoIndex: 0});
  }

  handleNextModal(event) {
    event.preventDefault();
    this.setState({ currentDish: this.state.currentDish + 1, currentPhotoIndex: 0});
  }

  render() {
    if (this.state.restaurants[19] === undefined) {
      var restaurantSample = [];
    } else {
      var restaurantSample = this.state.restaurants[19]['popularDishes'];
    }

    console.log(this.state.restaurants[19])

    return <AppComponent>
      <Heading>Popular Dishes</Heading>
      <LeftSelectionBox onClick={(e) => this.handlePrevious(e)} positionX = {this.state.positionX}>
        <CircleBox>
          <LeftSelectionButton src="./icons/leftArrow-black.svg"></LeftSelectionButton>
        </CircleBox>
      </LeftSelectionBox>
      <RightSelectionBox onClick={(e) => this.handleNext(e)} positionX = {this.state.positionX} carouselWidth = {this.state.carouselWidth} >
        <CircleBox>
          <RightSelectionButton src="./icons/rightArrow-black.svg" ></RightSelectionButton>
        </CircleBox>
      </RightSelectionBox>
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
        <DishDetail dish={restaurantSample[this.state.currentDish]} currentPhotoIndex = {this.state.currentPhotoIndex} handleNextPhoto = {this.handleNextPhoto.bind(this)} handlePreviousPhoto = {this.handlePreviousPhoto.bind(this)} />
        <div className="changedish">
          <button className="previousdish" onClick={(e) => this.handlePreviousModal(e)}>Previous</button>
          <NextDishButton onClick={(e) => this.handleNextModal(e)}>Next</NextDishButton>
        </div>
      </Modal>
    </AppComponent>
  }
}

export default App;