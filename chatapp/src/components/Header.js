import React from 'react'
import styled from "styled-components"
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpIcon from '@material-ui/icons/Help';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
function Header() {
    const [user]=useAuthState(auth);
    return (
        <HeaderContainer>
            {/* Header left */}
                <HeaderLeft>
                    <HeaderAvatar 
                    onClick={()=>auth.signOut()}
                    alt={user?.displayName}
                    src={user?.photoURL}
                    />
                    <AccessTimeIcon/>
                </HeaderLeft>
            {/* Header Search */}
            <HeaderSearch>
                <SearchIcon/>
                <input placeholder='search by name ' />
            </HeaderSearch>
            {/* Header right */}
            <HeaderRight>
                <HelpIcon/>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header

const HeaderRight=styled.div`
    flex:0.3;
    display:flex;
    align-items:flex-end;
    > .MuiSvgIcon-root{
        margin-left:auto;
        margin-right:20px;
    color:white;
}
`;

const HeaderContainer=styled.div`
display:flex;
align-items:center;
position: fixed;
width:100%;
justify-content:space-between;
padding:10px 0;
background-color:var(--app-color); 
display: flex;
`;
const HeaderLeft=styled.div`
flex:0.3;
display:flex;
align-items:center;
margin-left:20px;
> .MuiSvgIcon-root{
    color:white;
    margin-left:auto;
    margin-right:30px;
}

`;
const HeaderAvatar=styled(Avatar)`
cursor: pointer;
:hover{
    opacity:0.8;
}
`;
const HeaderSearch=styled.div`
    flex:0.4;
    opacity:1;
    border-radius:6px;
    text-align:center;
    display:flex;
    padding:0 50px;
    background-color:white;
    color:gray;
    border:1px gray solid;
> input{
    background-color:transparent;
    border:none;
    text-align:center;
    min-width:30vw;
    outline:0;
    color:rgb(57, 136, 108);
    font-weight:500;
    font-size:20px;
}
`;