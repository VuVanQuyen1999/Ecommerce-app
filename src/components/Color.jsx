import React from "react";

const Color = ({ listColor }) => {
    const colors = Object.values(listColor);
    return (
        <>
            <ul className="colors ps-0">
                {colors.map((color, index) => {
                    return (
                        <li
                            key={index}
                            style={{ backgroundColor: `${color}` }}
                        ></li>
                    );
                })}
            </ul>
        </>
    );
};

export default Color;
