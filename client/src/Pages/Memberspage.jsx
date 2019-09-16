import React, { Component } from "react";
import styled from "styled-components";
import Nav from '../Components/common/Nav/layout/Nav'
import MembersHead from "../Components/elements/MembersHead";
import MembersBody from "../Components/elements/MembersBody";

const Body = styled.div`
  height: 600px;
  margin: 0;
  padding: 0;
  font-family: san-serif;
  display: flex
  justify-content: center;
  flex-direction: column;
  /* border: 1px solid; */

  @media (max-width: 768px) {
    width: 100%;
    max-height: 100%;
  }
`

const Main = styled.main`
  margin-top: 0px;
`

const ChooseEN = {
  Text1: 'Team',
  Text2: 'Members',
  Text3: 'TISSATAT C.',
  Text4: 'FullStack Developer',
  Text5: 'TANTIKORN P.',
  Text6: 'FullStack Developer',
  Text7: 'READ INFORMATION',
}

const ChooseTH = {
  Text1: 'แนะนำ',
  Text2: 'ทีม',
  Text3: 'ทิสทัต เจริญชัย',
  Text4: 'นักพัฒนามากความสามารถมีความเชี่ยวชาญทั้งหน้าบ้าน และหลังบ้าน',
  Text5: 'ตันติกร ภูประเสริฐ',
  Text6: 'นักพัฒนามากความสามารถมีความเชี่ยวชาญหน้าบ้าน',
  Text7: 'อ่านข้อมูลเพิ่ม',
}

class Members extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ChooseShow: {
        Text1: '',
        Text2: '',
        Text3: '',
        Text4: '',
        Text5: '',
        Text6: '',
        Text7: '',
      },
    }
  }


  componentDidMount() {
    const {
      match,
    } = this.props

    const {
      lang,
    } = match.params

    if (lang === 'th') {
      this.setState({
        ChooseShow: ChooseTH,
      })
    } else {
      this.setState({
        ChooseShow: ChooseEN,
      })
    }
  }

  render() {
    const {
      ChooseShow,
    } = this.state

    const {
      Text1,
      Text2,
      Text3,
      Text4,
      Text5,
      Text6,
      Text7,
    } = ChooseShow

    const HeadText = { Text1, Text2 }
    const BodyText = { Text3, Text4, Text5, Text6, Text7 }

    return (
      <div style={{ height: "100%" }}>
        <div>
          {/* <Nav PageName="/Memberspage"/> */}

          <Main>
            <Body>
              <MembersHead HeadText={HeadText} />
              <MembersBody BodyText={BodyText} />
            </Body>
          </Main>
        </div>
      </div>
    );
  }
}

export default Members;
