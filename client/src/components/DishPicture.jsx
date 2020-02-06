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

class DishPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = { height: 0, width: 0, edgeCase: false, name: '' };
    this.onImgLoad = this.onImgLoad.bind(this);
    this.checkEdgeCase = this.checkEdgeCase.bind(this);
  }
  
  onImgLoad({ target: img }) {
    // console.log(img.offsetHeight, img.offsetWidth);
    this.setState({ height: img.offsetHeight, width: img.offsetWidth, name: this.props.picture, edgeCase: false  }, this.checkEdgeCase);
  }

  checkEdgeCase() {
    if (this.state.width >= this.state.height) {
      if (this.state.height * 933 / this.state.width > 700) {
        // console.log('edgecase', 'width: ', this.state.width, 'height: ', this.state.height )
        this.setState({ edgeCase: true, name: this.props.picture });
      }
    }
  }

  render() {
    //   console.log(this.state.edgeCase);
    return (
      <Container>
        <MockPicture>
            <Picture onLoad={this.onImgLoad} src={this.props.picture} heightDimension={this.state.height} widthDimension={this.state.width}></Picture>
        </MockPicture>
        {this.state.edgeCase ? (<PictureEdgeCase src={this.props.picture}></PictureEdgeCase>) : (<Picture onLoad={this.onImgLoad} src={this.props.picture} heightDimension={this.state.height} widthDimension={this.state.width}></Picture>)}
      </Container>
    );
  }
}

export default DishPicture;
