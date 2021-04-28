import React from "react"

import { index } from "./index.module.css"
import { button } from "../styling/button.module.css";

class IndexComponent extends React.Component {
  render() {
    return (
      <div className={index}>
        <h1>Hello world</h1>
        <button class={button}>click this button</button>
      </div>
    )
  }
}

export default IndexComponent