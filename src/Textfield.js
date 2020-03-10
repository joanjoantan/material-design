import React, { Component } from 'react';
import { TextField } from "@rmwc/textfield";
import '@material/textfield/dist/mdc.textfield.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';

class textfield extends Component {
  render() {
    return (
      <React.Fragment>
        <TextField label="standard..."placeholder="Input text" />
      </React.Fragment>
    )
  }
}

export default textfield;
