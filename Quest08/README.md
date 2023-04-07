# Quest 08. 웹 API의 기초

## Introduction

- 이번 퀘스트에서는 웹 API 서버의 기초를 알아보겠습니다.

## Topics

- HTTP Method
- node.js `http` module
  - `req`와 `res` 객체

## Resources

- [MDN - Content-Type Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
- [MDN - HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [MDN - MIME Type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type)
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
- [HTTP Node.js Manual & Documentation](https://nodejs.org/api/http.html)

## Checklist

- HTTP의 GET과 POST 메소드는 어떻게 다른가요?

get요청은 만약 중요한 정보가 있다면 파라미터에 다 노출이 된다. 하지만 post는 전송할 데이터를 http 메세지의 body부분에 담아서 보내기 때문에 get메세지 보다 보안적으로 좋다. 또한 get은 서버의 리소스에 데이터를 요청할 때 사용하고, post는 서버의 리소스를 새로 생성하거나 업데이트 할 때 사용한다.

- 다른 HTTP 메소드에는 무엇이 있나요?

get메서드의 요청과 동일한 응답을 요구하지만 응답 본문을 포함하지 않는 head, 목적 리소스 모든 현재 표시를 요청 payload로 바꾸는 put, 특정 리소스를 삭제하는 delete, 목적 리소스로 식별되는 서버로의 터널을 맺는 connect, 목적 리소스의 통신을 설정하는 options, 목적 리소스의 경로를 따라 메서지 loop-back 테스트를 하는 trace, 리소스의 부분만을 수정하는 patch가 있다.

- HTTP 서버에 GET과 POST를 통해 데이터를 보내려면 어떻게 해야 하나요?

get방식으로 데이터를 보내려면 보내려는 데이터를 URL뒤에 ?를 통해서 URL의 끝을 알리면서 데이터 표현의 시작점을 알리는 마크를 붙여서 보낸다. post는 데이터를 URL에 붙여 보내지 않고, body에다가 데이터를 넣어서 보낸다. 그렇기 때문에 body의 데이터를 설명하는 content-type이라는 헤더 필드가 들어가고 어떤 데이터 타입인지를 가르쳐준다.

- HTTP 요청의 `Content-Type` 헤더는 무엇인가요?

content-Tpye은 HTTP메세지 요청과 응답 모두에 담겨 보내는 데이터의 형식을 알려주는 헤더이다. HTTP 표준 스펙을 따르는 브라우저와 웹서버는 Content-Type헤더를 기준으로 HTTP메세지에 담긴 데이터를 분석 파싱한다.

- Postman에서 POST 요청을 보내는 여러 가지 방법(`form-data`, `x-www-form-urlencoded`, `raw`, `binary`) 각각은 어떤 용도를 가지고 있나요?

Form-data인 양식 데이터는 양식을 채울 때 입력 한 세부 정보와 같이 양숙 내부에 래핑하는 데이터를 보내는데 사용된다. 세부정보는 key와 value 쌍으로 작성되어 전송되는데, key는 보내는 항목의 이름으로 value는 실제 값을 입력하면 된다. x-www-form-urlencoded는 Form Data와 거의 동일한 목적으로 사용되지만, 차이점은 URL이 x-www-form-urlencoded를 통해 전송 될 때 인코딩된다. raw는 본문 메세지가 요청 본문을 나타내는 비트스트림으로 표시됨을 의미한다. 이러한 비트는 문자열 서버로 해석된다. Binary는 수동으로 입력할 수 없는 형식으로 데이터를 전송하도록 설계되었는데, 컴퓨터의 모든 것이 바이너리로 변환되기 때문에 이미지, 파일 등과 같이 수동으로 작성할 수 없는 상활일 때 이러한 옵션을 사용한다.

- node.js의 `http` 모듈을 통해 HTTP 요청을 처리할 때,
  - `req`와 `res` 객체에는 어떤 정보가 담겨있을까요?

req 객체는 브라우저에서 요청한 값들에 대한 정보가 담겨있고, res에는 서버가 브라우저에게 응답하는 정보가 담겨있다.

- GET과 POST에 대한 처리 형태가 달라지는 이유는 무엇인가요?

get 요청은 URL의 Query String을 통해서 전송되기 때문에 URL 모듈을 이용하여 URL을 파싱하여 get요청을 처리할 수 있지만 Post는 body로부터 데이터를 전송하기 때문에 req.on()을 사용하여 전송된 데이터를 받고, 전송된 데이터는 문자열 형태의 QueryString이므로 quertspring 모듈인 'parse()' 함수를 사용하여 문자열 형태로 전송된 데이터를 객체로 변환한다.

- 만약 API 엔드포인트(URL)가 아주 많다고 한다면, HTTP POST 요청의 `Content-Type` 헤더에 따라 다른 방식으로 동작하는 서버를 어떻게 정리하면 좋을까요?

middleWare에서 parsing하는 부분을 더 효율적으로 구상하거나 content-type을 json방식 혹은 x-www-url-encoded(url-encoded)방식으로 제공하는 두개의 method를 구성하는 등 지원하는 data형식을 확인한다.

- 그 밖에 서버가 요청들에 따라 공통적으로 처리하는 일에는 무엇이 있을까요? 이를 어떻게 정리하면 좋을까요?

http module을 사용한다면 res인자에 server응답 정보가 담겨져오고, 거기서 res인자를 parsing하여, client가 어떠한 가공된 정보를 받아야하는지 결정하고 구현한다.

## Quest

- 다음의 동작을 하는 서버를 만들어 보세요.
  - 브라우저의 주소창에 `http://localhost:8080`을 치면 `Hello World!`를 응답하여 브라우저에 출력합니다.
  - 서버의 `/foo` URL에 `bar` 변수로 임의의 문자열을 GET 메소드로 보내면, `Hello, [문자열]`을 출력합니다.
  - 서버의 `/foo` URL에 `bar` 키에 임의의 문자열 값을 갖는 JSON 객체를 POST 메소드로 보내면, `Hello, [문자열]`을 출력합니다.
  - 서버의 `/pic/upload` URL에 그림 파일을 POST 하면 서버에 보안상 적절한 방법으로 파일이 업로드 됩니다.
  - 서버의 `/pic/show` URL을 GET 하면 브라우저에 위에 업로드한 그림이 뜹니다.
  - 서버의 `/pic/download` URL을 GET 하면 브라우저에 위에 업로드한 그림이 `pic.jpg`라는 이름으로 다운로드 됩니다.
- expressJS와 같은 외부 프레임워크를 사용하지 않고, node.js의 기본 모듈만을 사용해서 만들어 보세요.
- 처리하는 요청의 종류에 따라 공통적으로 나타나는 코드를 정리해 보세요.

## Advanced

- 서버가 파일 업로드를 지원할 때 보안상 주의할 점에는 무엇이 있을까요?
