import React, { Component } from 'react'
import styled from 'styled-components'

import Chip from '@material-ui/core/Chip'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CodeIcon from '@material-ui/icons/Code'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const ChipBox = styled.div`
    margin-top: 30px;
    max-width: 25%;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #D2DAC5;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`


class ChipList extends Component {
    state = { }

    handleDelete = () => {
    }

    render() {
      return (
        <Wrapper>
          <ChipBox>
            <Chip
              icon={<CodeIcon style={{ color: '#FFA69E' }} />}
              label="REACT"
              clickable
              color="#247BA0"
              onDelete={this.handleDelete}
              deleteIcon={<AddCircleOutlineIcon style={{ color: '#FFA69E' }} />}
            />
            <Chip
              icon={<CodeIcon style={{ color: '#FFA69E' }} />}
              label="MERN"
              clickable
              color="#247BA0"
              onDelete={this.handleDelete}
              deleteIcon={<AddCircleOutlineIcon style={{ color: '#FFA69E' }} />}
            />
            <Chip
              icon={<CodeIcon style={{ color: '#FFA69E' }} />}
              label="FRONT-END"
              clickable
              color="#247BA0"
              onDelete={this.handleDelete}
              deleteIcon={<AddCircleOutlineIcon style={{ color: '#FFA69E' }} />}
            />
            <Chip
              icon={<CodeIcon style={{ color: '#FFA69E' }} />}
              label="STYLED-COMPONENT"
              clickable
              color="#247BA0"
              onDelete={this.handleDelete}
              deleteIcon={<AddCircleOutlineIcon style={{ color: '#FFA69E' }} />}
            />
            <Chip
              icon={<CodeIcon style={{ color: '#FFA69E' }} />}
              label="RESPONSIVE"
              clickable
              color="#247BA0"
              onDelete={this.handleDelete}
              deleteIcon={<AddCircleOutlineIcon style={{ color: '#FFA69E' }} />}
            />
            <Chip
              icon={<CodeIcon style={{ color: '#FFA69E' }} />}
              label="# INIT"
              clickable
              color="#247BA0"
              onDelete={this.handleDelete}
              deleteIcon={<AddCircleOutlineIcon style={{ color: '#FFA69E' }} />}
            />
          </ChipBox>
        </Wrapper>
      )
    }
}

export default ChipList
