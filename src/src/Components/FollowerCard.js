import React from "react";
import "../App.css"


const FollowerCard = (props) => {
    console.log("followcard object", props)
    // const {login} = props.followerdata;
    // const {avatar_url} = props.followerdata;
    return (
        <div>
            {props.followerdata.map((item) => (
                <div>
                <h3>{item.login}</h3>
                <img src={item.avatar_url}></img>
                </div>
            ))}

        </div>
    )
}

export default FollowerCard;