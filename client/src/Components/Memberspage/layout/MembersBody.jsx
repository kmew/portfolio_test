import React, { Component } from "react";
import styled from "styled-components";
import MembersDesignbox from "../elements/MembersDesignbox"

const DataHeaderBox = styled.div`
  width: 100%;
  height: 500px;
  padding: 5px;

  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 550px;
  }
`

export default class ChooseboxBody extends Component {
  constructor(props) {
    super(props)
    this.state = {value: 0}
  }

  handleSwipe = event => { 
    this.setState({
      [event.onSwiped]: event.target.value
    })
  }

  render() {
    const {
      BodyText,
    } = this.props

    return (
      <DataHeaderBox>
        <MembersDesignbox BodyText={BodyText} />
      </DataHeaderBox>
    );
  }
}

