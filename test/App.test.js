import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';
import PopularDish from '../client/src/components/PopularDish';

describe('App component', () => {

    // it("should contain the Popular dish component", () => {
    //     const wrapper = shallow(<App />);
    //     const populardish = wrapper.find(PopularDish);
    //     expect(populardish.exists()).toBe(true);
    // })

    // it("should contain the 'Popular Dishes' header", () => {
    //     const wrapper = shallow(<App />);
    //     const header = wrapper.find(Header");
    //     expect(header.exists()).toBe(true);
    // })

    it("should render the title 'Bob' in App", () => {
        const wrapper = shallow(<App />);
        const title = wrapper.find("h2");
        const result = title.text();
        expect(result).toBe("Bob");
    })
});

