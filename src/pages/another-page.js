import React from "react"

import { index, linkButton } from "./another-page.module.css"

class IndexComponent extends React.Component {
  render() {
    return (
      <div className={index}>
        <h1>Hello world</h1>
        <a href="/" class={linkButton}>click this link</a>
      </div>
    )
  }
}

export default IndexComponent