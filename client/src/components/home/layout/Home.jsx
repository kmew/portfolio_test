import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from '../elements/Logo'
import TextCard from '../elements/TextCard'


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const LogoWrapper = styled.div`
  top: 0px;
  position: relative;
`

const BottomDiv = styled.div`
  width: 100%;
  height: 100%;
  background: orange;
`

const CardWrapper = styled.div`
bottom: 10px;
position: absolute;
`


class Home extends Component {
  render() {
    return (
      <Wrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <CardWrapper>
          <TextCard />
        </CardWrapper>
      </Wrapper>
    )
  }
}

export default Home
