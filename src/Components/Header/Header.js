import React from "react";
import "./Header.css"
import project_logo_svg from "../../Image/header_project_logo.svg";
import question_arrow from "../../Image/header_question_arrow.svg";
import $ from 'jquery';

$(function(){
    var faq_area = $(".faq-area");
  
    faq_area.each(function(){
      var _faqarea = new GroupBox(this);
    });
  
    function GroupBox(groupElement){
      var box = $(groupElement).find(".box");
      var question = $(groupElement).find(".question p");
  
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

const arrow = document.getElementsByClassName('arrow')[0];
let box_toggle = 0;

function toggle_animation(){
    if(box_toggle == 0){
        arrow.classList.remove('close');
        arrow.classList.add('open');
        box_toggle = 1;
        console.log(box_toggle);
    }
    else if(box_toggle == 1){
        arrow.classList.remove('open');
        arrow.classList.add('close');
        box_toggle = 0;
        console.log(box_toggle);
    }
}

const Header = () => {
    return(
        <div id="root_header">
            <img id="header_project_logo" src={project_logo_svg}></img>
            <p id="header_title">원숭이두창 실시간 정보 사이트</p>
            <div className="faq-area">
                <div className="box" onClick={toggle_animation}>
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
                        2급감염병으로 지정하고 감시를 강화하고 있습니다.
                        <br></br>
                        <br></br>
                        <br></br>
                        <p>
                        [외부링크]<br></br>
                        <a>대한민국 질병관리청</a><br></br>
                        <a>세계보건기구(World Health Organization)</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;