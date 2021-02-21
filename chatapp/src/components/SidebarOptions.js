import React from 'react'
import styled from "styled-components"

function SidebarOptions({Icon,title}) {
    return (
        <SidebarOptionsContainer>
                {Icon && <Icon fontsize="small" style={{padding:10}} />}
                <h3>{title}</h3>
        </SidebarOptionsContainer>
    )
}

export default SidebarOptions
const SidebarOptionsContainer=styled.div`
display:flex;
font-size:18px;
padding-left:2px;
align-items:center;
cursor:pointer;
:hover{
    opacity:0.9;
    background-color: rgb(10, 248, 137);
}
`;