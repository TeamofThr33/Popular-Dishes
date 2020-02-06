import React from "react";
import styled from "styled-components";

const UsernamePhoto = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 4px;
    margin-right: 6px;
`;

const Profile = styled.div`
    display: flex;
    align-items: center;
    flex-direction:row;
    margin-bottom: 7px;
`;

const FriendsIcon = styled.img`
    height: 18px;
    width: 18px;
    margin-right: 3px;
`;

const Star = styled.img`
    height: 12px;
    width: 12px;
    margin-right: 6px;
`;

const Rating = styled.img`
    height: 18px;
    width: 102px;
    margin-right: 6px;
`;

const UserReviewsCount = styled.span`
    font-size: 12px;
    font-weight: bold;
    color: #666;
`;

const UserFriendsCount = styled.span`
    font-size: 12px;
    font-weight: bold;
    color: #666;
    margin-right: 6px;
`;

const Date = styled.span`
    font-size: 14px;
    color: #666;
`;

const ReadMore = styled.div`
    /* display: ${props => props.expand ? "flex" : "none"}; */
    font-size: 12px;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    color: #0073bb;
    cursor: pointer;
    margin-top: 4px;
`;

const Username = styled.div`
    font-size: 14px;
    font-weight: bold;
`;

const Review = styled.span`
    font-size: 14px;
    margin-top: 5px;
`;

const StatsSection = styled.div`
    display: flex;
    align-items: center;
`;

const RatingSection = styled.div`
    display:flex;
    align-items: center;
    margin-bottom: 3px; 
`;

const ProfileLeft = styled.div`
`;

const ProfileRight = styled.div`
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
                <ProfileLeft>
                    <UsernamePhoto src={this.props.review.usernamePhotoURL}></UsernamePhoto>
                </ProfileLeft>
                <ProfileRight>
                    <Username>{this.props.review.username}</Username>
                    <StatsSection>
                        <FriendsIcon src="./icons/friends.svg"></FriendsIcon>
                        <UserFriendsCount>{this.props.review.userFriendsCount}</UserFriendsCount>
                        <Star src="./icons/star.svg"></Star>
                        <UserReviewsCount>{this.props.review.userReviewsCount}</UserReviewsCount>
                    </StatsSection>
                </ProfileRight>
            </Profile>
            <RatingSection>
                <Rating src={`./icons/${this.props.review.userReviewRating}-stars.svg`}></Rating>
                <Date>{this.props.review.userReviewDate}</Date>
            </RatingSection>
            {this.props.review.userReview.length < 229 ? (<div>
                <Review>{this.state.currentReview}</Review><br></br>
                </div>) 
                :
                (<div>
                    <Review>{this.state.expand ? this.state.currentReview : this.state.shortReview}</Review>
                    <ReadMore onClick={(e) => this.handleReadMore(e)} expand={this.state.expand}>{this.state.expand ? "Read Less" : "Read More"}</ReadMore>
                </div>)
            }
            <br></br>
        </div>
    }
}

export default ReviewEntry;