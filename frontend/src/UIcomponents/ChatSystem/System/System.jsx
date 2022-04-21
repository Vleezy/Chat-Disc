import React from 'react';
import '../System/System.css';
import ChatHeader from './ChatHeader/ChatHeader';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function System() {
  return (
    <div className="chat">
      <ChatHeader />

      <div className="chat__message">

      </div>

      <div className="chat__input">
        <AddCircleIcon fontSize="large"/>
      </div>

    </div>
  )
}

export default System;