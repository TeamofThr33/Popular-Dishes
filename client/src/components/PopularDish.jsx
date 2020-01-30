import React from 'react';
import styled from "styled-components";


const Container = styled.div`
    border: solid 1px;
    border-radius: 3px;
    min-width: 192px;
    height: 192px;
    margin: 30px;
`;

const CoverPicture = styled.img`
    width: 100%;
    height: 100%;
`;


class PopularDish extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Container>
            <CoverPicture src={this.props.dish.coverPictureURL} />
            <div className="dishName">{this.props.dish.dishName}</div>
            <div className="dishPrice">{this.props.dish.dishPrice}</div>
            <div className="numberOfPhotos">{this.props.dish.photos.length} Photos</div>
            <div className="numberOfReviews">{this.props.dish.reviews.length} Reviews</div>
        </Container>
    }
}

export default PopularDish;