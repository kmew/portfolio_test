import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Background = styled.div`
    width: 100vw;
    height: fit-content;
    padding: 50px 0px 150px 0px;
    background: #247BA0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    width: 500px;
    padding: 20px 100px;
    background: #FFE066;
`

const Box = styled.div`
    padding: 3px;
`

const StyledLine = styled.hr`
    border: 2px solid black;
    margin: 10px 0px;
`

const Title = styled.p`
    padding: 5px;
    font-size: 28px;
    text-align: center;
    font-family: "Open Sans", sans-serif;
`

const Head = styled.p`
    font-size: 20px;
    font-family: "Open Sans", sans-serif;
`

const Body = styled.p`
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
`

const DbName = styled.p`
    font-size: 16px;
    margin: 5px;
    font-family: "Open Sans", sans-serif;
    text-decoration: underline;
`

const StyledLink = styled.p`
    cursor: pointer;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    text-decoration: underline;
    color: blue;
`

const StyledSelect = styled.select`
    cursor: pointer;
    background: rgba(169,169,169,0.5);
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
`

const StyledTable = styled.table`
    margin: 5px 0;
`

const BoxHead = styled.td`
    padding: 3px 5px;
    border: none;
    background: #FFA69E;
`

const BoxData = styled.td`
    padding: 3px 5px;
    border: none;
    background: #D2DAC5;
`

const StyledInput = styled.input`
    border: none;
    padding: 3px;
    margin: 5px 0px;
    width: 300px;
    background: white;
    font-size: 18px;
    font-family: "Open Sans", sans-serif;
`

const StyledField = styled.textarea`
    border: none;
    padding: 3px;
    margin: 5px 0px;
    width: 500px;
    min-height: 200px;
    background: white;
    font-size: 18px;
    font-family: "Open Sans", sans-serif;
`

const StyledButton = styled.button`
    cursor: pointer;
    border: none;
    margin: 5px 0px;
    padding: 3px;
    font-size: 18px;
    background: #70C1B3;
    font-family: "Open Sans", sans-serif;
`

