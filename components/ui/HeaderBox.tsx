import React from "react";

const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <div>
      <div className="header-box">
        <h1 className="header-box-title">
          {title}
          {type === "greeting" && (
            <span className="text-blue-600">&nbsp;{user}</span>
          )}
        </h1>
      </div>
      <p className="header-box-subtext">
      {subtext}
      </p>
    </div>
  );
};

export default HeaderBox;
