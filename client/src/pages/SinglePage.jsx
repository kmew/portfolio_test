import React, { useRef } from 'react'
import styled from 'styled-components'

import Logo from '../components/logo/layout/Logo'
import Navbar from '../components/nav/layout/Navbar'
import Home from '../components/home/layout/Home'
import Contact from '../components/contact/layout/Contact'


const Container = styled.div`
`


const HomeBlock = styled.div`
  width: 100%;
  height: 950px;
  background: green;
  position: relative;
`

const AboutBlock = styled.div`
  width: 100%;
  height: 600px;
  background: #F25F5C;
  position: relative;
`

const WorkBlock = styled.div`
  width: 100%;
  height: 600px;
  background: #247BA0;
  position: relative;
`

const ContactBlock = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
`

const Space = styled.div`
  width: 100%;
  height: 440px;
  background: none;
  position: relative;
`

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const SinglePage = () => {
  const HomeRef = useRef(null)
  const AboutRef = useRef(null)
  const WorkRef = useRef(null)
  const ContactRef = useRef(null)

  const NavRef = { HomeRef, AboutRef, WorkRef, ContactRef }

  return (
    <Container>
      <Navbar scrollToRef={scrollToRef} NavRef={NavRef} />
      <HomeBlock ref={HomeRef}>
        <Logo />
        <Home />
      </HomeBlock>
      <AboutBlock ref={AboutRef} />
      <WorkBlock ref={WorkRef} />
      <ContactBlock ref={ContactRef}>
        <Contact />
      </ContactBlock>
      <Space />
    </Container>
  )
}

export default SinglePage
