import React from "react";
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

const ReadMore = styled.div`
    font-size: 12px;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    color: #0073bb;
    cursor: pointer;
`;

class ReviewEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentReview: this.props.review.userReview, shortReview: '', expand: false };
    }

    componentDidMount() {
        this.createShortReview();
    }

    createShortReview() {
        var shortenedReview = this.props.review.userReview.slice(0, 230) + '....';
        this.setState({ shortReview: shortenedReview });
    }

    handleReadMore(event) {
        event.preventDefault();
        this.setState({ expand: !this.state.expand })
    }

    render() {
        return <div>
            <Profile>
                <div className="profile-left">
                    <UsernamePhoto src={this.props.review.usernamePhotoURL}></UsernamePhoto>
                </div>
                <div className="profile-right">
                    <div className="username">{this.props.review.username}</div>
                    <div className="stats">
                        <FriendsIcon src="./icons/friends.svg"></FriendsIcon>
                        <span>{this.props.review.userFriendsCount}</span>
                        <Star src="./icons/star.svg"></Star>
                        <span>{this.props.review.userReviewsCount}</span>
                    </div>
                </div>
            </Profile>
            <div className="rating">
                <Rating src={`./icons/${this.props.review.userReviewRating}-stars.svg`}></Rating>
                <span className="date">{this.props.review.userReviewDate}</span>
            </div>
            <div className="review">{this.state.expand ? this.state.currentReview : this.state.shortReview}</div>
            <ReadMore onClick={(e) => this.handleReadMore(e)}>{this.state.expand ? "Read Less" : "Read More"}</ReadMore>
            <br></br>
        </div>
    }
}

export default ReviewEntry;