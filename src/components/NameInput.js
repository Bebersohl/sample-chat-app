import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const style = {
  marginTop: 100,
  padding: 100,
  textAlign: 'center',
  display: 'inline-block',
};

const NameInput = () => (
  <div>
    <Paper style={style} zDepth={5}>
      <TextField
        hintText="Name"
      />
      <FlatButton label="Submit" />
    </Paper>
  </div>
);

export default NameInput;