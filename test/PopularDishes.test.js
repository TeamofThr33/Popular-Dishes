import React from 'react';
import { shallow } from 'enzyme';
import PopularDishes from '../client/src/components/PopularDishes';

describe('checks for the rendering of Popular Dishes', () => {
    it('should contain "Hello Dish"', () => {
        const wrapper = shallow(<PopularDishes />);
        const divTitle = wrapper.find("div.title");
        expect(divTitle.text()).toEqual("Hello Dish");
    })
});
