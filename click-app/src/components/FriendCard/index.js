import React from "react";
import "./style.css";

// This function creates a card whichs hold the props' image and can be click on 
function FriendCard(props){
    console.log(props)
    
    return(
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} onClick={() => props.onclickcard(props.id)}/>
            </div>
        </div>
    );
}

export default FriendCard;