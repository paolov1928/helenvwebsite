import React, { Component } from "react"
import * as WebsiteText from "../copy"

class Logo extends Component {
  render() {
    return (
      <div className="NavBarLogoContainer">
        <div className="NavBarTitle">
          <b>{WebsiteText.default.navBar.title}</b>
        </div>
        <div className="NavBarTitleUnderText">
          {WebsiteText.default.navBar.underText}
        </div>
      </div>
    )
  }
}

export default Logo
