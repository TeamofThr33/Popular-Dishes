import React from 'react';
import { shallow } from 'enzyme';
import DishDetail from '../client/src/components/DishDetail.jsx';
import dummyData from '../client/src/dummyData.js';


describe('DishDetail component', () => {

  const wrapper = shallow(<DishDetail dish = {dummyData.popularDishes[0]} currentPhotoIndex={0} />);

  it('should contain the dish name, dish price, ingredients, number of reviews and cover picture', () => {
    const title = wrapper.find("Title");
    const price = wrapper.find("Price");
    const reviewCounts = wrapper.find("ReviewCounts");
    const ingredients = wrapper.find("Ingredients");
    const photoCount = wrapper.find("PhotoCount");
    const description = wrapper.find("Description");
    expect(title.text()).toEqual("Clam Chowder");
    expect(price.text()).toEqual("$33.00");
    expect(reviewCounts.text()).toEqual("Reviews (11)");
    expect(photoCount.text()).toEqual("1 of 11");
    expect(ingredients.text()).toEqual("Cooked and warm seafood");
    expect(description.text()).toEqual("Highly recommend!");
  })

  it('should contain the View Website Button', () => {
    const viewWebsite = wrapper.find("StartOrder");
    expect(viewWebsite.text()).toEqual("View Website");
  })

  it("clicking on PreviousPhotoButton should trigger onClick", () => {
    const mock = jest.fn();
    const wrapper = shallow(<DishDetail dish = {dummyData.popularDishes[0]} currentPhotoIndex={0} handlePreviousPhoto={mock}/>);
    const previousPhotoButton = wrapper.find("PreviousPhotoButton").simulate('click');
    expect(mock).toHaveBeenCalledTimes(1);
  });

  it("clicking on NextPhotoButton should trigger onClick", () => {
    const mock = jest.fn();
    const wrapper = shallow(<DishDetail dish = {dummyData.popularDishes[0]} currentPhotoIndex={0} handleNextPhoto={mock}/>);
    const nextPhotoButton = wrapper.find("NextPhotoButton").simulate('click');
    expect(mock).toHaveBeenCalledTimes(1);
  });

});