# Quest 03. 자바스크립트와 DOM

## Introduction

- 자바스크립트는 현재 웹 생태계의 근간인 프로그래밍 언어입니다. 이번 퀘스트에서는 자바스크립트의 기본적인 문법과, 자바스크립트를 통해 브라우저의 실제 DOM 노드를 조작하는 법에 대하여 알아볼 예정입니다.

## Topics

- 자바스크립트의 역사
- 기본 자바스크립트 문법
- DOM API
  - `document` 객체
  - `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()` 함수들
  - 기타 DOM 조작을 위한 함수와 속성들
- 변수의 스코프
  - `var`, `let`, `const`

## Resources

- [자바스크립트 첫걸음](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps)
- [자바스크립트 구성요소](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks)
- [Just JavaScript](https://justjavascript.com/)

## Checklist

- 자바스크립트는 버전별로 어떻게 변화하고 발전해 왔을까요?

ES1 -> ES2 -> ES3 -> ES4 -> ES5 ->ES6/ES2015 -> ES7/ES2016 -> ES8/ES2017 -> ES9/ES2018. ES6은 class, template tag, arrow funtion 등과 같은 새로운 개녕들이 나왔다. ES7은 어레이 포함 여부는 indexOf()!==-1하던 것을 includes()함수로 대처할 수 있게되었고, \*\*연산자가 추가되었다. ES8의 특징은 String padding, Object.values and Object.entrise, Object.getOwnPropertyDescriptors, Trailing commas in function parameter lists and calls, Async functions가 있다. ES9의 특징은 Object Reset/Spread, Promise finally, Async iteration, 정규표현식이 있다.

- 자바스크립트의 버전들을 가리키는 ES5, ES6, ES2016, ES2017 등은 무엇을 이야기할까요?

ECMAScript 또는 ES인 ECMA스크립트는 자바스크립트를 표준화 하기위해 만들어진, ECMA-262 기술 규격에 따라 정의하고 있는 표준화된 스크립트 프로그래밍 언어이다.

- 자바스크립트의 표준은 어떻게 제정될까요?

Ecma 인터내셔널이라고 불리는 표준화 기구에서 제정한 ECMA-262 스크립트가 자바스크립트 표준으로 제정되었다.

- 자바스크립트의 문법은 다른 언어들과 비교해 어떤 특징이 있을까요?

자바스크립트는 자바와 같이 객체지향언어이지만 java와 다르게 클래스라는 개념이 없는 동적 프로토 타입기반 객체 지향 언어이다.그렇기 때문에 실행환경에서 추가적인 환경 설정이 필요없이 브라우저 동작에 따라가고, 변수 자료형을 미리 선언하지 않아도 브라우저가 자동으로 파악, 텍스트로 쓰인 코드로 실행될 수 있고, 다양한 웹 브라우저에서 이용되며, 자바스크립트가 실행되려면 HTML,CSS에 의존해야한다. 또한 자바스크립트는 c++과 다르게 코드를 동기적, 순서대로 실행하지 않는 싱글스레드 기반 비동기 처리를 하고 자바스크립트 엔진은 memort heap과 call stack을 가지고 있다.

- 자바스크립트에서 반복문을 돌리는 방법은 어떤 것들이 있을까요?
  for문 : for(초기문;초건문;증감문), do..while문 : do문장 while(조건문), while문 : while(조건문) 문장, for..in문 : for(variable in objcet){stataments}, for.. of문 for(variable of object){statement}

- 자바스크립트를 통해 DOM 객체에 CSS Class를 주거나 없애려면 어떻게 해야 하나요?

Element.classList.add로 클래스를 추가할 수 있고, Element.classList.remove로 클래스를 제거할 수 있다.

- IE9나 그 이전의 옛날 브라우저들에서는 어떻게 해야 하나요?
  IE9이나 그 이전의 옛날 브라우저에서는 classList 속성이 지원이 안되므로 devongovett과 eligrey 두가지 호환용 스크리브트를 페이지에 포함시키고 IE를 작용하면 IE9이하 버전에서도 사용할 수 있다.

- 자바스크립트의 변수가 유효한 범위는 어떻게 결정되나요?

지역변수는 함수 내에서 선언된 변수를 가리키는데, 이러한 지역 변수는 변수가 선언된 함수 내에서만 유효하고, 함수가 종료되면 메모리에서 사라진다. 전역 변수는 함수의 외부에서 선언된 변수로, 이러한 전역 변수는 프로그램의 어느 영역에서나 접근할 수 있고, 웹 페이지가 닫혀야만 메모리에서 사라진다.

- `var`과 `let`으로 변수를 정의하는 방법들은 어떻게 다르게 동작하나요?
  var변수가 함수외부에서 선언될 때의 범위는 전역이다. 즉, 함수블록 외부에서 var를 사용하여 선언한 모든 변수를 전체 윈도우 상에서 사용할 수 있다. 또한 var 변수는 재선언되고, 업데이트 될 수 있다. let으로 선언된 변수는 해당 블록 내에서만 사용이 가능하다. 또한 let 함수는 업데이트는 될 수 있지만, 재선언은 불가능하다.

- 자바스크립트의 익명 함수는 무엇인가요?

자바스크립트의 익명 함수는 함수명 대신 변수명에 함수 코드를 저장하는 구현 방식으로, 변수에 함수의 코드를 저장하는 대신 함수명을 사용하지 않는다. 대신 변수명을 마치 함수명처럼 사용해서 함수를 호출하거나 변수값을 이동시키는데 사용할 수 있다.

- 자바스크립트의 Arrow function은 무엇일까요?

자바스크립트의 Arrow.function인 화살표 함수는 함수 키워드 대신 화살표를 사용하여 보다 간략한 방법으로 함수를 선언할 수 있지만 익명의 함수로만 사용할 수 있다. 그렇기 때문에 화살표 함수를 호출하기 위해서는 함수 표현식을 사용해야 한다. 또한 화살표 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되기 때문에 동적으로 결정되는 일반 함수와는 달리 화살표 함수의 this는 언제나 상위 스코프의 this를 가리킨다.

## Quest

- (Quest 03-1) 초보 프로그래머의 영원한 친구, 별찍기 프로그램입니다.
  - [이 그림](jsStars.png)과 같이, 입력한 숫자만큼 삼각형 모양으로 콘솔에 별을 그리는 퀘스트 입니다.
    - 줄 수를 입력받고 그 줄 수만큼 별을 그리면 됩니다. 위의 그림은 5를 입력받았을 때의 결과입니다.
  - `if`와 `for`와 `function`을 다양하게 써서 프로그래밍 하면 더 좋은 코드가 나올 수 있을까요?
  - 입력은 `prompt()` 함수를 통해 받을 수 있습니다.
  - 출력은 `console.log()` 함수를 통해 할 수 있습니다.
- (Quest 03-2) skeleton 디렉토리에 주어진 HTML을 조작하는 스크립트를 완성해 보세요.
  - 첫째 줄에 있는 사각형의 박스들을 클릭할 때마다 배경색이 노란색↔흰색으로 토글되어야 합니다.
  - 둘째 줄에 있는 사각형의 박스들을 클릭할 때마다 `enabled`라는 이름의 CSS Class가 클릭된 DOM 노드에 추가되거나 제거되어야 합니다.
- 구현에는 여러 가지 방법이 있으나, 다른 곳은 건드리지 않고 TODO 부분만 고치는 방향으로 하시는 것을 권장해 드립니다.

## Advanced

- Quest 03-1의 코드를 더 구조화하고, 중복을 제거하고, 각각의 코드 블록이 한 가지 일을 전문적으로 잘하게 하려면 어떻게 해야 할까요?
- Quest 03-2의 스켈레톤 코드에서 `let` 대신 `var`로 바뀐다면 어떤 식으로 구현할 수 있을까요?
