import React from "react";

const Color = ({ listColor, setColor }) => {
  return (
    <>
      <ul className="colors ps-0">
        {listColor?.map((color, index) => {
          return (
            <li
              onClick={() => setColor(color?._id)}
              key={index}
              style={{ backgroundColor: `${color?.title}`, cursor: "pointer" }}
            ></li>
          );
        })}
      </ul>
    </>
  );
};

export default Color;
