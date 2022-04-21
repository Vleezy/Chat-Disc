import React from 'react';
import '../ChatBody/Message.css';
import { Avatar } from '@mui/material';

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>Username
          <span className="message__timestamp">Timestamp Here</span>
        </h4>


        <p>Messages will go here!</p>
      </div>
    </div>
  )
}

export default Message;