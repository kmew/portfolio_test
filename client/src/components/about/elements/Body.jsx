import React, { Component } from 'react'
import styled from 'styled-components'
import Designbox from './Designbox'

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

export default class MembersBody extends Component {
  render() {
    const {
      BodyText,
    } = this.props

    return (
      <DataHeaderBox>
        <Designbox BodyText={BodyText} />
      </DataHeaderBox>
    )
  }
}
