import React, { Component, useRef, useEffect } from 'react'
import styled from 'styled-components'

import Logo from '../components/logo/layout/Logo'
import Navbar from '../components/nav/layout/Navbar'
import Home from '../components/home/layout/Home'
import Contact from '../components/contact/layout/Contact'


const Container = styled.div`
`


const FieldRow1 = styled.div`
  width: 100%;
  height: 950px;
  background: none;
  position: relative;
`

const FieldRow2 = styled.div`
  width: 100%;
  height: 600px;
  background: #F25F5C;
  position: relative;
`

const FieldRow3 = styled.div`
  width: 100%;
  height: 600px;
  background: #247BA0;
  position: relative;
`

const FieldRow4 = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
`

const FieldRow5 = styled.div`
  width: 100%;
  height: 430px;
  background: none;
  position: relative;
`

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const SinglePage = () => {
  const myRef1 = useRef(null)
  const myRef2 = useRef(null)
  const myRef3 = useRef(null)
  const myRef4 = useRef(null)
  const executeScroll1 = () => scrollToRef(myRef1)
  const executeScroll2 = () => scrollToRef(myRef2)
  const executeScroll3 = () => scrollToRef(myRef3)
  const executeScroll4 = () => scrollToRef(myRef4)

  const executeScroll = { executeScroll1, executeScroll2, executeScroll3, executeScroll4 }

  return (
    <Container>
      <Logo />
      <Navbar scrollToMyRef={executeScroll} />
      <FieldRow1 ref={myRef1}>
        <Home />
      </FieldRow1>
      <FieldRow2 ref={myRef2} />
      <FieldRow3 ref={myRef3} />
      <FieldRow4 ref={myRef4}>
        <Contact />
      </FieldRow4>
      <FieldRow5>
        <Home />
      </FieldRow5>
    </Container>
  )
}

export default SinglePage
