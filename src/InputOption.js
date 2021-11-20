import React, { useState } from "react";
import "./InputOption.css";

const InputOption = ({ Icon, title, color, AltIcon }) => {
  const [isLiked, setisLiked] = useState(false);
  return (
    <div className="inputOption">
      {AltIcon &&
        Icon &&
        (isLiked ? (
          <div onClick={() => setisLiked(!isLiked)}>
            <AltIcon style={{ color: color }} />
          </div>
        ) : (
          <div onClick={() => setisLiked(!isLiked)}>
            <Icon style={{ color: color }} />
          </div>
        ))}
      {!AltIcon && Icon && <Icon style={{ color: color }} />}
      {AltIcon ? (
        <h4 onClick={() => setisLiked(!isLiked)}>{title}</h4>
      ) : (
        <h4>{title}</h4>
      )}
    </div>
  );
};

export default InputOption;
