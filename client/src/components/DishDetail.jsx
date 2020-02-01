import React from "react";
import styled from "styled-components";
import ReviewEntry from "./ReviewEntry.jsx";

const ModalContainer = styled.div`
    display:flex;
    background:white;
    flex-direction: row;
    justify-content: space-around;
    border: 1px solid;
    border-radius:6px;
    width: 1300px;
    height: 730px;
`;

ModalContainer.displayName = "ModalContainer";

const LeftContainer = styled.div`
    background: black;
    width: 670px;
    height: 730px;
    display:flex;
    justify-content: center;
    flex-direction: column;
`;

LeftContainer.displayName = "LeftContainer";

const RightContainer = styled.div`
    display: flex;
    background: white;
    justify-content: center;
    flex-direction: column;
    width: 360px;
    height: 730px;
`;

RightContainer.displayName = "RightContainer";

const DishPicture = styled.img`
    width: 670px;
    height: 670px;
`;

DishPicture.displayName = "DishPicture";

const StartOrder = styled.button`
    width: 300px;
    height: 36px;
    color:white;
    background-color: #d32323;
`;

const Reviews = styled.div`
    overflow-y: scroll;
`;

class DishDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.dish === undefined) {
            var modal = '';
        } else {
            var modal = <ModalContainer>
                <LeftContainer>
                    <div className="dishpicture"></div>
                    <DishPicture src={this.props.dish['photos'][0].URL}></DishPicture>
                    <button>Previous</button>
                    <button>Next</button>
                    <div className="footercomment">
                        <span className="description">{this.props.dish['photos'][0].description}</span>
                        <span className="photosCount">X of {this.props.dish['photos'].length}</span>
                    </div>
                </LeftContainer>
                <RightContainer>
                    <div className="title">{this.props.dish['dishName']}</div>
                    <div className="reviewsCount">Reviews:</div>
                    <Reviews>
                        {this.props.dish['reviews'].map((review, index) => <ReviewEntry review={review} key={index} />)}
                    </Reviews>
                    <StartOrder>Start Order</StartOrder>
                </RightContainer>
            </ModalContainer>
        }


        return <div>
            {modal}
        </div>
    }
}

export default DishDetail;