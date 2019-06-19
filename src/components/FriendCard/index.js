import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
      <img onClick={props.setClick} 
            className="clickImg" src={props.image} key={props.id} alt={props.name}></img>
      </div>
      <div className="content">
        <ul>
          
          
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
