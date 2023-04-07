# Quest 07. node.js의 기초

## Introduction

- 이번 퀘스트에서는 node.js의 기본적인 구조와 개념에 대해 알아 보겠습니다.

## Topics

- node.js
- npm
- CommonJS와 ES Modules

## Resources

- [About node.js](https://nodejs.org/ko/about/)
- [Node.js의 아키텍쳐](https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174356/node-js%EC%9D%98-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90)
- [npm](https://docs.npmjs.com/about-npm)
- [npm CLI commands](https://docs.npmjs.com/cli/v7/commands)
- [npm - package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
- [How NodeJS Require works!](https://www.thirdrocktechkno.com/blog/how-nodejs-require-works)
- [MDN - JavaScript Modules](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
- [require vs import](https://www.geeksforgeeks.org/difference-between-node-js-require-and-es6-import-and-export/)

## Checklist

- node.js는 무엇인가요? node.js의 내부는 어떻게 구성되어 있을까요?

node.js는 자바스크립트를 브라우저 밖에서도 실행할 수 있도록 하는 비동기 이벤트 주도 자바스크립트의 런타임이고 확장성이 있는 네트워크 애플리케이션을 만들 수 있도록 설계되어있다. node.js는 내장 코어 라이브러리와 v8엔진, bindings 그리고 libuv로 구성되어 있다.

- npm이 무엇인가요? `package.json` 파일은 어떤 필드들로 구성되어 있나요?

npm(node packaged manager)은 노드 패키지를 관리해주는 틀이다. 즉, node.js로 만들어진 모듈을 웹에서 받아 설치하고 관리해주는 프로그램이다. 이것을 이용하면 좀 더 효율적으로 서버를 구축할 수 있는데, 문제점은 패키지들이 서로 의존되어 있어서, 하나의 문제가 발생하면 다른 것들까지 가능하지 않을 수 있다. 그래서 이를 관리하기 위해 package.json을 사용한다. package.json 파일은 패키지의 이름을 나타내는 name, 이 패키지의 버전을 나타내는 version, 문자열로 기술한 패키지에 대한 설명인 description, 패키지의 진입점이 되는 모듈의 ID인 main, 패키지의 생명주기에서 다양한 타이밍에 자주 사용할 command를 별칭을 지정해 둘 수 있는 dictionary인 script, 키워드를 문자열 배열로 설명하는 keyword, 배포자 한 사람을 위한 필드인 author, 배포자 패키지에 대해 패키지 사용자가 패키지를 사용하는데 어떤 권한과 제한 사항이 있는지 알기 위한 license로 구성되어있다.

- npx는 어떤 명령인가요? npm 패키지를 `-g` 옵션을 통해 글로벌로 저장하는 것과 그렇지 않은 것은 어떻게 다른가요?

npx는 명령줄에서 직접 로컬로 설치된 명령줄 도구를 실행할 수 있도록하는 npm에서 제공하는 명령어/툴이다. npm -g 옵션을 통해서 글로벌로 저장을 하면 전역에 패키지를 설치하는 것이고, 전역으로 설치된 패키지는 전역에서 참조할 수 있다. 그러므로 모든 프로젝트가 공통 사용하는 패키지는 전역에 설치한다. 만약 그렇지 않고 지역에 설치를 하면 프로젝트 루트 디렉터리에 node_module디렉토리가 자동생성되고 그 안에 패키지가 설치된다. 또한 지역으로 설치된 패키지는 해당 프로젝트 내에서만 사용할 수 있다.

- 자바스크립트 코드에서 다른 파일의 코드를 부르는 시도들은 지금까지 어떤 것이 있었을까요? CommonJS 대신 ES Modules가 등장한 이유는 무엇일까요?

자바스크립트 코드에서 다른 파일의 코드를 부르는 모듈 시스템들의 종류로는 서버사이드에서 사용가능하고 동기적으로 작동하는 CJS, 클라이언트에서 주로 사용하고 비동기적으로 작동하는 AMD, AMD와 CommonJS가 서로 호환되지 않는 문제를 해결하기 위한 API인 UMD, 자바스크립트 언어 자체에서 모듈을 탑제한 ESM 등이 존재한다. Common JS와 비교하여 ES modules는 비동기로 동작하여 속도가 빠르고 실제 사용되는 부분만을 import하여 메모리를 적게 차지하며, 가독성이 좋고 순환 의존성을 지원한다는 장점이 있기 때문이다.

- ES Modules는 기존의 `require()`와 동작상에 어떤 차이가 있을까요? CommonJS는 할 수 있으나 ES Modules가 할 수 없는 일에는 어떤 것이 있을까요?
  ES Modules의 동작 방식은 지정한 파일을 entry point로 하여 나머지 파일들을 import문을 따라가며 찾는다. 파일을 브라우저에서 사용하려면 모듈 레코드라는 과정이 필요하고 이후 모듈 레코드를 모듈 인스턴스로 변환해야한다. 모듈을 불러오는 과정은 enty 파일이 모듈 인스턴스 전체 그래프를 그리면서 진행되는데, 그 과정은 크게 구성,인스턴스화 ,평가로 이루어진다. 구성은 모든 파일을 확인하고 다운로드하고 모듈 레코드로 구문분석을 하고, 인스턴스화는 export된 값을 위해 메모리의 공간을 찾고 export,import를 해당 공간에 linking하고, 평가는 코드를 실행하여 변수의 실제 값을 채운다. 하지만 common JS는 파일을 import 순서에 따라 순차적으로 완전 실행하므로 변수 값을 할당할 수 있고 변수에 linking시 export 값을 사본으로 복사하여 사용하기 때문에 export, import하는 변수가 다르다. CommonJS에서는 require을 사용하여 외부 라이브러리를 불러올 수 있지만 있지만 ES Modules에서는 require을 사용하여 외부 라이브러리를 불러올 수 없다.

- node.js에서 ES Modules를 사용하려면 어떻게 해야 할까요? ES Modules 기반의 코드에서 CommonJS 기반의 패키지를 불러오려면 어떻게 해야 할까요? 그 반대는 어떻게 될까요?

node.js에서 ES모듈을 사용하는 방법 중 파일 단위로 ES모듈 적용을 하는 방법은 파일의 확장자를 js대신에 mjs를 사용하는 것이다. 또한 프로젝트 단위로 ES 모듈을 적용하는 방법은 package.json 파일 설정을 통해 전체 파일에 적용하는 것인데, 이 방법은 모든 파일의 확장자를 일일이 바꾸지 않고, 프로젝트 전체에 ES모듈을 적용하고 싶을 때 적용하는 방법이다. CommomJS에서 require을 이용하여서 ES Modules기반 패키지를 불러올 수 있고, ES Modules에서 import를 이용해서 CommonJS 기반 패키지를 불러올 수 있다.

## Quest

- 스켈레톤 코드에는 다음과 같은 네 개의 패키지가 있으며, 용도는 다음과 같습니다:
  - `cjs-package`: CommonJS 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  - `esm-package`: ES Modules 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  - `cjs-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, CommonJS 기반의 프로젝트입니다.
  - `esm-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, ES Modules 기반의 프로젝트입니다.
- 각각의 패키지의 `package.json`과 `index.js` 또는 `index.mjs` 파일을 수정하여, 각각의 `*-my-project`들이 `*-package`에 노출된 함수와 클래스를 활용할 수 있도록 만들어 보세요.

## Advanced

- node.js 외의 자바스크립트 런타임에는 어떤 것이 있을까요?
