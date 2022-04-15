import React from 'react';
import SidebarChannel from '../SidebarChannel/SidebarChannel';
import '../../UIcomponents/Sidebar/Sidebar.css';

// MaterialUI Icons
import { ExpandMore } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallIcon from "@mui/icons-material/Call";


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
            <InfoOutlinedIcon/>
            <CallIcon/>

            </div>

            </div>
        </div>
    );
}

export default Sidebar;