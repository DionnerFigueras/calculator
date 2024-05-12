import React from "react";
import '../styles/ClsButton.css'

function ClsButton (props) {
  return (
    <div className="clsButton" onClick={() => props.clsInput()}>
      {props.children}
    </div>
  )
}

export default ClsButton;