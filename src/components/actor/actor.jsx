import React from "react";

export const Actor = ({ name, as }) => (
    <div className={"actor"}>
        <b className={"name"}>{name}</b>
        <small className={"as"}>as <b>{as}</b></small>
    </div>
);