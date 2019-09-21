import React, { Component, useRef, useEffect } from 'react'
import styled from 'styled-components'


//elements
import Navbar from '../Components/Nav/layout/Navbar'
import Memberspage from './Memberspage'
import MembersBody from '../Components/Memberspage/layout/MembersBody'
import ContactPage from './ContactPage';



const Container = styled.div`
`


const FieldRow1 = styled.div`
  width: 100%;
  height: 600px;
  background: #70C1B3;
`

const FieldRow2 = styled.div`
  width: 100%;
  height: 600px;
  background: #F25F5C;
`

const FieldRow3 = styled.div`
  width: 100%;
  height: 600px;
  background: #FFE066;
`

const FieldRow4 = styled.div`
  width: 100%;
  height: 600px;
  background: #FFA69E;
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
      <Navbar scrollToMyRef={executeScroll} />
      <FieldRow1 ref={myRef1} />
      <FieldRow2 ref={myRef2} >
        <Memberspage/>
      </FieldRow2>
      <FieldRow3 ref={myRef3}>
        {/* <MembersBody /> */}
      </FieldRow3>
      <FieldRow4 ref={myRef4}>
        <ContactPage/>
      </FieldRow4>
    </Container>
  )
}

export default SinglePage
