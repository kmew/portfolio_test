import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
`

const Box = styled.div`
    margin: 5px;
`

const HeadF = styled.p`
    font-size: 20px;
    font-family: "Open Sans", sans-serif;
`

const LabelF = styled.label`
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
`

const StyledInput = styled.input`
    margin: 5px;
    font-family: "Open Sans", sans-serif;
    border: 1px solid;
    border-radius: 5px;
`

const StyledButton = styled.button`
    margin: 5px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background: DarkSlateBlue;
    color: white;
`

class Login extends Component {
    constructor(props) {
      super(props)
      this.state = {
          username: null,
          password: null,
      }
    }

    handleSubmit = async () => {
        const {
            username,
            password,
        } = this.state
        console.log('username ' + this.state.username)
        console.log('password ' + this.state.password)
        try {
            const res = await axios.post('http://localhost:4000/auth/login/', {
                                                                                username: {username},
                                                                                password: {password}})
            console.log(res.data)
        } catch(error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() { 
        return (
            <Container>
                <HeadF>Login</HeadF>
                <Box>
                    <LabelF>username</LabelF>
                    <StyledInput
                        type="text"
                        id="username"
                        name="username"
                        onChange={this.handleChange}
                    />
                </Box>
                <Box>
                    <LabelF>password</LabelF>
                    <StyledInput
                        type="text"
                        id="password"
                        name="password"
                        onChange={this.handleChange}
                    />
                </Box>
                <StyledButton type="submit" onClick={this.handleSubmit} >Login</StyledButton>
                < br/>
                <a href="/Register">Register</a>
            </Container>
        )
    }
}
 
export default Login;