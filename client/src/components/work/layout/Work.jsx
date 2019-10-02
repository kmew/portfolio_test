import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Head from '../elements/Head'
import ChipList from '../elements/ChipList'
import Gallery from '../elements/Gallery'


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const HeadWrapper = styled.div`
  top: 0px;
  position: relative;
`

const ChipWrapper = styled.div`
  top: 0px;
  position: relative;
`

const GalleryWrapper = styled.div`
  top: 0px;
  position: relative;
`

class Work extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
      open: false,
      smileColor: '#247BA0',
      chipList: [{
        label: null,
      }],
      imgList: [{
        txt: null,
        img: null,
      }],
    }
  }

  handleModalOpen = () => {
    this.setState({
      open: true,
    })
  }

  handleModalClose = () => {
    this.setState({
      open: false,
    })
  }

  handlePopClick = (event) => {
    const ranCol = Math.floor(Math.random() * 16777215).toString(16)
    this.setState({
      anchorEl: event.currentTarget,
      smileColor: ranCol,
    })
  }

  handlePopClose = () => {
    this.setState({
      anchorEl: null,
    })
  }

  async componentDidMount() {
    const imgTmpArray = []
    const chipTmpArray = []
    try {
      const res = await axios.get('http://localhost:4000/user/gallery/')
      Object.entries(res.data.result).forEach(([key, value]) => {
        imgTmpArray.push( value )
      })
      this.setState({
        imgList: imgTmpArray,
      })
    } catch (error) {
      console.log(error)
    }

    try {
      const res = await axios.get('http://localhost:4000/user/chip/')
      console.log(res.data.result)
        
      Object.entries(res.data.result).forEach(([key, value]) => {
        console.log("LABEL: ", value.label)
        chipTmpArray.push( value )
      })
      this.setState({
        chipList: chipTmpArray,
      })
      console.log()
      console.log(this.state.chipList)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const {
      anchorEl,
      open,
      smileColor,
      chipList,
      imgList,
    } = this.state

    return (
      <Wrapper>
        <HeadWrapper>
          <Head />
        </HeadWrapper>
        <ChipWrapper>
          <ChipList
            chipList={chipList}
            anchorEl={anchorEl}
            smileColor={smileColor}
            handlePopClick={this.handlePopClick}
            handlePopClose={this.handlePopClose}
          />
        </ChipWrapper>
        <GalleryWrapper>
          <Gallery
            imgList={imgList}
            open={open}
            handleModalOpen={this.handleModalOpen}
            handleModalClose={this.handleModalClose}
          />
        </GalleryWrapper>
      </Wrapper>
    )
  }
}

export default Work
