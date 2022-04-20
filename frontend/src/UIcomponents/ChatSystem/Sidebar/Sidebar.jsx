import React from 'react';
import SidebarChannel from '../SidebarChannel/SidebarChannel';
import './Sidebar.css';

//Placeholder for user profile image
import profileImg from '../../../Assets/Images/profileImg.jpg';


// MaterialUI Icons
import { ExpandMore } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallIcon from "@mui/icons-material/Call";
import { Avatar } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';


function Sidebar() {
    return (
        <div className='sidebar'>

            <div className='sidebar__top'>
                <h3> Chat Application </h3>
                <ExpandMore />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMore />
                        <h4>Text Channels</h4>
                    </div>

                    <AddIcon className="sidebar__addChannel" />
                </div>
                <div className="sidebar__channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large" />
                <div className="sidebar__voiceInfo">
                    <h3> Voice Connected </h3>
                    <p> Stream </p>
                </div>

                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar src={profileImg} alt='Profile Image'/>
                <div className="sidebar__profileInfo">
                    <h3>Username</h3>
                    <p>#ID</p>
                </div>

                <div className="sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />

                </div>
            </div>
        </div>
    );
}

export default Sidebar;