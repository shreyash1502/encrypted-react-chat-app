import { Button} from '@material-ui/core'
import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { auth, db } from '../firebase';
import firebase from 'firebase';
import Chat from './Chat'
import { useAuthState } from 'react-firebase-hooks/auth';
function ChatInput({channelName, channelId,chatRef}) {
    console.log(channelId);
    const [input,setInput]=useState('');
    const[user]=useAuthState(auth);
    console.log(input);
    const sendMessage=(e)=>{
        e.preventDefault();// Prevents Refresh
        if( !channelId){
            return false;
        }
        db.collection('rooms').doc(channelId).collection('messages').add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            user:user.displayName,
            userImage:user.photoURL,

        });
        console.log(channelId);
        chatRef.current.scrollIntoView({
            behavior:'smooth',
        });
        setInput('')
    }
    return (
        <ChatInputContainer>
            <form>
                <input value={input} 
                onChange={(e)=>setInput(e.target.value)}
                placeholder={`Message # ${channelName}`} />
                <Button hidden type="submit" onClick={sendMessage}>
                    Send
                </Button>
            </form>

        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer=styled.div`
border-radius:20px;
>form{
    position:relative;
    display:flex;
    justify-content:center;
}
>form>input{
    position:fixed;
    bottom:30px;
    width:60%;
    border:1px solid gray;
    border-radius:3px;
    padding:20px;
    outline:none;
}
>form>Button{
display:none !important;
}


`;
