import React from "react";
import monkeypoxPhoto from "../../114071890.2.jpg";
import "./Header.css";

const Header = () => {
    return(
        <div id = "divHeaderWrapper">

            <div id = "divLogoZone">
                <h1>1q2w3e4r! logo</h1>
                <h1>MONKEYPOX LIVE</h1>
            </div>{/* End of divLogoZone */}
           
    

            <h2>원숭이 두창이란 무엇인가요?</h2>
            <div id = "divExplainMonkeypox">

                <div id = "divImageMonkeypox">
                    <p><img src={ monkeypoxPhoto }/></p>
                </div>{/* End of divImageMonkeypox */}

                원숭이두창(Monkeypox)은 원숭이두창바이러스(Monkeypox virus)에 감염되어 발생하는 희귀질환으로, poxviridae과의 Orthopoxvirus속에 속합니다.<br/>
                1958년 연구를 위해 사육된 원숭이들에서 수두와 비슷한 질병이 발생하였을 때 처음 발견되어 "원숭이두창" 이라는 이름이 붙여졌습니다.<br/>
                원숭이두창에 감염된 사례는 두창 퇴치에 노력을 기울이던 1970년 콩고민주공화국에서 처음 보고되었으며,<br/>
                이후 가봉, 나이지리아, 중앙아프리카공화국, 코트디브아르, 콩고공화국, 카메룬 등 중·서부 아프리카 국가에서 보고되며 풍토병화 되었습니다.<br/>
                그러나, 2022년 5월 이후 스페인, 영국, 이탈리아 등 유럽을 중심으로 발생하기 시작하여 미국 등 풍토병이 아닌 국가에서 이례적으로 발생함에 따라<br/>
                국내 유입가능성도 점차 증가하여 우리나라는 2022년 6월 원숭이두창을 2급감염병으로 지정하고 감시를 강화하고 있습니다.<br/>
                대한민국 질병관리본부 발췌
            </div> {/* End of divExplainMonkeypox */}
        </div> /* divHeaderWrapper */
    )
}

export default Header;