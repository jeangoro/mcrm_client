import React from "react";
export const BadgeCellRenderer = (data, colorMapping) => (
    <React.Fragment>
        {colorMapping[data.value] ? (
            <span
                className="badge badge-md"
                ref={(el) => {
                    if (el) {
                        el.style.setProperty(
                            "background-color",
                            colorMapping[data.value],
                            "important"
                        );
                    }
                }}
            >
        <span>{data.value}</span>
      </span>
        ) : (
            <span>{data.value}</span>
        )}
    </React.Fragment>
);