import React, { Component } from "react"
import * as WebsiteText from "../../copy"
import classroomPic from "../../images/classroom-games.jpeg"
import senLogo from "../../images/SEN-logo.png"

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="imageAndText">
          <div className="imageNextToText">
            <img
              src={classroomPic}
              alt="SEN"
              className="img-responsive"
              id="classroomGamesPhoto"
            />
          </div>
          <div className="textNextToImage">
            {WebsiteText.default.home
              .find(o => o.text === "About")
              .content.map((paragraphs, i) => (
                <p key={i}>{paragraphs}</p>
              ))}
          </div>
        </div>
        <img src={senLogo} alt="SEN" className="img-responsive" />
      </React.Fragment>
    )
  }
}

export default About
