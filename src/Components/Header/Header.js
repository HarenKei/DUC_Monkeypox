import React from "react";
import "./Header.css"
import project_logo_svg from "../../Image/header_project_logo.svg";
import question_arrow from "../../Image/header_question_arrow.svg";
import $ from 'jquery';

const Header = () => {
    return(
        <div id="root_header">
            <img id="header_project_logo" src={project_logo_svg}></img>
            <p id="header_title">원숭이두창 실시간 정보 사이트</p>
            <div className="faq-area">
                <div className="box">
                    <div className="question"><p>원숭이두창 유행(Monkeypox Outbreak)이란 무엇인가요? <img src={question_arrow} className="arrow"></img></p></div>
                    <div className="answer">
                        원숭이두창(Monkeypox)은 원숭이두창바이러스(Monkeypox virus)에 감염되어<br></br>
                        발생하는 희귀질환으로, poxviridae과의 Orthopoxvirus속에 속합니다.<br></br>
                        1958년 연구를 위해 사육된 원숭이들에서 수두와 비슷한 질병이 발생하였을 때<br></br>
                        처음 발견되어 "원숭이두창" 이라는 이름이 붙여졌습니다.<br></br>
                        원숭이두창에 감염된 사례는 두창 퇴치에 노력을 기울이던 1970년 콩고민주공화국에서<br></br>
                        처음 보고되었으며, 이후 가봉, 나이지리아, 중앙아프리카공화국, 코트디브아르,<br></br>
                        콩고공화국, 카메룬 등 중·서부 아프리카 국가에서 보고되며 풍토병화 되었습니다.<br></br>
                        국내 유입가능성도 점차 증가하여 우리나라는 2022년 6월 원숭이두창을<br></br>
                        2급감염병으로 지정하고 감시를 강화하고 있습니다.<br></br>
                        <span>(제공: 대한민국 질병관리청)</span>
                        <br></br>
                        <br></br>
                        <br></br>
                        <span>
                        [더 알아보기]<br></br>
                        <a href="https://www.kdca.go.kr/contents.es?mid=a20108060000" target="_blank">대한민국 질병관리청(KDCA)</a><br></br>
                        <a href="https://www.who.int/health-topics/monkeypox" target="_blank">세계보건기구(World Health Organization)</a>
                        </span>
                    </div>
                </div>
                <div className="box">
                    <div className="question"><p>원숭이두창 증상이 어떻게 되나요? <img src={question_arrow} className="arrow"></img></p></div>
                    <div className="answer">
                        원숭이두창에 감염된 경우 질병의 정도는 경증에서 중등도이나 치명적일 수 있습니다.<br></br>
                        감염이되면 1~2주간의 잠복기를 지나 ‘38℃ 이상의 급성 발열, 두통, 근육통 및 피로감 등’으로 시작되어 1~3일 후 얼굴을 중심으로 발진증상이 나타나며, 원심형으로 신체 다른 부위(특히 사지)로 확산합니다.<br></br>
                        림프절 부종이 주요 증상으로 나타나며, 증상은 보통 2~4주간 지속됩니다.<br></br>
                        검사 방법은 원숭이두창 확인진단을 위해서는 의심환자의 혈액, 피부 병변의 조직 및 병변의 액, 가피 등을 통한 유전자검출검사가 필요합니다.<br></br>
                        <br></br>
                        잠복기: 5~21일(평균 7~14일)<br></br>
                        임상증상: 발열, 두통, 근육통, 요통, 림프절 부종, 오한, 피로, 발진(발열 후 약 1~3일이내)<br></br>
                        ※ 발진은 반점(Macules), 구진(Papules), 수포(Vesicles), 농포(Pustules), 가피(Scabs)의 단계로 진행됨<br></br>
                        치명률: 일반적으로 약 1~10%로 알려져 있으며, WHO에 따르면 최근 치명률은 3~6%로 보고되고 있음<br></br>
                        <span>(제공: 대한민국 질병관리청)</span>
                        <br></br>
                        <br></br>
                        <br></br>
                        <span>
                        [더 알아보기]<br></br>
                        <a href="https://www.kdca.go.kr/contents.es?mid=a20108060000" target="_blank">대한민국 질병관리청(KDCA)</a><br></br>
                        <a href="https://www.who.int/health-topics/monkeypox" target="_blank">세계보건기구(World Health Organization)</a>
                        </span>
                    </div>
                </div>
                <div className="box">
                    <div className="question"><p>원숭이두창은 어떻게 걸리게 되나요? <img src={question_arrow} className="arrow"></img></p></div>
                    <div className="answer">
                        원숭이두창은 인수공통감염병으로 원숭이두창 바이러스에 감염된 동물(쥐, 다람쥐, 프레리도그와 같은 설치류 및 원숭이 등), 
                        감염된 사람 또는 바이러스에 오염된 물질과 접촉할 경우 감염될 수 있으며, 태반을 통해 감염된 모체에서 태아로 수직감염이 발생할 수 있습니다.<br></br>
                        <br></br>
                        (비말) 코, 쿠강, 인두, 점막, 폐포에 있는 감염비말에 의한 사람간 직접 전파<br></br>
                        (피부병변 부산물) 감염된 동물·사람의 혈액, 체액, 피부, 점막병변과의 직간접 접촉<br></br>
                        (매개물) 감염환자의 체액, 병변이 묻은 매개체(린넨, 의복 등) 접촉을 통한 전파<br></br>
                        (공기) 바이러스가 포함된 미세 에어로졸을 통한 공기전파가 가능하나 흔하지 않음<br></br>
                        <span>(제공: 대한민국 질병관리청)</span>
                        <br></br>
                        <br></br>
                        <br></br>
                        <span>
                        [더 알아보기]<br></br>
                        <a href="https://www.kdca.go.kr/contents.es?mid=a20108060000" target="_blank">대한민국 질병관리청(KDCA)</a><br></br>
                        <a href="https://www.who.int/health-topics/monkeypox" target="_blank">세계보건기구(World Health Organization)</a>
                        </span>
                    </div>
                </div>
                <div className="box">
                    <div className="question"><p>원숭이두창을 예방하는 방법은? <img src={question_arrow} className="arrow"></img></p></div>
                    <div className="answer">
                        원숭이두창에 감염된 사람, 감염된 동물(원숭이 및 설치류 등), 또는 바이러스에 오염된 물질과 접촉할 경우 감염될 수 있으므로 다음을 주의합니다.<br></br>
                        감염된(감염의 위험이 있는) 사람 또는 동물과의 직‧간접적 접촉을 피합니다.<br></br>
                        감염된 환자가 사용한 물품(린넨과 같은 침구류 등)과의 접촉을 피합니다.<br></br>
                        의심되는 사람, 동물 또는 물건과 접촉을 한 경우, 비누와 물로 손을 씻거나 알코올 성분의 손 소독제를 이용하여 깨끗이 합니다.
                        원숭이두창이 발생하는 곳을 여행하는 경우, 바이러스를 보유할 수 있는 동물과의 접촉을 피합니다.
                        <br></br>
                        <br></br>
                        (백신) 국내 비축하고 있는 두창 백신은 생물테러 또는 국가의 공중보건 위기 상황 시 사용할 목적으로 비축하고 있는 것으로, 현재 원숭이 두창 예방목적의 상용화된 백신은 없습니다.
                        <br></br>
                        <span>(제공: 대한민국 질병관리청)</span>
                        <br></br>
                        <br></br>
                        <br></br>
                        <span>
                        [더 알아보기]<br></br>
                        <a href="https://www.kdca.go.kr/contents.es?mid=a20108060000" target="_blank">대한민국 질병관리청(KDCA)</a><br></br>
                        <a href="https://www.who.int/health-topics/monkeypox" target="_blank">세계보건기구(World Health Organization)</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

$(function(){
    var faq_area = $(".faq-area");
  
    faq_area.each(function(){
      var _faqarea = new GroupBox(this);
    });
  
    function GroupBox(groupElement){
      var box = $(groupElement).find(".box");
  
      box.each(function(idx){
        var newBox = new RootBox(this);
        if (idx >= 0){
          newBox.siblingsClose();
        }
      });
    }
  
    function RootBox(boxElement){
      var _this = this;
      var boxEl = $(boxElement);
      var answer = $(boxEl).find(".answer");
  
      boxEl.on("click", anchorClickEvent);
  
      function anchorClickEvent(){
        if (answer.is(':hidden')){
          _this.open();
        } else {
          _this.close();
        }
      }
  
      _this.siblingsClose = function(){
        answer.css('display', 'none');
      };
      _this.open = function() {
        answer.slideDown(); // duration, easing, complete
      };
      _this.close = function() {
        answer.slideUp(); // duration, easing, complete
      }
    }
});

export default Header;