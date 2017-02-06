import React from 'react'
import NameInputContainer from '../containers/NameInputContainer'
import UserList from './UserList'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

const Main = ({ name }) => {
  if (name) {
    return <NameInputContainer />
  }

  return(
    <div>
      <Paper style={{display: 'flex'}}>
        <UserList/> 
        <div style={{width: 500, minHeight: 500, padding: 15, display: 'flex', flexDirection: 'column'}}>
          <div>1</div>
          <div style={{display: 'flex', alignSelf: 'flex-end'}}>
            <TextField fullWidth={true} id="1"/>
            <FlatButton backgroundColor="#FF4081" label="Send" style={{marginLeft: 15}}/>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default Main