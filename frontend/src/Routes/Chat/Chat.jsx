import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../../UIcomponents/ChatSystem/Sidebar/Sidebar';
import System from '../../UIcomponents/ChatSystem/System/System';
import '../Chat/Chat.css';
// import { selectUser } from '../../Redux/Features/userSlice'
// import Login from '../Login';

function Chat() {
  // const user = useSelector(selectUser);

  return (
    <div className='chat__app'>
      {/* If(?) there is then(:) it will show content */}

      <Sidebar />
      <System />
   
    </div>
  )
}

export default Chat;


// {user ? (
//   <>
// <Sidebar />
// <System />
// </>
// ): (
//   <Login />
// )}
