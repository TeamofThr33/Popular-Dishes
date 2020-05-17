import React from 'react';
import { shallow } from 'enzyme';
import PopularDish from '../client/src/components/PopularDish';

var sampledata = {
  dishName: "Mixed Grill",
  dishPrice: "$27.00",
  ingredients: "Slowly cooked in butter",
  coverPictureURL: "https://foodimages123456.s3-us-west-1.amazonaws.com/Mixed+Grill/MixedGrill11.jpg",
  photos: [{ URL: "https://foodimages123456.s3-us-west-1.amazonaws.com/Oysters/Oysters12.jpg", description: "best choice" },
  { URL: "https://foodimages123456.s3-us-west-1.amazonaws.com/Oysters/Oysters12.jpg", description: "Highly recommend!" },
  { URL: "https://foodimages123456.s3-us-west-1.amazonaws.com/Oysters/Oysters8.jpg", description: "Great for sharing" },
  { URL: "https://foodimages123456.s3-us-west-1.amazonaws.com/Oysters/Oysters1.jpg", description: "Great for sharing" },
  { URL: "https://foodimages123456.s3-us-west-1.amazonaws.com/Oysters/Oysters14.jpg", description: "This is the best dish we ordered" },
  { URL: "https://foodimages123456.s3-us-west-1.amazonaws.com/Oysters/Oysters25.jpg", description: "Great for sharing" },
  { URL: "https://foodimages123456.s3-us-west-1.amazonaws.com/Oysters/Oysters25.jpg", description: "Unforgettably delicious" },
  { URL: "https://foodimages123456.s3-us-west-1.amazonaws.com/Oysters/Oysters12.jpg", description: "Highly recommend!" },
  { URL: "https://foodimages123456.s3-us-west-1.amazonaws.com/Oysters/Oysters6.jpg", description: "best choice" }],
  reviews: [{
    username: "Laurie V.",
    usernamePhotoURL: "https://foodimages123456.s3-us-west-1.amazonaws.com/UserProfiles/UserProfile3.jpg",
    userReview: "Great food and an excellent view. Really enjoyed the lunch. Had the mixed grill and fish and chips. Bread bowl of chowder was excellent Sea lions were on the dock just below and working views. Located on Pier 39.",
    userReviewDate: "6/23/2017",
    userReviewRating: 3,
    userFriendsCount: 60,
    userReviewsCount: 93
  },
  {
    username: "Laurie V.",
    usernamePhotoURL: "https://foodimages123456.s3-us-west-1.amazonaws.com/UserProfiles/UserProfile3.jpg",
    userReview: "Great food and an excellent view. Really enjoyed the lunch. Had the mixed grill and fish and chips. Bread bowl of chowder was excellent Sea lions were on the dock just below and working views. Located on Pier 39.",
    userReviewDate: "6/23/2017",
    userReviewRating: 3,
    userFriendsCount: 60,
    userReviewsCount: 93
  },
  {
    username: "Laurie V.",
    usernamePhotoURL: "https://foodimages123456.s3-us-west-1.amazonaws.com/UserProfiles/UserProfile3.jpg",
    userReview: "Great food and an excellent view. Really enjoyed the lunch. Had the mixed grill and fish and chips. Bread bowl of chowder was excellent Sea lions were on the dock just below and working views. Located on Pier 39.",
    userReviewDate: "6/23/2017",
    userReviewRating: 3,
    userFriendsCount: 60,
    userReviewsCount: 93
  }]
};

describe('checks for the correct rendering of Popular Dishes in the carousel and modal pop-up', () => {

  it('should contain the dish name, dish price, number of photos, number of reviews and cover picture', () => {
    const wrapper = shallow(<PopularDish dish={sampledata} />);
    const dishName = wrapper.find("DishName");
    const dishPrice = wrapper.find("DishPrice");
    const numberOfPhotos = wrapper.find("span.numberOfPhotos");
    const numberOfReviews = wrapper.find("span.numberOfReviews");
    const coverPicture = wrapper.find("CoverPicture");

    expect(dishName.text()).toEqual("Mixed Grill");
    expect(dishPrice.text()).toEqual("$27.00");
    expect(numberOfPhotos.text()).toEqual("9 Photos");
    expect(numberOfReviews.text()).toEqual("3 Reviews");
    expect(coverPicture.prop("src")).toEqual("https://foodimages123456.s3-us-west-1.amazonaws.com/Mixed+Grill/MixedGrill11.jpg");
  })

  it("clicking on a popular dish container should trigger onClick", () => {
    const mock = jest.fn();
    const wrapper = shallow(<PopularDish dish={sampledata} handleOpenModal={mock}/>);
    const container = wrapper.find("Container").simulate('click');
    expect(mock).toHaveBeenCalledTimes(1);
  });

});