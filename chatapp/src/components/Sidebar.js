import React from 'react'
import styled from "styled-components"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOptions from './SidebarOptions';
import NotesIcon from '@material-ui/icons/Notes';
import BackupIcon from '@material-ui/icons/Backup';
import GetAppIcon from '@material-ui/icons/GetApp';

function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>User Name</h2>
                    <h3>
                       
                    </h3>
                </SidebarInfo>
                <CreateIcon/>
            </SidebarHeader>
            <SidebarOptions Icon={BackupIcon} title="My Uploads" />
            <SidebarOptions Icon={GetAppIcon} title="My Downloads" />
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
        font-size:25px;
        font-weight:900;
        margin-bottom:5px;
    }
    >h3{
        display:flex;
        font-size:13px;
        font-weight:400;
        align-items:center;

    }
`;