import React from "react";
import Club from "./Club";

const ClubList = (props) => {
  const ListItem = props.data.map((club, index) => {
    return (
      <li className="club" key={index}>
        <Club club={club} />
      </li>
    );
  });
  return <ul className="listItem">{ListItem}</ul>;
};
export default ClubList;
