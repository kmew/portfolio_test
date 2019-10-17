import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
`

const Box = styled.div`
    margin: 5px;
`

const DialogBox = styled.div`
    border-top: 1px solid;
    padding-top: 5px;
    margin: 5px;
`

const HeadF = styled.p`
    font-size: 20px;
    font-family: "Open Sans", sans-serif;
`

const Dialog = styled.p`
    font-size: 10px;
    color: red;
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
          status: false,
          msg: null,
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
                                                                                username: username,
                                                                                password: password})
            if(res.data === "Success") {
                window.location.href='http://localhost:3000/Admin'
                this.setState({status: false})
            } else {
                console.log(res.data)
                this.setState({
                    status: true,
                    msg: res.data,
                })
            }
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
        const {
            status,
            msg,
        } = this.state
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
                {(status)&&<DialogBox>
                    <Dialog>{msg}</Dialog>
                </DialogBox>}
            </Container>
        )
    }
}
 
export default Login;