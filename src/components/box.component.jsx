import React, { Component } from 'react'
import { choice } from './randomColorHelper.js';
import './Box.style.css';


class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { color: choice(this.props.colors) };
        this.handleClick = this.handleClick.bind(this);
    }
    pickColor() {
        let newColor;
        do {
          newColor = choice(this.props.colors);
        } while (newColor === this.state.color)
        
        this.setState({color: newColor })

    }
    handleClick() {
        this.pickColor();
    }
    render() {
        return (
            <div className="Box" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
                <h1>Click Me</h1>
            </div>
        )
    }
}

export default Box;