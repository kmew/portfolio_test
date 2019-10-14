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

const LabelF = styled.p`
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
`

const StyledInput = styled.input`
    font-family: "Open Sans", sans-serif;
`

const StyledButton = styled.button`
`

class Login extends Component {
    state = {  }
    render() { 
        return (
            <Container>
                <HeadF>Login</HeadF>
                <form action="/routes/api/auth/login" method="POST">
                    <Box>
                        <LabelF>EMAIL</LabelF>
                        <StyledInput
                            type="text"
                            id="email"
                            name="email"
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
                    <StyledButton type="submit">Login</StyledButton>
                </form>
                <a href="/Register">Register</a>
            </Container>
        )
    }
}
 
export default Login;