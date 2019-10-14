import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
`

const Box = styled.div`
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
    font-family: "Open Sans", sans-serif;
`

const StyledButton = styled.button`
`

class Register extends Component {
    state = {  }
    render() { 
        return (
            <Container>
                <HeadF>Register</HeadF>
                <form action="/routes/api/auth/regist" method="POST">
                    <Box>
                        <LabelF>NAME</LabelF>
                        <StyledInput
                            type="text"
                            id="username"
                            name="username"
                        />
                    </Box>
                    <Box>
                        <LabelF>password</LabelF>
                        <StyledInput
                            type="text"
                            id="password"
                            name="password"
                        />
                    </Box>
                    <StyledButton type="submit">Register</StyledButton>
                </form>
                <a href="/Login">Login</a>
            </Container>
        )
    }
}
 
export default Register;