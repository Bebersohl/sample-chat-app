import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

const style = {
  padding: 100,
  display: 'flex',
}

class NameInput extends Component {
  constructor(){
    super()
    this.state = {
      error: '',
      name: '',
    }
  }
  componentWillUnmount(){
    console.log('SEE YA')
  }
  render() {
    return (
      <div>
        <Paper style={style} zDepth={5}>
          <TextField
            hintText="Name"
            value={this.state.name}
            errorText={this.state.error}
            onChange={e => this.setState({name: e.target.value})}
          />
          <FlatButton 
            label="Submit" 
            onClick={() => {
              if (this.state.name) {
                this.props.onClick(this.state.name)
              } else {
                this.setState({error: 'This field is required'})
              }
            }}
          />
        </Paper>
      </div>
    )
  }
}


export default NameInput