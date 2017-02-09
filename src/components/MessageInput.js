import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

class MessageInput extends Component {
  constructor(){
    super()
    this.state = {
      message: '',
      error: '',
    }
  }
  render(){
    return(
      <form>
        <div style={{display: 'flex'}}>
          <TextField 
            onChange={e => this.setState({ message: e.target.value})}
            errorText={this.state.error}
            value={this.state.message}
            name="messageInput"
            fullWidth={true}
          />
          <FlatButton
            onClick={e => {
              e.preventDefault()
              if(this.state.message){
                this.props.socket.emit('send message', {
                  message: this.state.message,
                  to: this.props.selectedUser,
                })
                this.setState({ message: '', error: ''})
              }else{
                this.setState({ error: 'This field is required'})
              }
            }}
            autoFocus
            type="submit"
            backgroundColor="#FF4081" 
            label="Send" 
            style={{marginLeft: 15}}
            disabled={!this.props.selectedUser}
          />
        </div>
      </form>
    )
  }
}

export default MessageInput