import React from "react";
import styled from "styled-components";


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

class DishPicture extends React.Component {
    constructor(props) {
        super(props);
        this.state = { height: 0, width: 0, edgeCase: false };
        this.onImgLoad = this.onImgLoad.bind(this);
    }

    onImgLoad({ target: img }) {
        console.log(img.offsetHeight, img.offsetWidth)
        this.setState({ height: img.offsetHeight, width: img.offsetWidth }, this.checkEdgeCase);
    }

    checkEdgeCase() {
        if (this.state.width >= this.state.height) {
            if (this.state.height * 933 / this.state.width > 700) {
                this.setState({ edgeCase: true})
            } 
        }
    }

    render() {
        // var picture = <Picture onLoad={this.onImgLoad} src={this.props.picture} heightDimension={this.state.height} widthDimension={this.state.width}></Picture>

        // if (this.state.edgeCase) {
        //     console.log('edge case')
        //     var picture = <PictureEdgeCase onLoad={this.onImgLoad} src={this.props.picture}></PictureEdgeCase>
        // }

        // return (<Container>
        //     {picture}
        // </Container>
        // );
        return (<Container>
            {this.state.edgeCase ? (<PictureEdgeCase onLoad={this.onImgLoad} src={this.props.picture}></PictureEdgeCase>) : (<Picture onLoad={this.onImgLoad} src={this.props.picture} heightDimension={this.state.height} widthDimension={this.state.width}></Picture>)}
        </Container>
        );
    }
}

export default DishPicture;