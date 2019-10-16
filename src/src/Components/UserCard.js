import React from "react";
import "../App.css"


const UserCard = (props) => {
// console.log("usercard object", props)
    const {name} = props.userdata;
    const {company} = props.userdata;
    const {avatar_url} = props.userdata;
    return (
        <div>
            <h3>{name}</h3>
            <p>{company}</p>
            <img src={avatar_url}></img>
        </div>
    )
}

export default UserCard;