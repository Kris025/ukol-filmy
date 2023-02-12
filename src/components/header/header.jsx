import camera from "./imgs/camera.svg";
import React from "react";

export const Header = () => (
    <>
        <h1 className={"mainTitle"}>
            <img className="logo" src={camera} alt="Logo" />
            V našem kině právě uvádíme
        </h1>
    </>
);