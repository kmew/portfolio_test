import React, { Component } from 'react'
import styled from 'styled-components'
import Designbox from './Designbox'

const DataHeaderBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
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
