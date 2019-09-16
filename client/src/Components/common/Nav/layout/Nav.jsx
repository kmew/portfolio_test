import React, { Component } from 'react'
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { withRouter } from 'react-router'
import Logo from '../elements/Logo'


const Container = styled.div`
  border-bottom: solid 3px #D03737;
`


const StyledNav = styled(Nav.Link)`
  cursor: pointer;
`


const UnderlineNav = styled.div`
  margin: auto auto;
  border: none;
  background: none;
  width: 40%;
  height: 5px;
  self-align: center;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
`


const MenuDiv = styled.div`
  :hover ${StyledNav} {
    font-weight: 600;
  }
  :hover ${UnderlineNav} {
    background: #D03737;
    transform: scaleX(1);
  }
`

const NavEN = {
  Menu1: 'Online Order',
  Menu2: 'Log In',
  Menu3: 'Sign Up',
}

const NavTH = {
  Menu1: 'สั่งซื้อออนไลน์',
  Menu2: 'เข้าสู่ระบบ',
  Menu3: 'ลงทะเบียน',
}


class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      NavShow: {
        Menu1: '',
        Menu2: '',
        Menu3: '',
      },
    }
  }


  componentDidMount() {
    const {
      match,
    } = this.props

    const {
      lang,
    } = match.params

    if (lang === 'th') {
      this.setState({
        NavShow: NavTH,
      })
    } else {
      this.setState({
        NavShow: NavEN,
      })
    }
  }

  handleOrder = () => {
    alert('ORDER!')
  }

  handleLogin = () => {
    alert('LOG IN!')
  }

  handleSignup = () => {
    alert('SIGN UP!')
  }

  render() {
    const {
      NavShow,
    } = this.state

    const {
      match,
      PageName,
    } = this.props

    const {
      lang,
    } = match.params

    return (
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          <Nav>
            <MenuDiv>
              <StyledNav onClick={this.handleOrder}>{NavShow.Menu1}</StyledNav>
              <UnderlineNav />
            </MenuDiv>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="mr-auto" />
            <Nav>
              <MenuDiv>
                <StyledNav onClick={this.handleLogin}>{NavShow.Menu2}</StyledNav>
                <UnderlineNav />
              </MenuDiv>
              <MenuDiv>
                <StyledNav onClick={this.handleSignup}>{NavShow.Menu3}</StyledNav>
                <UnderlineNav />
              </MenuDiv>
              <MenuDiv>
                {lang === 'th'
                    && <Nav.Link href={`${PageName}/en`}>EN</Nav.Link>}
                {lang === 'en'
                    && <Nav.Link href={`${PageName}/th`}>TH</Nav.Link>}
                <UnderlineNav />
              </MenuDiv>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    )
  }
}

export default withRouter(NavBar)
