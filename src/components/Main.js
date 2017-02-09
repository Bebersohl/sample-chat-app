import React from 'react'
import NameInputContainer from '../containers/NameInputContainer'
import UserListContainer from '../containers/UserListContainer'
import Paper from 'material-ui/Paper'
import Message from './Message'
import MessageInputContainer from '../containers/MessageInputContainer'
import MessageListContainer from '../containers/MessageListContainer'

const Main = ({ name, socket }) => {
  if (!name) {
    return <NameInputContainer socket={socket}/>
  }

  return(
    <div>
      <Paper style={{display: 'flex'}}>
        <UserListContainer /> 
        <div className="messages-panel">
          <MessageListContainer/>
          <MessageInputContainer socket={socket}/>
        </div>
      </Paper>
    </div>
  )
}

export default Main