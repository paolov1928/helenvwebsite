import React, { Component } from "react"
import * as WebsiteText from "../../copy"
import dyslexiaPic from "../../images/dyslexia.png"

class Welcome extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="imageAndText">
          <div className="imageNextToText">
            <img src={dyslexiaPic} alt="SEN" className="img-responsive" />
          </div>
          <div className="textNextToImage">
            {WebsiteText.default.home
              .find(o => o.text === "Welcome")
              .content.map((paragraphs, i) => (
                <p key={i}>{paragraphs}</p>
              ))}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Welcome
