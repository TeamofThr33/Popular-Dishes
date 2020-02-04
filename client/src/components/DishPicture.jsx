import React from "react";
import styled from "styled-components";


const Picture = styled.img`
    width: ${props => props.heightDimension >= props.widthDimension ? 'auto' : '933px' };
    height: ${props => props.heightDimension >= props.widthDimension ? '700px' : 'auto' };
    border-radius: ${props => props.heightDimension >= props.widthDimension ? '0px' : '6px 0px 0px 6px' };
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
        this.state = {height: 0, width: 0};
        this.onImgLoad = this.onImgLoad.bind(this);
    }
    onImgLoad({target:img}) {
        this.setState({height:img.offsetHeight, width:img.offsetWidth});
    }
    render(){
        return (<Container>
                <Picture onLoad={this.onImgLoad} src={this.props.picture} heightDimension={this.state.height} widthDimension={this.state.width}></Picture>
                </Container>
               );
    }
}

export default DishPicture;