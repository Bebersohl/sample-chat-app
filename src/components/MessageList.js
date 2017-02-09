import React from 'react'
import Message from './Message'
import ActionHome from 'material-ui/svg-icons/navigation/arrow-back';

const MessageList = ({selectedUser, users}) => {
  if(!selectedUser){
    return (
      <div className="default-panel">
        {users.length > 1 && <span>Select a user</span>}
      </div>
    )
  }

  return (
    <div className="messages-container">
      <Message text="hello this is some text" from="sent"/>
      <Message text="hello this is some text" from="recieved"/>
      <Message text="hello this is some text" from="sent"/>
    </div>
  )
}

export default MessageList