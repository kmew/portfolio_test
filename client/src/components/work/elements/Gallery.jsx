import React, { Component } from 'react'
import styled from 'styled-components'

import Modal from '@material-ui/core/Modal';

const Wrapper = styled.div`
    margin-top: 40px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const GalleryBox = styled.div`
    width: 670px;
    border-radius: 10px;
    border: 1px solid #D2DAC5;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px;
    @media (max-width: 768px) {
      width: 520px;
    }
    @media (max-width: 425px) {
      width: 350px;
    }
    @media (max-width: 425px) {
      width: 220px;
    }
    @media (max-width: 320px) {
      width: 180px;
    }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`

const Overlay = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: none;
  background: rgba(80,81,79,0.9);
  border-radius: 10px;
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
`

const ImgBox = styled.div`
    display: block;
    position: relative;
    width: 200px;
    height: 200px;
    background-size:cover;
    background-position:center;
    margin: 10px;
    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
    }
    :hover ${Overlay} {
      display: flex;
    }
`

const OverlayButton = styled.button`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #FFA69E;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid white;
  background: none;
  padding: 10px;
  margin-top: 10px;
`

const OverlayText = styled.p`
  font-family: 'Open Sans', sans-serif;
  color: rgba(169,169,169);
  font-size: 14px;
`

const StyledModal = styled.div`
  position: absolute;
  width: 400px;
  height: 300px;
  background: rgba(169,169,169);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50 + rand();
  left: 50 + rand();
`

const StyledP = styled.h1`
  font-family: 'Open Sans', sans-serif;
`

class Gallery extends Component {
  render() {
    const {
      open,
      imgList,
      handleModalOpen,
      handleModalClose,
    } = this.props

    const imgArray = []
    Object.entries(imgList).forEach(([key, value]) => {
      imgArray.push(
        <ImgBox>
          <Overlay>
            <OverlayText>{value.txt}</OverlayText>
            <OverlayButton onClick={handleModalOpen}>LINK</OverlayButton>
          </Overlay>
          <Img src={value.img} alt={key} />
        </ImgBox>
      )
    })

    return (
      <Wrapper>
        <GalleryBox>
          {imgArray}
          <Modal
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            disableEnforceFocus
            disableAutoFocus
            open={open}
            onClose={handleModalClose}
          >
            <StyledModal>
              <StyledP>TO BE CONTINUE...</StyledP>
            </StyledModal>
          </Modal>
        </GalleryBox>
      </Wrapper>
    )
  }
}

export default Gallery
