import React from 'react'

const Message = ({text, type}) => (
  <div className='message-row'>
    <div className={type + ' message'}>
      <div className='message-text'>
        {text}
      </div>
    </div>
  </div>
)

export default Message