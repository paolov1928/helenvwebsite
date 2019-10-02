import React, { Component, Fragment } from "react"

class Divider extends Component {
  render() {
    return (
      <Fragment>
        <div className="dividerText"> {this.props.text} </div>
        <hr />
      </Fragment>
    )
  }
}

export default Divider
