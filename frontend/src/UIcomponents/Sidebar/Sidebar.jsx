import React from 'react';
import SidebarChannel from '../SidebarChannel/SidebarChannel';
import '../../UIcomponents/Sidebar/Sidebar.css';
import { ExpandMore } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';

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


        </div>
    );
}

export default Sidebar;