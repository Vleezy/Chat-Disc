import React from 'react';
import Sidebar from '../../UIcomponents/ChatSystem/Sidebar/Sidebar';
import System from '../../UIcomponents/ChatSystem/System/System';
import '../Chat/Chat.css';

function Chat() {
  return (
    <div className='chat__app'>
      <Sidebar />

      <System />
    </div>
  )
}

export default Chat;