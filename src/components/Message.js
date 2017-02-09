import React from 'react'

const Message = ({text, from}) => (
  <div className="message-row">
    <div className={from + " message"}>
      <div className="message-text">
        {text}
      </div>
    </div>
  </div>
)

export default Message