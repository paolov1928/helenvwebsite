import React, { Component } from "react"
import * as WebsiteText from "../../copy"
import dyslexiaPic from "../../images/dyslexia.png"

class Assesments extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="imageAndText">
          <div className="textNextToImage">
            {WebsiteText.default.home
              .find(o => o.text === "Assessments")
              .content.map((paragraphs, i) => (
                <p key={i}>{paragraphs}</p>
              ))}
          </div>
          <div className="imageNextToText">
            <img src={dyslexiaPic} alt="SEN" className="img-responsive" />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Assesments
