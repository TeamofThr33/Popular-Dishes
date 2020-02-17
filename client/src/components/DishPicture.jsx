import React from 'react';
import styled from 'styled-components';

const Picture = styled.img`
  width: ${props => props.heightDimension >= props.widthDimension ? 'auto' : '933px'};
  height: ${props => props.heightDimension >= props.widthDimension ? '700px' : 'auto'};
  border-radius: ${props => props.heightDimension >= props.widthDimension ? '0px' : '6px 0px 0px 6px'};
`;

const PictureEdgeCase = styled.img`
  object-fit: cover;
  width: 933px;
  height: 700px;
  border-radius: 6px 0px 0px 6px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 938px;
  height: 694px;
`;

let DishPicture = (props) => {
  return (
    <Container>
      {props.edgeCase ? (<PictureEdgeCase src={props.picture}></PictureEdgeCase>) : (<Picture onLoad={props.onImgLoad} src={props.picture} heightDimension={props.height} widthDimension={props.width}></Picture>)}
    </Container>
  );
};

export default DishPicture;
