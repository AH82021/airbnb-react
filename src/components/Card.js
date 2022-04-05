import React from "react";
import IMAGES from "../images/index";


function Card(props) {
    let badgeText
    console.log(props.Location);
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.Location === "Online") {
        badgeText = "ONLINE"
    }

  return(
    <div className="card">
      { badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={props.img} className="card--image" alt="card-pic" />
        <div className="card--stats">
            <img src={IMAGES.star} className="card--star"  alt="star-logo"/>
            <span>{props.rating}</span>
            <span className="gray">({props.reviews}) •"</span>
            <span className="gray">{props.Location}</span>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
)
  
}


export default Card;