import { Bookmark, ChatSharp, Group } from "@mui/icons-material";
import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <RssFeedIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
          <ChatSharp className="sidebarIcon"/>
          <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
          <PlayCircleOutlineIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
          <Group className="sidebarIcon"/>
          <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
          <Bookmark className="sidebarIcon"/>
          <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
          <HelpOutlineIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
          <WorkOutlineIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
          <EventIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
          <SchoolIcon className="sidebarIcon"/>
          <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendlist">
         {Users.map(u=>(
          <CloseFriend key={u.id} user={u} />
         ))}
        </ul>
      </div>
    </div>
  )
}
