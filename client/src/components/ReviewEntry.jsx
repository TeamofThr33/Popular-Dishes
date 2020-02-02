import React from 'react';
import styled from "styled-components";

const UsernamePhoto = styled.img`
    width: 30px;
    height: 30px;
`;

const Profile = styled.div`
    display: flex;
    flex-direction:row;
`;

const FriendsIcon = styled.img`
    height: 18px;
    width: 18px;
`;

const Star = styled.img`
    height: 18px;
    width: 18px;
`;

const Rating = styled.img`
    height: 18px;
    width: 102px;
`;

let ReviewEntry = (props) => (
    <div>
        <Profile>
            <div className="profile-left">
                <UsernamePhoto src={props.review.usernamePhotoURL}></UsernamePhoto>
            </div>
            <div className="profile-right">
                <div className="username">{props.review.username}</div>
                <div className="stats">
                    <FriendsIcon src="./icons/friends.svg"></FriendsIcon>
                    <span>{props.review.userFriendsCount}</span>
                    <Star src="./icons/star.svg"></Star>
                    <span>{props.review.userReviewsCount}</span>
                </div>
            </div>
        </Profile>
        <div className="rating">
            <Rating src= {`./icons/${props.review.userReviewRating}-stars.svg`}></Rating>
            <span className="date">{props.review.userReviewDate}</span>
        </div>
        <div className="review">{props.review.userReview}</div> <br></br>
    </div>
)


export default ReviewEntry;