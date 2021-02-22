import React from 'react'
import styled from "styled-components"
import { db } from "../firebase";
import {useDispatch} from "react-redux"; 
import {useCollection } from "react-firebase-hooks/firestore";
import appSlice from '../features/appSlice';
import {enterRoom } from "../features/appSlice";
function SidebarOptions({Icon,title,addChannelOption,id}) {
const dispatch = useDispatch();
    
    const addChannel=()=>{
        const channelname=prompt("Please Enter the channel name");
        if(channelname){
            db.collection("rooms").add({
                name: channelname,
            });
        }
    };
    const selectChannel=()=>{
        if(id){
            dispatch(enterRoom({
                roomId:id,
            }))
        }
        console.log(id);
    };
    return (
        <SidebarOptionsContainer
        onClick={addChannelOption?addChannel:selectChannel}
        >
                {Icon && <Icon fontsize="small" style={{padding:10}} />}
                { Icon ?(
                    <h3>{title}</h3>
                ):(
                    <SidebarOptionsChannel>
                        <span>#</span>{title}
                    </SidebarOptionsChannel>
                )}
        </SidebarOptionsContainer>
    )
}

export default SidebarOptions
const SidebarOptionsContainer=styled.div`
display:flex;
font-size:12px;
padding-left:2px;
align-items:center;
cursor:pointer;
:hover{
    opacity:0.9;
    background-color: rgb(10, 248, 137);
}
>h3{
    font-weight:500;
}
`;
const SidebarOptionsChannel=styled.div`

    font-weight:400;
    font-size:20px;
    padding:7px 0;
    margin-left:10px

`;
