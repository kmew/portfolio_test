import React, { Component } from 'react'
import styled from 'styled-components'

const HeadContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 20px;
  border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 425px) {
    margin-top: 45px;
  }
`

const HeadBox = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(169,169,169,0.5);
  padding: 10px 20px;
  border-radius: 10px;

  @media (max-width: 320px) {
    flex-direction: column;
  }
`

const TeamBox = styled.div`
  text-align: right;
`

const MemberBox = styled.div`
  text-align: left;
`

const Text1 = styled.p`
  color: black;
  font-size: 32px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
`

const Text2 = styled.p`
  color: black;
  font-size: 32px;
  font-family: "Open Sans", sans-serif;
  font-weight: normal;
`

export default class ChooseboxHead extends Component {
  render() {
    const {
      HeadText,
    } = this.props
    return (
      <HeadContainer>
        <HeadBox>
          <TeamBox>
            {/* <Text1>{HeadText.Text1}</Text1> */}
            <Text1>Team</Text1>
          </TeamBox>

          <MemberBox>
            {/* <Text2>{HeadText.Text2}</Text2> */}
            <Text2>Members</Text2>
          </MemberBox>
        </HeadBox>
      </HeadContainer>
    )
  }
}
