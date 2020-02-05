import React from "react";
import styled from "styled-components";
import ReviewEntry from "./ReviewEntry.jsx";
import DishPicture from "./DishPicture.jsx";

const ModalContainer = styled.div`
    display:flex;
    background:white;
    flex-direction: row;
    border-radius:6px;
    width: 1300px;
    height: 700px;
`;

ModalContainer.displayName = "ModalContainer";

const LeftContainer = styled.div`
    width: 940px;
    height: 700px;
    display:flex;
    justify-content: center;
    flex-direction: column;
`;

LeftContainer.displayName = "LeftContainer";

const RightContainer = styled.div`
    display: flex;
    background: white;
    justify-content: space-between;
    flex-direction: column;
    width: 360px;
    height: 700px;
    border-radius: 0px 6px 6px 0px;
`;

RightContainer.displayName = "RightContainer";

// const DishPicture = styled.img`
//     display:flex;
//     justify-content: center;
//     align-items: center;
// `;

const PictureContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    border-radius: 6px 0px 0px 6px;
    width: 940px;
    height: 700px;
`;

// DishPicture.displayName = "DishPicture";

const StartOrder = styled.button`
    width: 300px;
    height: 36px;
    color:white;
    background-color: #d32323;
    border-radius: 3px;
    border-color: #d32323;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
`;

const Reviews = styled.div`
    overflow-y: scroll;
    height: 500px;
    padding-bottom: 0px;
`;

const Description = styled.span`
    color: white;
    margin: 20px;
    border-radius: 0px 0px 0px 6px;
    font-size: 14px;
`;

const PhotoCount = styled.span`
    color: white;
    margin: 20px;
`;

const FooterComment = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 53px;
    background: rgba(0,0,0,.5);
    margin-top: -53px;
    border-radius: 0px 0px 0px 6px;
    font-size: 14px;
`;

const ChangePhotoControls = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: absolute;
`;

const BottomContainer = styled.div`
    height: 97px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-style: solid;
    border-color: #e6e6e6;
    border-width: 1px;
    border-radius: 0px 0px 6px 0px;
`;

const RightContent = styled.div`
    padding: 30px;
    padding-bottom: 0px;
`;

const NextPhotoButton = styled.input`
    margin-left: 909px;
    margin-top: -36px;
    cursor: pointer;
    width: 17px;
    opacity: 0.7;
    &:hover {
    opacity: 1;
    }
    &:focus {
    outline:0;
    }
`;

const PreviousPhotoButton = styled.input`
    margin-left: 15px;
    width: 17px;
    cursor: pointer;
    opacity: 0.7;
    &:hover {
    opacity: 1;
    }
    &:focus {
    outline:0;
    }
`;

const TopSection = styled.div`
    height: 85px;
    display: inline-block;
    margin-top: -20px;
`;

const Title = styled.h2`
    font-size: 22px;
    color: #333;
`;

const Price = styled.div`
    font-size: 14px;
    margin-top: -17px;
    font-weight: bold;
    color: #333;
`;

const Ingredients = styled.div`
    font-size: 14px;
    margin-bottom: 25px;
    color: #333;
`;

const ReviewCounts = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #333;
`;

class DishDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ImageWidth: 0, ImageHeight: 0 };
    }

    render() {

        if (this.props.dish === undefined) {
            var modal = '';
        } else {
            var modal = <ModalContainer>
                <LeftContainer>
                    <PictureContainer>
                        <DishPicture picture={this.props.dish['photos'][this.props.currentPhotoIndex].URL} />
                        {/* <DishPicture src={this.props.dish['photos'][this.props.currentPhotoIndex].URL} height="700"></DishPicture> */}
                    </PictureContainer>
                    <ChangePhotoControls>
                        <PreviousPhotoButton type="image" src="./icons/leftArrow.svg" onClick={() => this.props.handlePreviousPhoto()}></PreviousPhotoButton>
                        <NextPhotoButton type="image" src="./icons/rightArrow.svg" onClick={() => this.props.handleNextPhoto()}></NextPhotoButton>
                        {/* <PreviousPhotoButton type="image" src="./icons/leftArrow.svg" onClick={() => this.props.handlePreviousPhoto(this.props.dish['photos'].length)}></PreviousPhotoButton>
                        <NextPhotoButton type="image" src="./icons/rightArrow.svg" onClick={() => this.props.handleNextPhoto(this.props.dish['photos'].length)}></NextPhotoButton> */}
                    </ChangePhotoControls>
                    <FooterComment>
                        <Description>{this.props.dish['photos'][this.props.currentPhotoIndex].description}</Description>
                        <PhotoCount>{this.props.currentPhotoIndex + 1} of {this.props.dish['photos'].length}</PhotoCount>
                    </FooterComment>
                </LeftContainer>
                <RightContainer>
                    <RightContent>
                        <TopSection>
                            <Title>{this.props.dish['dishName']}</Title>
                            <Price>{this.props.dish['dishPrice']}</Price>
                        </TopSection>
                        <Reviews>
                            <Ingredients>{this.props.dish['ingredients']}</Ingredients>
                            <ReviewCounts>Reviews ({this.props.dish['reviews'].length})</ReviewCounts><br></br>
                            {this.props.dish['reviews'].map((review, index) => <ReviewEntry review={review} key={index} />)}
                        </Reviews>
                    </RightContent>
                    <BottomContainer>
                        <StartOrder>View Website</StartOrder>
                    </BottomContainer>
                </RightContainer>
            </ModalContainer>
        }

        return <div>
            {modal}
        </div>
    }
}

export default DishDetail;