import React from "react";
function ContactCard(props) {
  console.log(props);
  return (
    <div className="contact-card">
      <img src={props.Contact.imageUrl} alt="" />
      <h2> Animename : {props.Contact.animeName}</h2>
      <h3>Status : {props.Contact.Status}</h3>
      <h3>Rating : {props.Contact.Rating}</h3>
    </div>
  );
}
export default ContactCard;
