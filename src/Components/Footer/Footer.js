import React from "react";
import "./Footer.css";
import team_logo_svg from "../../Image/footer_team_logo.svg";
import daelim_logo_svg from "../../Image/footer_daelim_logo.svg";
import github_logo_svg from "../../Image/footer_github_logo.svg";


const Footer = () => {
    return(
        <div id="root_footer">
            <img id="footer_team_logo" src={team_logo_svg}></img><br></br>
            <p id="footer_names">
            <a href="https://github.com/HarenKei/" target="_blank">컴퓨터정보학부 201930326 정승민</a><br></br>
            <a href="https://github.com/hugesilver/" target="_blank">컴퓨터정보학부 201930306 김태은</a><br></br>
            <a href="https://github.com/Charizard6/" target="_blank">컴퓨터정보학부 201930314 육영현</a>
            </p>
            <p id="footer_school">대림대학교 | Daelim University College</p>
            <p id="logos">
                <a href="http://daelim.ac.kr" target="_blank"><img src={daelim_logo_svg}></img></a>
                <a href="https://github.com/HarenKei/DUC_Monkeypox" target="_blank"><img src={github_logo_svg}></img></a>
            </p>
            <p id="footer_announcement">
                본 홈페이지는 대림대학교 컴퓨터정보학부 해커톤 대회 출품용으로,<br></br>
                <b>비영리적 목적</b>을 가진 홈페이지임을 밝힙니다.
            </p>
            <p id="footer_source">Source: OurWorldInData, 질병관리청(KDCA)</p>
        </div>
    )
}

export default Footer;