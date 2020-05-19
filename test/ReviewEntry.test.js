import React from 'react';
import { shallow } from 'enzyme';
import ReviewEntry from '../client/src/components/ReviewEntry.jsx';
import dummyData from '../client/src/dummyData.js';

describe('ReviewEntry component', () => {
  const wrapper = shallow(<ReviewEntry review = {dummyData.popularDishes[0].reviews[0]} />);

  it('should contain the username, user photo, user review, review date, user rating, user friend count and user review count', () => {
    const username = wrapper.find("Username");
    const userProfile = wrapper.find("UsernamePhoto");
    const userReviewDate = wrapper.find("Date");
    const userReviewsCount = wrapper.find("UserReviewsCount");
    const userFriendsCount = wrapper.find("UserFriendsCount");
    expect(username.text()).toEqual("Laurie V.");
    expect(userProfile.prop("src")).toEqual("https://foodimages123456.s3-us-west-1.amazonaws.com/UserProfiles/UserProfile12.jpg");
    expect(userReviewDate.text()).toEqual('11/28/2015');
    expect(userReviewsCount.text()).toEqual("178");
    expect(userFriendsCount.text()).toEqual("292");
  })

  it('review should have a readmore button that allows for the review to expand onclick', () => {
    let userReview = wrapper.find("Review");
    const readMore = wrapper.find("ReadMore");
    expect(userReview.text()).toEqual("We plan to have a nice a meal on every trip we take and we chose Fog Harbor for our San Francisco trip based on their stellar reviews. We had a 5 o clock reservation for a table near the window and were seated right away. The view....");
    expect(wrapper.state("expand")).toBe(false);
    readMore.simulate('click', { preventDefault() {} });
    expect(wrapper.state("expand")).toBe(true);
    userReview = wrapper.find("Review");
    expect(userReview.text()).toEqual('We plan to have a nice a meal on every trip we take and we chose Fog Harbor for our San Francisco trip based on their stellar reviews. We had a 5 o clock reservation for a table near the window and were seated right away. The view was stunning. We started with the crab tator tots that our server recommended and they were delicious. For dinner I had the ahí tuna and my husband had the mixed grill blackened with crab, we both loved our food. Our sons both had the kids salmon and they left their plates spotless. Our server was very attentive and helpful with our boys (10 and 13). If you plan on having a nice meal, it pays to make a reservation, we made one for a window table at sunset and we were not disappointed.');
  })

  it('review should have a readless button that allows for the review to collapse to a shorter version onclick', () => {
    const readMore = wrapper.find("ReadMore");
    wrapper.setState({modal : true});
    expect(wrapper.state("expand")).toBe(true);
    readMore.simulate('click', { preventDefault() {} });
    expect(wrapper.state("expand")).toBe(false);
    const userReview = wrapper.find("Review");
    expect(userReview.text()).toEqual("We plan to have a nice a meal on every trip we take and we chose Fog Harbor for our San Francisco trip based on their stellar reviews. We had a 5 o clock reservation for a table near the window and were seated right away. The view....");
  })
})