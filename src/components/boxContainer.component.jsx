import React, { Component } from 'react';
import Box from './box.component';
import './BoxContainer.style.css';


class BoxContainer extends Component{
    static defaultProps = {
        numBox: 18,
        allColors: ["red", "blue", "yellow", "green", "purple", "dodgerblue", "brown", "black", "#73AB84","#79C7C5","#ACC12F","#0892A5","#F44E3F","#E77728"]
    }
    render() {
        const boxes = Array.from({ length: this.props.numBox }).map(
            () => <Box colors= {this.props.allColors} />
        )
        return (
        <div className="BoxContainer">
                { boxes}
               
        </div>
    )
}
}

export default BoxContainer;