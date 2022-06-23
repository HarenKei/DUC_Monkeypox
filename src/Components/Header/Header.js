import React from "react";
import "./Header.css"
import project_logo_svg from "../../Image/project_logo.svg";
import $ from 'jquery';
const Header = () => {
    return(
        <div id="root_header">
            <img id="header_project_logo" src={project_logo_svg}></img>
            <p id="header_title">원숭이두창 실시간 정보 사이트</p>
        </div>
    )
}

export default Header;