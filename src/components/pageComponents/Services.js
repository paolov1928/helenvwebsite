import React, { Component } from "react"
import * as WebsiteText from "../../copy"
import classroomPic from "../../images/classroom-image.jpeg"

class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="imageAndText">
          <div className="imageNextToText">
            <img src={classroomPic} alt="SEN" className="img-responsive" />
          </div>
          <div className="textNextToImage">
            {WebsiteText.default.home
              .find(o => o.text === "Services for Schools")
              .content.map((paragraphs, i) => (
                <p key={i}>{paragraphs}</p>
              ))}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Services
