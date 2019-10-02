import React from "react"

import Divider from "./Divider"
import * as WebsiteText from "../copy"

const Home = () => {
  return (
    <React.Fragment>
      {WebsiteText.default.home.map((section, i) => (
        <div key={i} className={section.scrollTo}>
          <Divider text={section.text} />
          <section.component />
          <hr />
        </div>
      ))}
    </React.Fragment>
  )
}

export default Home

// Toastify on form submit