class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            DB: null,
            API: null,
            ID: null,
            BODY: null,
            chipList: [{}],
            imgList: [{}],
            haveCookie: false,
            isLoading: true,
        }
    }

    async componentDidMount() {
        this.fetchData()
        const cookie = this.getCookie("username")
        if(cookie!=="") {
            this.setState({
                haveCookie: true
            })
        }
        this.setState({
            isLoading: false
        })
    }

    fetchData = async () => {
        try {
            const res = await axios.get('http://localhost:4000/admin/gallery/')
            this.setState({
                imgList: (res.data.result)
            })
        } catch (error) {
            console.log(error)
        }
    
        try {
            const res = await axios.get('http://localhost:4000/admin/chip/')
            this.setState({
              chipList: (res.data.result)
            })
          } catch (error) {
            console.log(error)
          }
    }

    getCookie = (cname) => {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length)
          }
        }
        return ""
    }

    handleSelectDB = (e) => {
        this.setState({
            DB: (e.target.value)
        })
    }

    handleSelectAPI = (e) => {
        this.setState({
            API: (e.target.value)
        })
    }

    handleSelectAPI = (e) => {
        this.setState({
            API: (e.target.value)
        })
    }

    handleFormID = (e) => {
        this.setState({
            ID: (e.target.value)
        })
    }

    handleFormBODY = (e) => {
        this.setState({
            BODY: (e.target.value)
        })
    }

    handleSubmit = async () => {
        const {
            DB,
            API,
            ID,
            BODY,
        } = this.state

        let res = null

        if (DB !== null) {
            if (API !== null) {
                try {
                    switch(API) {
                        case "ADD":
                            res = await axios.post(`http://localhost:4000/admin/${DB}/`, JSON.parse(BODY))
                            break
                        case "EDIT":
                            res = await axios.put(`http://localhost:4000/admin/${DB}/${ID}`, JSON.parse(BODY))
                            break
                        case "DELETE":
                            res = await axios.delete(`http://localhost:4000/admin/${DB}/${ID}`)
                            break
                        default:
                            break
                    }
                    console.log(res)
                    this.fetchData()
                } catch (error) {
                    console.log(error)
                }
            } else {
                console.log("MUST CHOOSE API")
            }
        } else {
            console.log("CHOOSE DB");
        }
    }

    handleGoBack = () => {
        document.cookie = `username=`;
        window.location.href='http://localhost:3000/'
    }

    handleGoLogin = () => {
        window.location.href='http://localhost:3000/Login'
    }

    render() {
        const {
            DB,
            API,
            ID,
            BODY,
            chipList,
            imgList,
            haveCookie,
            isLoading,
        } = this.state

        const DoneLogin = (
            <>
                <Box>
                    <Head>DB</Head>
                    <StyledSelect onChange={this.handleSelectDB}>
                        <option disabled selected>Select...</option>
                        <option>Chip</option>
                        <option>Gallery</option>
                    </StyledSelect>
                </Box>
                <Box>
                    <Head>API</Head>
                    <StyledSelect onChange={this.handleSelectAPI}>
                        <option disabled selected>Select...</option>
                        <option>ADD</option>
                        <option>EDIT</option>
                        <option>DELETE</option>
                    </StyledSelect>
                </Box>
                {(API !== "ADD") && <Box>
                    <Head>ID</Head>
                    <StyledInput placeholder="ID..." onChange={this.handleFormID} value={ID} />
                </Box>}
                {(API !== "DELETE") && <Box>
                    <Head>BODY</Head>
                    <StyledField placeholder="Insert JSON BODY..." onChange={this.handleFormBODY} value={BODY} />
                </Box>}
                <Box>
                    <StyledButton onClick={this.handleSubmit}>SUBMIT</StyledButton>
                </Box>
                <Box>
                    <StyledLine />
                    <Head>DATA</Head>
                    {(DB === "Chip") && <div>
                        <DbName>CHIP</DbName>
                        <StyledTable>
                            <tr>
                                <BoxHead><Body>LABEL</Body></BoxHead>
                                <BoxHead><Body>ICON</Body></BoxHead>
                                <BoxHead><Body>ID</Body></BoxHead>
                            </tr>
                            {
                                chipList.map((aChip) => (
                                    <tr>
                                        <BoxData>
                                            <Body>{aChip.label}</Body>
                                        </BoxData>
                                        <BoxData>
                                            <Body>{aChip.icon1}</Body>
                                        </BoxData>
                                        <BoxData>
                                            <Body>{aChip._id}</Body>
                                        </BoxData>
                                    </tr>
                                ))
                            }
                        </StyledTable>
                    </div>}
                    {(DB === "Gallery") && <div>
                        <DbName>GALLERY</DbName>
                        <StyledTable>
                            <tr>
                                <BoxHead><Body>TEXT</Body></BoxHead>
                                <BoxHead><Body>URL</Body></BoxHead>
                                <BoxHead><Body>ID</Body></BoxHead>
                            </tr>
                            {
                                    imgList.map((aImg) => (
                                        <tr>
                                            <BoxData>
                                                <Body>{aImg.txt}</Body>
                                            </BoxData>
                                            <BoxData>
                                                <Body>{aImg.img}</Body>
                                            </BoxData>
                                            <BoxData>
                                                <Body>{aImg._id}</Body>
                                            </BoxData>
                                        </tr>
                                    ))
                            }
                        </StyledTable>
                    </div>}
                </Box>
            </>
        )

        const NotLogin = (
            <>
                <StyledLink onClick={this.handleGoLogin}>GO TO LOGIN</StyledLink>
            </>
        )

        const StillLoading = (
            <>
                <Body>LOADING...</Body>
            </>
        )

        return (
            <Background>
                <Container>
                    <Box>
                        <Title>ADMIN</Title>
                    </Box>
                    {(isLoading&&StillLoading)}
                    {(!isLoading&&haveCookie&&DoneLogin)}
                    {(!isLoading&&!haveCookie&&NotLogin)}
                    <div>
                        <StyledLine />
                        <StyledLink onClick={this.handleGoBack}>BACK TO MAIN PAGE</StyledLink>
                    </div>
                </Container>
            </Background>
        )
    }
}
 
export default Admin;