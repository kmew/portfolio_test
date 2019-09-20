import React, { Component } from 'react'
import styled from 'styled-components'

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
      chipList: {
        chip1: 'REACT',
        chip2: 'MERN',
        chip3: 'FRONT-END',
        chip4: 'STYLED-COMPONENT',
        chip5: 'RESPONSIVE',
        chip6: '# INIT',
      },
      imgList: {
        card1: {
          img: 'https://wallpaperaccess.com/full/335893.jpg',
          txt: 'ROCKET',
        },
        card2: {
          img: 'https://wallpaperaccess.com/full/336022.jpg',
          txt: 'TROPICAL',
        },
        card3: {
          img: 'https://wallpaperaccess.com/full/336023.jpg',
          txt: 'METRO',
        },
        card4: {
          img: 'https://wallpaperaccess.com/full/335910.jpg',
          txt: 'CAVE',
        },
        card5: {
          img: 'https://wallpaperaccess.com/full/181658.jpg',
          txt: 'VENICE',
        },
      },
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
