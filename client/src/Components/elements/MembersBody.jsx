import React, { Component } from "react";
import styled from "styled-components";
import MembersDesignbox from "./MembersDesignbox";

const DataHeaderBox = styled.div`
  width: 100%;
  height: 500px;
  padding: 5px;
  /* box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.5), 0 5px 12px 0 rgba(0, 0, 0, 0.5); */
  /* border: 0.5px solid; */

  /* margin-top: 50px;
  margin-bottom: 10px;
  margin-right: 5px;
  margin-left: 5px; */

  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 550px;
  }
`

export default class ChooseboxBody extends Component {
  constructor(props) {
    super(props)
    this.state = {value: 0}
  }

  handleSwipe = event => { 
    this.setState({
      [event.onSwiped]: event.target.value
    })
  }

  render() {
    const {
      BodyText,
    } = this.props

    return (
      <DataHeaderBox>
        <MembersDesignbox BodyText={BodyText} />
      </DataHeaderBox>
    );
  }
}

// import React, { Component } from 'react';

// //Libs
// import styled from 'styled-components';
// //elements
// import MembersDesignbox from "./MembersDesignbox";


// const AppWrapper = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// export default class MembersBody extends Component {
//   render() {
//     return (
//       <AppWrapper>
//         <MembersDesignbox/>
//       </AppWrapper>
//     )
//   }
// }
