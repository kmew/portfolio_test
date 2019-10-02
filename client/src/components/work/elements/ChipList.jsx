import React, { Component } from 'react'
import styled from 'styled-components'

import Chip from '@material-ui/core/Chip'
import Popover from '@material-ui/core/Popover'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import Icon from '@material-ui/core/Icon'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const ChipBox = styled.div`
    margin-top: 50px;
    max-width: 40%;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid #D2DAC5;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const PopUp = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  padding: 5px;
`


class ChipList extends Component {
  render() {
    const {
      anchorEl,
      chipList,
      smileColor,
      handlePopClick,
      handlePopClose,
    } = this.props

    const open = Boolean(anchorEl)

    const chipArray = []
    Object.entries(chipList).forEach(([key, value]) => {
      chipArray.push(
        <Chip
          key={key}
          style={{ margin: '5px' }}
          // icon={<CodeIcon style={{ color: '#70C1B3' }} />}
          icon={<Icon style={{ color: '#70C1B3' }} >{value.icon1}</Icon>}
          label={value.label}
          clickable
          color="#247BA0"
          onDelete={handlePopClick}
          // deleteIcon={<AddCircleOutlineIcon style={{ color: '#FFA69E' }} />}
          deleteIcon={<Icon style={{ color: '#FFA69E' }} >add_circle_outline</Icon>}
        />
      )
    })

    return (
      <Wrapper>
        <ChipBox>
          {chipArray}
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <PopUp>
              <EmojiEmotionsIcon style={{ color: `${smileColor}` }} />
            </PopUp>
          </Popover>
        </ChipBox>
      </Wrapper>
    )
  }
}

export default ChipList
