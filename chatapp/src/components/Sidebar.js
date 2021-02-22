import React from 'react'
import styled from "styled-components"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOptions from './SidebarOptions';
import NotesIcon from '@material-ui/icons/Notes';
import BackupIcon from '@material-ui/icons/Backup';
import GetAppIcon from '@material-ui/icons/GetApp';
import AppsIcon from '@material-ui/icons/Apps';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { auth, db } from "../firebase";
import {useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
function Sidebar() {
    const[user]=useAuthState(auth);
    const [channels,loading,error]=useCollection(db.collection('rooms'));
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>{user.displayName}</h2>
                    <h3>
                       
                    </h3>
                </SidebarInfo>
                <CreateIcon/>
            </SidebarHeader>
            <SidebarOptions Icon={InsertCommentIcon} title="Threads" />
            <SidebarOptions Icon={InboxIcon} title="Mentions & Reactions" />
            <SidebarOptions Icon={DraftsIcon} title="Saved Items" />
            <SidebarOptions Icon={BookmarkBorderIcon} title= "Channel Browser"/>
            <SidebarOptions Icon={PeopleAltIcon} title="People & User groups" />
            <SidebarOptions Icon={AppsIcon} title="Apps"/>
            <SidebarOptions Icon={FileCopyIcon} title= "File Browser" />
            <SidebarOptions Icon={ExpandLessIcon} title= "Show less" />
            <hr/>
            <SidebarOptions Icon={ExpandMoreIcon} title="Channels"/>
            <hr/>
            <SidebarOptions Icon={AddIcon} addChannelOption title="Add channel"/>
            {channels?.docs.map(doc=>(
                <SidebarOptions 
                key={doc.id} 
                id={doc.id}
                 title={doc.data().name}
                 />
            ))}
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer=styled.div`
background-color:var(--app-color);
color:white;
flex:0.3;

margin-top:60px;
max-width:260px;
>hr{
    margin-top:10px;
    margin-bottom:10px;
    border:1px solid gray;
}
`;
const SidebarHeader=styled.div`
display:flex;
padding:13px;

>.MuiSvgIcon-root{
    padding:8px;
    color:rgb(3, 97, 64);
    font-size:15px;
    background-color:white;
    border-radius:500px;
    margin-top:4px;

}

`;
const SidebarInfo=styled.div`
    flex:1;
    >h2{
        font-size:23px;
        font-weight:600;
        margin-bottom:5px;
    }
    >h3{
        display:flex;
        font-size:13px;
        font-weight:400;
        align-items:center;

    }
`;
