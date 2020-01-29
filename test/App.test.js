import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';
import PopularDishes from '../client/src/components/PopularDishes';

describe('App component', () => {
    
    it("should render PopularDishes component, with 'Hello Dish'", () => {
        const wrapper = shallow(<App />);
        const title = wrapper.find(PopularDishes);

        expect(title.exists()).toBe(true);
    })

    it("should render the title 'Bob' in App", () => {
        const wrapper = shallow(<App />);
        const title = wrapper.find("h2");
        const result = title.text();
        expect(result).toBe("Bob");
    })
});

