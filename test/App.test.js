import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';
import PopularDish from '../client/src/components/PopularDish';
import dummyData from '../client/src/dummyData.js';

describe('App component', () => {

    it("should render the title 'Popular Dishes' in App", () => {
        const wrapper = shallow(<App sampleData = {dummyData.popularDishes}/>);
        const title = wrapper.find("Heading");
        const result = title.text();
        expect(result).toBe("Popular Dishes");
    });

    it("should contain the Popular dish component", () => {
        const wrapper = shallow(<App sampleData = {dummyData.popularDishes}/>);
        const populardish = wrapper.find("PopularDish");
        expect(populardish.exists()).toBe(true);
    });

    it("the carousel should contain 6 popular dishes based on dummyData", () => {
        const wrapper = shallow(<App sampleData = {dummyData.popularDishes}/>);
        const carousel = wrapper.find("CarouselWrapper");
        const carouselChildren = carousel.children();
        expect(carouselChildren.length).toBe(6);
    });

    it("triggering handleOpenModal should change the state of the modal to true", () => {
        const wrapper = shallow(<App sampleData = {dummyData.popularDishes}/>);
        expect(wrapper.state("modal")).toBe(false);
        const popularDish = wrapper.find("PopularDish").at(0);
        // calling event.preventDefault() or accessing any of its properties you must provide a mock event object with the properties your code requires.
        popularDish.props().handleOpenModal({preventDefault: () => {}});
        expect(wrapper.state("modal")).toBe(true);
      });

      it("triggering handleCloseModal should change the state of the modal to false", () => {
        const wrapper = shallow(<App sampleData = {dummyData.popularDishes}/>);
        expect(wrapper.state("modal")).toBe(false);
        wrapper.setState({modal : true});
        expect(wrapper.state("modal")).toBe(true);
        const Modal = wrapper.find("Modal").at(0);
        Modal.props().handleCloseModal({preventDefault: () => {}});
        expect(wrapper.state("modal")).toBe(false);
      });

      it("Clicking on CloseButton should change the state of the modal to false", () => {
        const wrapper = shallow(<App sampleData = {dummyData.popularDishes}/>);
        expect(wrapper.state("modal")).toBe(false);
        wrapper.setState({modal : true});
        expect(wrapper.state("modal")).toBe(true);
        const closeButton = wrapper.find("CloseButton");
        closeButton.simulate('click');
        expect(wrapper.state("modal")).toBe(false);
      });

      it("Clicking on NextDishBox should increment the state of currentDish", () => {
        const wrapper = shallow(<App sampleData = {dummyData.popularDishes}/>);
        expect(wrapper.state("currentDish"));
        wrapper.setState({modal : true});
        const nextDishBox = wrapper.find("NextDishBox");
        nextDishBox.simulate('click', { preventDefault() {} });
        nextDishBox.simulate('click', { preventDefault() {} });
        nextDishBox.simulate('click', { preventDefault() {} });
        expect(wrapper.state("currentDish")).toBe(3);
      });

      it("Clicking on PreviousDishBox should decrement the state of currentDish", () => {
        const wrapper = shallow(<App sampleData = {dummyData.popularDishes}/>);
        expect(wrapper.state("currentDish"));
        wrapper.setState({modal : true});
        wrapper.setState({currentDish : 3});
        const previousDishBox = wrapper.find("PreviousDishBox");
        previousDishBox.simulate('click', { preventDefault() {} });
        previousDishBox.simulate('click', { preventDefault() {} });
        previousDishBox.simulate('click', { preventDefault() {} });
        expect(wrapper.state("currentDish")).toBe(0);
      });


      it("Clicking on NextDishBox should increment the state of currentDish and display the next dish on the NextDishBox", () => {
        const wrapper = shallow(<App sampleData = {dummyData.popularDishes}/>);
        expect(wrapper.state("currentDish"));
        wrapper.setState({modal : true});
        const nextDishBox = wrapper.find("NextDishBox");
        let nextDishName = wrapper.find("DishName").at(1);
        expect(nextDishName.text()).toBe('Clam Chowder');
        nextDishBox.simulate('click', { preventDefault() {} });
        nextDishName = wrapper.find("DishName").at(1);
        expect(nextDishName.text()).toBe('Jumbo Scallop And Crab');
      });

      it("Clicking on PreviousDishBox should decrement the state of currentDish and display the previous dish on the PreviousDishBox", () => {
        const wrapper = shallow(<App sampleData = {dummyData.popularDishes}/>);
        expect(wrapper.state("currentDish"));
        wrapper.setState({modal : true});
        wrapper.setState({currentDish : 3});
        let previousDishName = wrapper.find("DishName").at(0);
        expect(previousDishName.text()).toBe('Jumbo Scallop And Crab');
        const previousDishBox = wrapper.find("PreviousDishBox");
        previousDishBox.simulate('click', { preventDefault() {} });
        previousDishName = wrapper.find("DishName").at(0);
        expect(previousDishName.text()).toBe('Clam Chowder');
      });

});

