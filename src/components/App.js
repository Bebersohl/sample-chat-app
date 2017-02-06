import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MainContainer from '../containers/MainContainer'
import io from 'socket.io-client'

class App extends Component { 
  constructor(){
    super();
    const socket = io();
    socket.on('connect', function(){
      console.log(this.id)
    });
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <MainContainer />
      </MuiThemeProvider>
    )
  }
}
export default App

