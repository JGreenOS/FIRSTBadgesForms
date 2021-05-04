import React from "react";

//This will export a container component for use with bootstrap
export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

//This will export a Row component for use with bootstrap
export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Col({ size, children }) {
    return (
        <div className= {size
            .split(" ")
            .map(size => "col-" + size)
            .join(" ")
        }>
            {children}
        </div>
    );
}