# Quest 13. 웹 API의 응용과 GraphQL

## Introduction

- 이번 퀘스트에서는 차세대 웹 API의 대세로 각광받고 있는 GraphQL에 대해 알아보겠습니다.

## Topics

- GraphQL
  - Schema
  - Resolver
  - DataLoader
- Apollo

## Resources

- [GraphQL](https://graphql.org/)
- [GraphQL.js](http://graphql.org/graphql-js/)
- [DataLoader](https://github.com/facebook/dataloader)
- [Apollo](https://www.apollographql.com/)

## Checklist

- GraphQL API는 무엇인가요? REST의 어떤 단점을 보완해 주나요?

GraphQL API는 Facebook에서 개발하고 공개한 데이터 쿼리 언어 및 런타임이다. Graph API는 클라이언트가 필요한 데이터를 명시적으로 요청하고 받을 수 있도록 해준다. REST API는 클라이언트가 필요한 데이터를 가져오기 위해 여러 번 요청해야 하지만, GraphQL은 클라이언트가 한 번의 요청만으로도 블로그 포스트와 작성자 정보를 동시에 가져올 수 있다. REST API에서는 백엔드에서 클라이언트가 필요하지 않은 데이터까지 모두 반환되는 경우가 있지만, GraphQL은 클라이언트가 요청한 필드만 반환하기 때문에 불필요한 데이터 전송으로 인한 대역폭 낭비와 처리 성능 하락같은 문제를 해결할 수 있고 REST API에서 발생하는 버전 관리의 어려움을 해결할 수 있다.

- GraphQL 스키마는 어떤 역할을 하며 어떤 식으로 정의되나요?

GraphQL 스키마는 GraphQL API에서 사용 가능한 데이터 타입과 그 데이터 타입에 대한 필드를 정의하는데 사용되는데, 스키마는 클라이언트가 데이터를 요청할 때 요청할 수 있는 데이터 타입 및 필드를 정의한다.

- GraphQL 리졸버는 어떤 역할을 하며 어떤 식으로 정의되나요?

GraphQL리졸버는 GrapgQL API에서 클라이언트가 요청한 데이터를 제공하기 위해 필요한 로직을 구현하는 함수이다. 리졸버는 요청된 데잍에 대한 처리 방법을 정의하고, 해당 데이터에 대한 쿼리나 뮤테이션을 실행하고 결과를 반환한다.

- GraphQL 리졸버의 성능 향상을 위한 DataLoader는 무엇이고 어떻게 쓰나요?

DataLoader는 GraphQL에서 데이터를 효율적으로 가져오기 위해 사용되는 라이브러리이다. DataLoader은 데이터를 일괄적으로 가져오고 캐싱하여 중복요청을 방지하고 성능을 향상시킨다. Data Loader을 사용하면 여러개의 필드를 가져오는 쿼리에서 중복되는 데이터를 한번만 가져오고, 중복되지 않은 데이터를 요청할 때만다 일일히 요청하는 것이 아니라 캐시된 데이터를 가져와 처리한다. DateLoader을 사용하려면 DataLoader의 인스턴스를 생성하고 데이터 로딩 함수를 작성한다. 그리고 DataLoader에 로딩 함수를 등록하면 리졸버에서 DataLoader를 사용할 수 있다.

- 클라이언트 상에서 GraphQL 요청을 보내려면 어떻게 해야 할까요?

HTTP POST 요청을 사용해서 GraphQL 쿼리를 직접 전송할 수 있는데, 요청 본문에 GrapgQL 쿼리와 함께 변수 및 인증 정보 등을 추가할 수 있고, 서버는 HTTP응답으로 GraphQL 응답을 반환한다. WebSocket 프로토코를 사용해서 서버에 GraphQL 쿼리를 전송할 수도 있고, 서버는 WebSocket을 통해 GraphQL응답을 반환한다. 추가로 GraphQL을 지원하는 클라이언트 라이브러리를 사용하여 GraphQL 요청을 작성할 수 있다.

- Apollo 프레임워크(서버/클라이언트)의 장점은 무엇일까요?

Apollo 프레임워크의 장점으로는 첫 번째는 GraphQL을 지원하기 때문에 REST API보다 쉽고 직관적으로 API를 설계할 수 있고, Apollo Server에서 제공하는 데이터 소스와 통합하기 쉽도록 여러 가지 기능을 통해서 생산성을 높이는 장점이 있다. 두 번째는 GraphQL의 쿼리 최적화와 데이터 캐싱을 지원하여 높은 성능과 확장성을 제공하고 Apollo Client에서 지원하는 쿼리의 캐시 기능과 미리 가져오기를 통해서 네트워크 대역폭을 줄일 수 있다. 세 번째로 Apollo Server, Apollo Client 외에도 다양한 지원 도구를 제공하고, 크로스 플랫폼 지원, 커뮤니티 지원을 통해서 다양한 데이터 소스를 통합하기도 쉽고, 지속적으로 업그레이드와 개선한다는 장점이 있다.

- Apollo Client를 쓰지 않고 Vanilla JavaScript로 GraphQL 요청을 보내려면 어떻게 해야 할까요?

Apollo Client를 사용하지 않고 Vanilla Java Script로 GraphQL 요청을 보내려면 fetchAPI를 사용하여 HTTP POST 요청을 보내고, 요청 본문으로는 GraphQL쿼리를 전송해야 한다.

- GraphQL 기반의 API를 만들 때 에러처리와 HTTP 상태코드 등은 어떻게 하는게 좋을까요?

GraphQL API는 일반적으로 HTTP POST 메서드를 사용한다. HTTP 상태 코드 200 : 쿼리가 성공적으로 실행되었을 때 반환. 400 Bad Request : 쿼리가 올바르지 않거나, 요청 본문에 JSON형식이 유효하지 않을 때 반환. 401 Unauthorized: 사용자 인증이 필요한 경우 반환. 403 Forbidden : 사용자 권한이 없는 경우 반환. 404 Not Found : 존재하지 않는 리소스를 요청한 경우 반환. 500 Internal Server Error : 서버 내부 오류가 발생한 경우 반환. 에러처리는 에러 객체를 이용하여 에러 정보를 반환하거나 HTTP 상태코드를 사용하여 에러 정보를 반환, GraphUnion 타입을 사용하여 에러 정보를 반환할 수 있다.

## Quest

- 메모장의 서버와 클라이언트 부분을 GraphQL API로 수정해 보세요.

## Advanced

- GraphQL이 아직 제대로 수행하지 못하거나 불가능한 요구사항에는 어떤 것이 있을까요?
- GraphQL의 경쟁자에는 어떤 것이 있을까요?
