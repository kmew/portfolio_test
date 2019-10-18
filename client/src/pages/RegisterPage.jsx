import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
`

const Box = styled.div`
    margin: 5px;
`

const DialogBox = styled.div`
    margin: 1px solid;
    margin: 5px;
`

const HeadF = styled.p`
    font-size: 20px;
    font-family: "Open Sans", sans-serif;
`

const Dialog = styled.p`
    font-size: 14px;
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
    cursor: pointer;
    margin: 5px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background: DarkSlateBlue;
    color: white;
`

class Register extends Component {
    constructor(props) {
      super(props)
      this.state = {
          username: null,
          password: null,
          isLoading: true,
      }
    }

    componentDidMount() {
        this.setState({
            isLoading: false
        })
    }

    handleSubmit = async () => {
        const {
            username,
            password,
        } = this.state
        console.log('username ' + username)
        console.log('password ' + password)
        try {
            const res = await axios.post('http://localhost:4000/auth/regist/', {
                                                                                username: username,
                                                                                password: password})
            if(res.data === "Success") {
                window.location.href='http://localhost:3000/Login'
                this.setState({status: false})
            } else {
                this.setState({status: true})
                console.log(res.data)
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
            isLoading,
        } = this.state

        const DoneLoading = (
            <>
                <HeadF>Register</HeadF>
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
                <StyledButton type="submit" onClick={this.handleSubmit}>Register</StyledButton>
                < br/>
                <a href="/Login">Login</a>
                <br />
                <a href="/">Back</a>
                {(status)&&<DialogBox>
                    <Dialog>FAIL TO REGISTER</Dialog>
                </DialogBox>}
            </>
        )
    
        const StillLoading = (
            <>
                <Dialog>LOADING...</Dialog>
            </>
        )

        return (
            <Container>
                {(isLoading&&StillLoading)}
                {(!isLoading&&DoneLoading)}
            </Container>
        )
    }
}
 
export default Register;