import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'

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
  render() {
    return (
      <form>
        <Paper style={style} zDepth={5}>
          <TextField
            autoFocus
            hintText="Name"
            value={this.state.name}
            errorText={this.state.error}
            onChange={e => this.setState({name: e.target.value})}
          />
          <FlatButton 
            label="Submit"
            type="submit"
            onClick={e => {
              e.preventDefault()
              if (this.state.name) {
                this.props.onClick(this.state.name)
              } else {
                this.setState({error: 'This field is required'})
              }
            }}
          />
        </Paper>
      </form>
    )
  }
}


export default NameInput