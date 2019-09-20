import React, { Component } from 'react'
import styled from 'styled-components'

import Chip from '@material-ui/core/Chip'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CodeIcon from '@material-ui/icons/Code'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const ChipBox = styled.div`
    margin-top: 30px;
    max-width: 40%;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid #D2DAC5;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`


class ChipList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
    }
  }

    handleClick(event) {
      this.setState({
        anchorEl: event.currentTarget,
      })
    }

    handleClose() {
      this.setState({
        anchorEl: null,
      })
    }

    render() {
      const {
        chipList,
      } = this.props

      const open = Boolean(this.state.anchorEl);

      const chipArray = []
      Object.entries(chipList).forEach(([key, value]) => {
        chipArray.push(
          <Chip
            key={key}
            style={{ margin: '5px' }}
            icon={<CodeIcon style={{ color: '#FFA69E' }} />}
            label={value}
            clickable
            color="#247BA0"
            onDelete={this.handleClick}
            deleteIcon={<AddCircleOutlineIcon style={{ color: '#FFA69E' }} />}
          />
        )
      })

      return (
        <Wrapper>
          <ChipBox>
            {chipArray}
            <Popover
              open={open}
              anchorEl={this.state.anchorEl}
              onClose={this.handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              TEST
            </Popover>
          </ChipBox>
        </Wrapper>
      )
    }
}

{/* <Chip
key={data.key}
style={{margin: '5px'}}
icon={<CodeIcon style={{ color: '#FFA69E' }} />}
label={data.value}
clickable
color="#247BA0"
onDelete={this.handleDelete}
deleteIcon={<AddCircleOutlineIcon style={{ color: '#FFA69E' }} />}
/> */}

export default ChipList
