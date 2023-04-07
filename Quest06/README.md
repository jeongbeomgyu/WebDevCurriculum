# Quest 06. 인터넷의 이해

## Introduction

- 이번 퀘스트에서는 인터넷이 어떻게 동작하며, 서버와 클라이언트, 웹 브라우저 등의 역할은 무엇인지 알아보겠습니다.

## Topics

- 서버와 클라이언트, 그리고 웹 브라우저
- 인터넷을 구성하는 여러 가지 프로토콜
  - IP
  - TCP
  - HTTP
- DNS

## Resources

- [OSI 모형](https://ko.wikipedia.org/wiki/OSI_%EB%AA%A8%ED%98%95)
- [IP](https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%84%B0%EB%84%B7_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)
  - [Online service Traceroute](http://ping.eu/traceroute/)
- [TCP](https://ko.wikipedia.org/wiki/%EC%A0%84%EC%86%A1_%EC%A0%9C%EC%96%B4_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)
  - [Wireshark](https://www.wireshark.org/download.html)
- [HTTP](https://ko.wikipedia.org/wiki/HTTP)
  - Chrome developer tool, Network tab
- [DNS](https://ko.wikipedia.org/wiki/%EB%8F%84%EB%A9%94%EC%9D%B8_%EB%84%A4%EC%9E%84_%EC%8B%9C%EC%8A%A4%ED%85%9C)
  - [Web-based Dig](http://networking.ringofsaturn.com/Tools/dig.php)

## Checklist

- 인터넷은 어떻게 동작하나요? Internet Protocol Suite의 레이어 모델에 입각하여 설명해 보세요.

로컬 Pc가 인터넷에 접근할 때, 인터넷 영역에서의 수많은 라우팅을 관리하는 Hob이 필요하며, 최종적으로 인터넷 사이트에 해당하는 라우터에 접근한다. 일반적으로 상대의 목적지 IP주소는 특정 값으로 정해지지만, 인터넷의 경우엔 0.0.0.0으로 특정지어지지 않는다. 라우팅 경로가 정해져 있는 정적라우팅과 달리, 네트워크 상황에 따라 정보를 빠르게 확보할 수 있는 경로를 중심으로 패킷을 전송하는 라우팅이다. 만약 데이터 정보에 포함된 목적지 주소가 인터넷처럼 광범위 하거나, 정적 라우팅을 통한 탐색이 불가능할 경우, 동적 라우팅을 통해 데이터 전달을 진행한다.

- 근거리에서 서로 떨어진 두 전자기기가 유선/무선으로 서로 통신하는 프로토콜은 어떻게 동작할까요?

근거리에 놓여진 두 기기의 네트워크 대역은 보통 정적 라우팅을 통해 연결하며, 라우팅테이블에 저장된 두 기기의 IP와 POST 정보를 통해 데이터 전달이 이루어진다. 만약 와이파이를 통해 연결한다면 무선 공유기를 통한 라우팅을 진행할 것이고, 블루투스를 통해 연결한다면 BLE stack 프로토콜을 기반으로 통신을 진행할 것이다.

- 근거리에 있는 여러 대의 전자기기가 서로 통신하는 프로토콜은 어떻게 동작할까요?

비교적 근거리에 있는 여러 대의 전자기기들을 LAN통신 프로토콜을 이용해서 통신한다. 그 중 LAN통신 프로토콜인 CMSA/CD의 동작방식은 전송을 원하는 호스트가 네트워크에 캐리어를 감지해 전송이 가능한지 검사를 하고, 전송이 가능한 경우 브로드캐스트를 통해서 원하는 호스트를 찾아낸다. 그 다음 전송을 한다.

- 아주 멀리 떨어져 있는 두 전자기기가 유선/무선으로 서로 통신하는 프로토콜은 어떻게 동작할까요?

멀리 떨어져 있는 기기의 경우에는 근거리 대역의 네트워크가 없기 때문에 라우팅 테이블 작성이 어렵다. 그렇기 때문에 인터넷과 같은 Hob라는 지역 통신사를 통한 데이터 전달이 이루어진다.

- 두 전자기기가 신뢰성을 가지고 통신할 수 있도록 하기 위한 프로토콜은 어떻게 동작할까요?

웹과 사용자간의 대표적인 통신 규약인 HTTP는, SSL인증을 적용한 HTTPS포로토콜을 사용한 것이 가장 대표적인 보안 적용이다. 또한HTTP프로토콜을 통한 데이터 통신 과정에 SSL/TLS암호화 방식인 양방향 암호화를 적용하여 상대적으로 안전한 데이터 전달이 가능하도록 한 방식이다.

- HTTP는 어떻게 동작할까요?

서버를 통해 운용되는 HTML문서인 웹과 사용자 간 정보를 주고받기 위하여 사용하는 통신규약이고, 개발자가 구성한 알고리즘 및 문서구성인 HTML에 따라 데이터 및 헤더에 데이터를 저장하고, requst와reponse를 기반으로 웹사이트 동작이 이루어진다.

- 우리가 브라우저의 주소 창에 www.knowre.com 을 쳤을 때, 어떤 과정을 통해 서버의 IP 주소를 알게 될까요?

1. 브라우저의 URL 파싱
   www.knowre.com이라는 URL을 입력받은 브라우저는 이 URL의 구조를 해석한다. 즉 어떤 프로토콜로 어느 도메인에 보낼지를 해석한다. 위의 URL은 프로토콜과 포트를 입력하지 않았으므로 브라우저에서 설정한 기본값을 이용해서 포트를 요청한다.
2. HSTS목록 조회
   브라우저에서 HSTS 목록 조회를 통해 해당 요청을 HTTPS로 보낼지 판단한다. HSTS 목록에 해당 URL이 존재한다면 명식적으로 HTTP를 통해 요청한다 해도 브라우저가 이를 HTTPS로 요청한다.
3. URL을 IP주소로 변환
   www.knowre.com이라는 주소로는 컴퓨터끼리 통신을 할 수 없으므로 브라우저에서 자신의 로컬 hosts파일과 브라우저 캐시에 해당 URL이 존재하는지 확인한다. 존재하지 않는 다면 도메인 주소를 IP주소로 변환해주는 DNS서버에 요청하여 해당 URL을 IP주소로 변환한다. DNS 서버로 요청하는 과정은 1. 미리 설정된 Local DNS에 www.knowre.com의 ip주소를 요청한다. 2. Local DNS에 해당 IP주소가 존재한다면 이를 응답하고, 없다면 다른 DNS 서버와 통신한다. 즉, root DNS서버에 www.knowre.com의 IP주소를 요청한다. 3. root DNS서버에 해당 IP주소가 없다면 하위 DNS서버에 요청하라고 응답한다. 이 응답을 받은 Local DNS는 .net 도메인을 관리하는 DNS서버에 같은 내용을 요청한다. 4. .net DNS 서버에 해당 IP주소가 없다면 하위 DNS서버에 요청하라고 응답한다. 이 응답을 받은 Local DNS는 knowre.com 도메인을 관리하는 DNS서버에 같은 내용을 요청한다. 5. knowre.com DNS서버에서 IP주소를 응답받은 Local DNS는 해당 IP주소를 캐싱하고 응답한다.

## Quest

- tracert(Windows가 아닌 경우 traceroute) 명령을 통해 www.google.com 까지 가는 경로를 찾아 보세요.

  - 어떤 IP주소들이 있나요?

    172.30.1.254/112.160.124.89/112.190.49.89/112.190.34.217/112.174.90.34등 12군데를 거쳐서 구글 서버 (142.250.207.100)에 도착했다.

  - 그 IP주소들은 어디에 위치해 있나요?

  sin01s16-in-f4.1e100.net에 위치한다.

- Wireshark를 통해 www.google.com 으로 요청을 날렸을 떄 어떤 TCP 패킷이 오가는지 확인해 보세요

  - TCP 패킷을 주고받는 과정은 어떻게 되나요?

  3 way handshake를 통해서 연결을 맺는다. 내 PC에서 구글 서버로 syn패킷을 전송하고, 구글 서버가 이에대한 syn,ack 패킷을 보낸다. 그러면 내 PC에서 다시 구글 서버로 ack 패킷을 보내면 서버와 연결이 된다.

  - 각각의 패킷에 어떤 정보들이 담겨 있나요?

  내 PC에서 보낸 Syn에는 Synchronize Sequence Number라는 임의의 랜덤 숫자가 들어가있다.
  서버의 ack에는 내가 보낸 syn에 +1을 더한 값과 Synchronize Sequence Number라는 임의의 랜덤 숫자가 들어있는 syn을 보낸다. 내 pc에서 보낸 ack에는 서버에서 받은 syn 에 +1을 한 값을 넣어서 서버에게 보낸다.

- telnet 명령을 통해 http://www.google.com/ URL에 HTTP 요청을 날려 보세요.

  - 어떤 헤더들이 있나요?

  data, connect, cache-control, content-type, exprires, server, set-cookie, accept-ranges, vary, trnafer-encoding등이 있다.

  - 그 헤더들은 어떤 역할을 하나요?
    data는 http 메서지 생성 일자를 나타낸다. connection은 server/cliner 간의 연결 옵션을 나타낸다. cache-control은 쿠기/캐시 관련 정보를 나타낸다. content-type은 미디어 타입 정보를 나타낸다. expries는 리소스 짖ㅇ된 일시까지 유효함을 나타낸다. server는 서버의 정보를 나타낸다. set-cookie는 서버측에서 클라이언트측으로 부터 세션 쿠키 정보를 설정한다. accept-ranges는 부분 요청에 지원을 알리기 위해 서버에 의해 사용되는 표식이다. vary는 캐시 된 응답을 향후 요청들에서 오리진 서버로 새로운 요청 헤더를 요청하는 대신 사용할 수 있는지 여부를 결정한다. tranfer-encording은 사용자에게 entity을 안전하게 전송하기 위해 사용하는 인코딩 형식을 지정한다.

## Advanced

- HTTP의 최신 버전인 HTTP/3는 어떤 식으로 구성되어 있을까요?
- TCP/IP 외에 전세계적인 네트워크를 구성하기 위한 다른 방식도 제안된 바 있을까요?
