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

const MockPicture = styled.div`
  display: none;
`;


let DishPicture = (props) => {
  return (
    <Container>
      <MockPicture>
        <Picture onLoad={props.onImgLoad} src={props.picture} heightDimension={props.height} widthDimension={props.width}></Picture>
      </MockPicture>
      {props.edgeCase ? (<PictureEdgeCase src={props.picture}></PictureEdgeCase>) : (<Picture onLoad={props.onImgLoad} src={props.picture} heightDimension={props.height} widthDimension={props.width}></Picture>)}
    </Container>
  );
};

// class DishPicture extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { height: 0, width: 0, edgeCase: false, name: '' };
//     this.onImgLoad = this.onImgLoad.bind(this);
//     this.checkEdgeCase = this.checkEdgeCase.bind(this);
//   }

//   onImgLoad({ target: img }) {
//     this.setState({ height: img.offsetHeight, width: img.offsetWidth, name: this.props.picture, edgeCase: false  }, this.checkEdgeCase);
//   }

//   resetEdgeCaseState () {
//     this.setState({ edgeCase: false});
//   }

//   checkEdgeCase() {
//     if (this.state.width >= this.state.height) {
//       if (this.state.height * 933 / this.state.width > 700) {
//         this.setState({ edgeCase: true, name: this.props.picture });
//       }
//     }
//   }

//   render() {
//     return (
//       <Container>
//         <MockPicture>
//             <Picture onLoad={props.onImgLoad} src={props.picture} heightDimension={props.height} widthDimension={props.width}></Picture>
//         </MockPicture>
//         {props.edgeCase ? (<PictureEdgeCase src={props.picture}></PictureEdgeCase>) : (<Picture onLoad={props.ComponentonImgLoad} src={props.picture} heightDimension={props.height} widthDimension={props.width}></Picture>)}
//       </Container>
//     );
//   }
// }

export default DishPicture;
