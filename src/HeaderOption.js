import { Avatar } from "@mui/material";
import React from "react";
import "./HeaderOption.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const HeaderOption = ({ avatar, Icon, title, logout, exit }) => {
  const user = useSelector(selectUser);

  return (
    <div className="headerOption" onClick={logout}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon" src={user?.photoURL}>
          {user?.email[0]}
        </Avatar>
      )}
      {exit && <Avatar className="headerOption__icon" src={exit} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
