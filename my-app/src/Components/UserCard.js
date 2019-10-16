import React from "react";
import "../App.css"



const UserCard = (props) => {
// console.log("usercard object", props)
    const {name} = props.userdata;
    const {avatar_url} = props.userdata;
    const {html_url} = props.userdata;
    return (
        <div className="user-container">
            <h3>{name}</h3>
            <img src={avatar_url}></img>
            
         
        </div>
    )
}

export default UserCard;