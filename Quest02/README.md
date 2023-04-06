# Quest 02. CSS의 기초와 응용

## Introduction

- CSS는 Cascading StyleSheet의 약자입니다. 웹브라우저에 표시되는 HTML 문서의 스타일을 지정하는 (거의) 유일하지만 다루기 쉽지 않은 언어입니다. 이번 퀘스트를 통해 CSS의 기초적인 레이아웃 작성법을 알아볼 예정입니다.

## Topics

- CSS의 기초 문법과 적용 방법
  - Inline, `<style>`, `<link rel="stylesheet" href="...">`
- CSS 규칙의 우선순위
- 박스 모델과 레이아웃 요소
  - 박스 모델: `width`, `height`, `margin`, `padding`, `border`, `box-sizing`
  - `position`, `left`, `top`, `display`
  - CSS Flexbox와 Grid
- CSS 표준의 역사
- 브라우저별 Developer tools

## Resources

- [MDN - CSS](https://developer.mozilla.org/ko/docs/Web/CSS)
- [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)
- [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [그리드 레이아웃과 다른 레이아웃 방법과의 관계](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout/%EA%B7%B8%EB%A6%AC%EB%93%9C_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83%EA%B3%BC_%EB%8B%A4%EB%A5%B8_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83_%EB%B0%A9%EB%B2%95%EA%B3%BC%EC%9D%98_%EA%B4%80%EA%B3%84)

## Checklist

- CSS를 HTML에 적용하는 세 가지 방법은 무엇일까요?

인라인 스타일(iline style)은 HTML요소 내부에 style속성을 사용하여 css 스타일을 적용하는 방법으로 해당 요소에만 스타일을 적용할 수 있다. 내부 스타일 시트(internal style sheet)는 HTML문서 내의 <head> 태그에 <style>태그를 사용하요 CSS스타일을 적용하고, 해당 HTML 문서에만 스타일을 적용할 수 있다. 외부 스타일 시트(External style sheet)는 웹 사이트 전체의 스타일을 하나의 파일에 변경할 수 있도록하고, 이러한 스타일 시트 파일은 .css 확장자를 사용하여 저장된다.

- 세 가지 방법 각각의 장단점은 무엇일까요?

인라인 스타일(Inline Style)의 장점은 직관적으로 사용이 가능하다는 장점이 있다. 단점은 내용과 스타일이 분리되지 않고, 스타일 일괄변경의 효율성이 떨어진다. 외부 스타일 시트(Externaㅣ Style Sheet)의 장점은 홈페이지 전체의 스타일을 일관성 있게 유지하면서 변경을 해야 할 경우에도 일괄적으로 변경할 수 있기 때문에 홈페이지 제작의 효율성을 극대화 시킬 수 있다. 단점은 외부 스타일 시트 파일을 계속 관리해줘야해서 불편하고, css파일을 관리해줘야한다. 내부 스타일 시트 (Internel Style Sheet)의 장점은 HTML문서 안에 여러가지 요소를 한번에 꾸밀 수 있다. 단점은 또 다른 HTML문서에는 적용을 하지 못한다.

- CSS 규칙의 우선순위는 어떻게 결정될까요?

1. 속성 값 뒤에 !important를 붙인 속성 ->우선순위를 무시하고 적용된다. 2. HTML에서 style을 직접 지정한 속성. 3. #id로 지정한 속성. 4. .클래스, 추상클래스로 지정한 속성 5. 태그이름으로 지정한 속성. 6. 상위 객체에 의해 상속된 속성.

- CSS의 박스모델은 무엇일까요? 박스가 화면에서 차지하는 크기는 어떻게 결정될까요?
  CSS Box Model은 HTML 요소가 웹 페이지에서 차지하는 공간을 정의한 모델로서, HTML 요소들은 각각 자신만의 영역을 갖고 있으며, 각 영역은 다시 여러개의 작은 영역으로 나뉘는데, 이 요소는 가운데 실제 요소의 내용이 담기는 부분인 content, 요소를 감싸는 경계인 boder, 내용 사이의 영역인 padding, 경계 바깥의 영역인 margin으로 구성된다. 박스가 화면에 차지하는 크기를 결정할 때 content 영역의 크기는 width, min-width, height, min-height, max-height 속성을 통해서 명시적으로 설정할 수 있다. pedding 영역의 두께는 padding-top, padding-right, padding-bottom, padding-left와 단축 속성인 padding이 결정한다. boder 영역의 두께는 border-width와 단축 속성인 border가 결정한다. margin 영역의 크기는 margin-top, margin-right, margin-botto,. margin-left와 단축 속성인 margin이 결정한다. 하지만 여벽 상쇄가 발생할 때는 요소 간에 바깥 여백이 공유되므로 여백 영역이 명확하게 결정되지 않는다.

- `float` 속성은 왜 좋지 않을까요?
  float를 이용한 레이아웃을 작성할 때, 부모 요소가 자식 요소의 크기를 반영하지 못하는 문제가 있어서 자식요소에 float을 설정하면 부모요소의 높이가 초기화되어 버린다.

- Flexbox(Flexible box)와 CSS Grid의 차이와 장단점은 무엇일까요?

flexbox와 grid에서 flex는 1차원의 행 혹은 열의 레이아웃을 염두하고 설계되었고, grid는 행과 열 모두를 염두한 2차원 레이아웃을 고려해서 설계되었다는 차이점이 있다. flexbox의 장점은 모든 방향으로 정렬이 가능하고, reverse도 가능하고, container로 사용할 경우, 하위 item들을 정렬하기 쉽다. 단점으로는 퍼포먼스 이슈가 있따. grid의 장점은 prototyping할 때 매우 쉽고 효율적으로 간단하게 작성하여 2차원의 레이아웃을 관리할 수 있다. 단점은 모든 브라우저에서 지원하는 것이 아니다.

- CSS의 비슷한 요소들을 어떤 식으로 정리할 수 있을까요?
<div>나 <span> 태그를 이용해서 변경하고 싶은 부분을 감싸준다.

## Quest

- Quest 01에서 만들었던 HTML을 바탕으로, [이 그림](screen.png)의 레이아웃과 CSS를 최대한 비슷하게 흉내내 보세요. 꼭 완벽히 정확할 필요는 없으나 align 등의 속성은 일치해야 합니다.
- **주의사항: 되도록이면 원래 페이지의 CSS를 참고하지 말고 아무것도 없는 백지에서 시작해 보도록 노력해 보세요!**

## Advanced

- 왜 CSS는 어려울까요?
- CSS의 어려움을 극복하기 위해 어떤 방법들이 제시되고 나왔을까요?
- CSS가 브라우저에 의해 해석되고 적용되기까지 내부적으로 어떤 과정을 거칠까요?
- 웹 폰트의 경우에는 브라우저 엔진 별로 어떤 과정을 통해 렌더링 될까요?
