import React from 'react';
import styled from "styled-components";

let ReviewEntry = (props) => (
    <div>
        <div className="profile">
            <div className="profile-left">
                <div className="profile-picture">{props.review.usernamePhotoURL}</div>
            </div>
            <div className="profile-right">
                <div className="username">{props.review.username}</div>
                <div className="stats">
                    <span>{props.review.userFriendsCount}</span>
                    <span>{props.review.userReviewsCount}</span>
                </div>
            </div>
        </div>
        <div className="rating">
            <span className="ratingStars">{props.review.userReviewRating}</span>
            <span className="date">{props.review.userReviewDate}</span>
        </div>
        <div className="review">{props.review.userReview}</div>
    </div>
)


export default ReviewEntry;