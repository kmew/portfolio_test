import React from 'react'
import styled from 'styled-components'

const LogoImg = styled.img`
    height: 30px;
    width: auto;
    alt: "Logo";
    cursor: pointer;
`

function Logo() {
  return (
    <>
      <LogoImg src="https://cdn.worldvectorlogo.com/logos/slack.svg" />
    </>
  )
}

export default Logo
