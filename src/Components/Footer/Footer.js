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
            201930326  정승민<br></br>
            201930306  김태은<br></br>
            201930314  육영현
            </p>
            <p id="footer_school">대림대학교 | Daelim University College</p>
            <p id="logos"><img src={daelim_logo_svg}></img><img src={github_logo_svg}></img></p>
            <p id="footer_source">Source: OurWorldInData, 질병관리청(KDCA)</p>
        </div>
    )
}

export default Footer;