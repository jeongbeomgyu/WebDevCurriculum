# Quest 12. 보안의 기초

## Introduction

- 이번 퀘스트에서는 가장 기초적인 웹 서비스 보안에 대해 알아보겠습니다.

## Topics

- XSS, CSRF, SQL Injection
- HTTPS, TLS

## Resources

- [The Basics of Web Application Security](https://martinfowler.com/articles/web-security-basics.html)
- [Website Security 101](https://spyrestudios.com/web-security-101/)
- [Web Security Fundamentals](https://www.shopify.com.ng/partners/blog/web-security-2018)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [Wikipedia - TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)

## Checklist

- 입력 데이터의 Validation을 웹 프론트엔드에서 했더라도 서버에서 또 해야 할까요? 그 이유는 무엇일까요?

웹 프론트엔드에서 수행한 검증은 사용자가 브라우저의 개발자 도구 등을 사용하여 HTML,JavaScript 코드를 수정할 수 있고, 이를 통해 검증을 우회할 수 있는 보안 문제 때문이다. 그리고 다양한 클라이언트가 서버에 연결되어 데이터를 전송할 수 있기 때문에 클라이언트가 기술 스택과 버전을 사용하며, 이를 통해 입력 데이터를 조작할 수 있기 때문이다.

- 서버로부터 받은 HTML 내용을 그대로 검증 없이 프론트엔드에 innerHTML 등을 통해 적용하면 어떤 문제점이 있을까요?

innnerHTML을 사용하여 동적으로 HTML내용을 삽입하면 XSS공격에 노출될 수 있다.

- XSS(Cross-site scripting)이란 어떤 공격기법일까요?

XSS는 웹 애플리케이션에서 많이 보이는 보안 취약점 중 하나로, 공격자가 악의적인 스크립트 코드를 삽입하여 사용자 브라우저에서 실행되게 만드는 기법이다. XSS 공격은 공격자가 입력 폼 등을 이용하여 악성 스크립트를 서버로 전송하고, 서버에서 이를 HTML에 반영하여 사용자에게 반환하는 공격인 Reflected XSS와 공격자가 웹 애플리케이션의 DB 등에 악성 스크립트를 저장하고, 이를 사용자에게 제공하는 공격인 stored XSS가 있다.

- CSRF(Cross-site request forgery)이란 어떤 공격기법일까요?

CSRF는 웹 애플리케이션에서 발생할 수 있는 보안 취약점 중 하나로, 공격자가 사용자의 인증 정보를 이용하여 악의적 요청을 전송하는 기법이다.

- SQL Injection이란 어떤 공격기법일까요?

SQL Injection은 웹 애플리케이션에서 발생할 수 있는 보안 취약점 중 하나로, 공격자 입력 폼 등을 이용하여 SQL 쿼리를 조작하여 데이터베이스에 비정상적인 요청을 보내는 기법이다.

- 대부분의 최신 브라우저에서는 HTTP 대신 HTTPS가 권장됩니다. 이유가 무엇일까요?

HTTPS는 HTTP프로토콜을 기반으로 하지만, 보안 기능을 강화하여 통신 과정에서 데이터의 기밀성, 무결성, 인증 등을 보장하기 때문이다.

- HTTPS와 TLS는 어떤 식으로 동작하나요? HTTPS는 어떤 역사를 가지고 있나요?

HTTPS는 클라이언트와 서버 간의 통신을 암호화 하기 위해 SSL/TLS 프로토콜을 사용한다. 클라이언트가 HTTPS 웹사이트에 접속하면, 서버는 클라이언트에게 SSL/TLS 인증서를 전송한다. 클라이언트는 인증서를 확인하여, 서버의 신원을 검증한다. 그 다음, 클라이언트와 서버는 SSL/TLS 핸드셰이크를 통해 공개키를 교환하고, 데이터를 암호화하여 전송한다.

- HTTPS의 서비스 과정에서 인증서는 어떤 역할을 할까요? 인증서는 어떤 체계로 되어 있을까요?
  HTTPS의 서비스 과정에서 인증서는 클라이언트와 서버 간의 통신을 암호화하고, 통신 상대방이 신뢰할 수 있는지 확인하는 역할을 한다. 인증서는 클라이언트와 서버 간의 암호화된 연결을 설정하기 위해 사용되는 SSL/TLS 프로토콜에서 사용되는 디지털 인증서이다. 인증서는 클라이언트가 서버에 연결할 때, 서버가 제공하는 공개키를 이용하여 세션 키를 암호화하고, 클라이언트와 서버 간에 공유된다. 이후에는 클라이언트와 서버 간에 주고 받는 모든 데이터가 이 세션 키를 이용하여 암호화되어 전송된다.

## Quest

- 메모장의 서버와 클라이언트에 대해, 로컬에서 발행한 인증서를 통해 HTTPS 서비스를 해 보세요.

## Advanced

- TLS의 인증서에 쓰이는 암호화 알고리즘은 어떤 종류가 있을까요?
- HTTP/3은 기존 버전과 어떻게 다를까요? HTTP의 버전 3이 나오게 된 이유는 무엇일까요?
