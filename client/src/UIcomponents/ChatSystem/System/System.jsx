import React from 'react';
import '../System/System.css';
import Message from './ChatBody/Message';
import ChatHeader from './ChatHeader/ChatHeader';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifBoxRoundedIcon from '@mui/icons-material/GifBoxRounded';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function System() {
  return (
    <div className="chat">
      <ChatHeader />

      <div className="chat__messages">
        <Message />
      </div>

      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input placeholder={'Message #TestChannel'} />
          <button type='submit' className='chat__inputButton'>
            Send Message
          </button>
        </form>

        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifBoxRoundedIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  )
}

export default System;