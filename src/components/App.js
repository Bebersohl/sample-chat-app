import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MainContainer from '../containers/MainContainer'
import io from 'socket.io-client'
import { setUsers, setId, setSelectedUser, recieveMessage } from '../actions'

class App extends Component { 
  constructor(){
    super();
    this.state = {
      socket: io(),
    }
    this.state.socket.on('connect', () => {
      this.props.store.dispatch(setId(this.state.socket.id))
      console.log('connected')
    });
    this.state.socket.on('forward message', (message) => {
      this.props.store.dispatch(recieveMessage(message))
      console.log('forward message', message)
    });
    this.state.socket.on('users change', (users) => {
      const {selectedUser} = this.props.store.getState()
      if(!users.find(user => user.id === selectedUser)){
        this.props.store.dispatch(setSelectedUser(null))
      }
      this.props.store.dispatch(setUsers(users))
      console.log('user change')
    });
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <MainContainer socket={this.state.socket}/>
      </MuiThemeProvider>
    )
  }
}
export default App

