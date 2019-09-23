import React, { Component } from 'react'
import styled from 'styled-components'

const TextBox = styled.div`
  width: 100%;
  max-height: 100%;
  text-align: left;
  margin-top: 20px;
  font-family: "Open Sans", sans-serif;
`

class Box extends Component {
  render() {
    return (
      <TextBox>
          A portfolio is a grouping of financial assets such as stocks, bonds,
          commodities, currencies and cash equivalents, as well as their fund
          counterparts, including mutual, exchange-traded and closed funds. A
          portfolio can also consist of non-publicly tradable securities, like
          real estate, art, and private investments.
      </TextBox>
    )
  }
}

export default Box
