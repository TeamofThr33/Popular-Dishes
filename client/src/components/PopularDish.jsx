import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    border-width: 0 1px 1px;
    border-style: solid;
    border-radius: 4px;
    border-color: #e6e6e6;
    min-width: 192px;
    height: 186px;
    margin-right: 24px;
    cursor: pointer;
    &:hover {
        box-shadow: 0 2px 6px rgba(0,0,0,.15);
    }
`;

const CoverPicture = styled.img`
    border-radius: 4px;
    width: 100%;
    height: 100%;
`;

const LowerBanner = styled.div`
    width: 192px;
    height: 67px;
    background-color: white;
    border-width: 0 1px 1px;
    border-radius: 0px 0px 4px 4px;
    position:absolute;
    margin-top: -70px;
`;

const DishName = styled.div`
    padding-left: 12px;
    padding-top: 18px;
    font-size: 14px;
    font-weight: bold;
`;

const DishStats = styled.div`
    padding-left: 12px;
    color:gray;
    font-size: 12px;
    margin-top:4px;
`;

const DishPrice = styled.span`
    color: white;
    background-color: rgba(51,51,51,.75);
    border-radius: 4px;
    padding: 3px 6px;
    position:absolute;
    margin-top: 90px;
    margin-left: -62px;
    font-size: 14px;
`;

class PopularDish extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Container onClick={(e) => this.props.handleModal(e, this.props.dishIndex)}>
            <CoverPicture src={this.props.dish.coverPictureURL}></CoverPicture>
            <DishPrice>{this.props.dish.dishPrice}</DishPrice>
            <LowerBanner>
                <DishName>{this.props.dish.dishName}</DishName>
                <DishStats>
                    <span className="numberOfPhotos">{this.props.dish.photos.length} Photos</span>
                    <span> · </span>
                    <span className="numberOfReviews">{this.props.dish.reviews.length} Reviews</span>
                </DishStats>
            </LowerBanner>
        </Container>
    }
}

export default PopularDish;