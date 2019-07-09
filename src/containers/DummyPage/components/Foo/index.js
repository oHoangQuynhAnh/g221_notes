import React, { Component } from 'react'
import styled from 'styled-components'

const BoldText = styled.p`
  color: red;
  font-size: 30px;
`

const DashedWrapper = styled.div`
  border: 2px dashed black;
`

export default class Foo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <DashedWrapper>
        <BoldText
          onClick={this.handleClick}
        >
          {this.props.children} clicked
          <span className="counter">{ this.state.counter }</span> times
        </BoldText>
      </DashedWrapper>
    )
  }
}
