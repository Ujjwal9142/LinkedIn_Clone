import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>

        <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Crypto is the new Currency", "Top news - 9099 readers")}
      {newsArticle("Coronavirus: Japan updates", "Top news - 7865 readers")}
      {newsArticle("Tesla hits new highs", "Top news - 5371 readers")}
      {newsArticle("Bitcoin Breaks $22k", "Top news - 8648 readers")}
      {newsArticle("Is Redux too good?", "Top news - 3248 readers")}
      {newsArticle(
        "The new generation of Automobiles!",
        "Top news - 1895 readers"
      )}
    </div>
  );
};

export default Widgets;
