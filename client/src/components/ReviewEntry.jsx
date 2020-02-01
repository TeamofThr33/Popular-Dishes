import React from 'react';
import styled from "styled-components";

const UsernamePhoto = styled.img`

`;

const Profile = styled.div`
    display: flex;
    flex-direction:row;
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
                    <span>{props.review.userFriendsCount}</span>
                    <span>{props.review.userReviewsCount}</span>
                </div>
            </div>
        </Profile>
        <div className="rating">
            <span className="ratingStars">{props.review.userReviewRating}</span>
            <span className="date">{props.review.userReviewDate}</span>
        </div>
        <div className="review">{props.review.userReview}</div>
    </div>
)


export default ReviewEntry;