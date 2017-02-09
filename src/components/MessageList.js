import React from 'react'
import Message from './Message'

const MessageList = ({selectedUser, users, conversations}) => {
  if(!selectedUser){
    return (
      <div className='default-panel'>
        {users.length > 1 && <span>Select a user</span>}
      </div>
    )
  }
  return (
    <div className='messages-container'>
      {conversations[selectedUser] && conversations[selectedUser]
        .map((node) =>
        <Message 
          key={node.timestamp}
          text={node.message} 
          type={selectedUser === node.from ? 'recieved' : 'sent'}/>
      )}
    </div>
  )
}

export default MessageList