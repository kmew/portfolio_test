import React, { Component, useState } from 'react'
import styled from 'styled-components'

import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person'
import WorkIcon from '@material-ui/icons/Work'
import MailIcon from '@material-ui/icons/Mail'


const Container = styled.div`
    margin: 100px 0 0 10px;
    width: fit-content;
    height: fit-content;
    position: fixed;
`


const SideNav = styled.div`
    position: fixed;
    width: ${(props) => (props.open ? '170px' : '85px')};
    height: 425px;
    background: none;
    border: 3px solid #50514F;
    opacity: 50%;
    display: flex;
    flex-direction: column;
`


const NavList = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    color: #247BA0;
    text-align: center;
    padding: 5px;
`


const MenuBox = styled.div`
    width: ${(props) => (props.open ? '150px' : '65px')};
    height: 65px;
    cursor: pointer;
    padding: 5px;
    background: #50514F;
    margin: 5px;
    :hover {
        background: none;
    }
    :hover ${NavList} {
        background: #50514F;
    }
`


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

    handleDrawer = () => {
      const {
        open,
      } = this.state
      this.setState({
        open: !open,
      })
    }

    render() {
      const {
        open,
      } = this.state

      const {
        scrollToMyRef,
      } = this.props

      const {
        executeScroll1,
        executeScroll2,
        executeScroll3,
        executeScroll4,
      } = scrollToMyRef

      console.log(executeScroll1)

      return (
        <Container>
          <SideNav open={open}>
            <MenuBox
              onClick={this.handleDrawer}
              open={open}
            >
              <NavList href="/">
                <MenuIcon style={{ fontSize: 30, color: '#FFA69E' }} />
              </NavList>
            </MenuBox>
            <MenuBox
              onClick={executeScroll1}
              open={open}
            >
              <NavList href="#field1">
                {!open && (
                  <HomeIcon style={{ fontSize: 30 }} />
                )}
                {open && (
                  'Home'
                )}
              </NavList>
            </MenuBox>
            <MenuBox
              onClick={executeScroll2}
              open={open}
            >
              <NavList href="#field2">
                {!open && (
                  <PersonIcon style={{ fontSize: 30 }} />
                )}
                {open && (
                  'About'
                )}
              </NavList>
            </MenuBox>
            <MenuBox
              onClick={executeScroll3}
              open={open}
            >
              <NavList href="#field3">
                {!open && (
                  <WorkIcon style={{ fontSize: 30 }} />
                )}
                {open && (
                  'Work'
                )}
              </NavList>
            </MenuBox>
            <MenuBox
              onClick={executeScroll4}
              open={open}
            >
              <NavList href="#field4">
                {!open && (
                  <MailIcon style={{ fontSize: 30 }} />
                )}
                {open && (
                  'Contact'
                )}
              </NavList>
            </MenuBox>
          </SideNav>
        </Container>
      )
    }
}

export default Navbar
