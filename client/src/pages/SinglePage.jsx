import React, { useRef } from 'react'
import styled from 'styled-components'

import Navbar from '../components/Nav/layout/Navbar'
import Home from '../components/home/layout/Home'
import About from '../components/about/layout/About'
import Work from '../components/work/layout/Work'
import Contact from '../components/contact/layout/Contact'
import Background from '../components/background/elements/Background'


const Container = styled.div`
`


const Content = styled.div`
`


const HomeBlock = styled.div`
  width: 100%;
  height: 100vh;
  background: none;
  position: relative;
`

const AboutBlock = styled.div`
  width: 100%;
  height: fit-content;
  background: #F25F5C;
  position: relative;
  border: 1px solid purple;
`

const WorkBlock = styled.div`
  width: 100%;
  min-height: 55vh;
  background: #247BA0;
  position: relative;
  padding-bottom: 70px;
`

const ContactBlock = styled.div`
  width: 100%;
  height: 55vh;
  position: relative;
  @media (max-width: 425px) {
    height: 65vh;
  }
`

const Space = styled.div`
  width: 100%;
  height: 45vh;
  background: none;
  position: relative;
  @media (max-width: 425px) {
    height: 35vh;
  }
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
      <Background />
      <Content>
        <HomeBlock ref={HomeRef}>
          <Home />
        </HomeBlock>
        <AboutBlock ref={AboutRef}>
          <About />
        </AboutBlock>
        <WorkBlock ref={WorkRef}>
          <Work />
        </WorkBlock>
        <ContactBlock ref={ContactRef}>
          <Contact />
        </ContactBlock>
        <Space />
      </Content>
    </Container>
  )
}

export default SinglePage
