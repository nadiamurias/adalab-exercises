import React from "react";

const Club = (props) => {
  const memberItem = props.club.members.map((member, index) => {
    return (
      <li className="members" key={index}>
        {member}
      </li>
    );
  });
  return (
    <article className="article">
      <i className={props.club.fa}></i>
      <h2 className="title">{props.club.name}</h2>
      <p>Members</p>
      <ul>{memberItem}</ul>
    </article>
  );
};
export default Club;
