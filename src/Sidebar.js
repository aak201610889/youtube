import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from'@material-ui/icons/Home'
import WhatshotIcon from'@material-ui/icons/Whatshot'
import SubscriptionsIcon from'@material-ui/icons/Subscriptions'
import VideoLibraryIcon from'@material-ui/icons/VideoLibrary'
import HistoryIcon from'@material-ui/icons/History'
import OndemandVideoIcon from'@material-ui/icons/OndemandVideo'
import WatchLaterIcon from'@material-ui/icons/WatchLater'
import ThumbUpAltOutlinedIcon from'@material-ui/icons/ThumbUpAltOutlined'
import ExpandMoreOutlinedIcon from'@material-ui/icons/ExpandMoreOutlined'


function Sidebar({dark}) {
    return (
      <div className={dark ? "sidebar__dark" : "sidebar"}>
        <SidebarRow dark={dark} selected Icon={HomeIcon} title="Home" />
        <SidebarRow dark={dark} Icon={WhatshotIcon} title="Trending" />
        <SidebarRow dark={dark} Icon={SubscriptionsIcon} title="Subscription" />
        <hr />
        <SidebarRow dark={dark} Icon={VideoLibraryIcon} title="Library" />
        <SidebarRow dark={dark} Icon={HistoryIcon} title="History" />
        <SidebarRow dark={dark} Icon={OndemandVideoIcon} title="Your video" />
        <SidebarRow dark={dark} Icon={WatchLaterIcon} title="Watch Later" />
        <SidebarRow dark={dark} Icon={ThumbUpAltOutlinedIcon} title="Liked video" />
        <SidebarRow dark={dark} Icon={ExpandMoreOutlinedIcon} title="Show more" />
        <hr />
      </div>
    );
}

export default Sidebar
