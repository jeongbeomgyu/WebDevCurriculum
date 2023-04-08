# Quest 18-B. 서비스의 운영: 로깅과 모니터링

## Introduction

- 이번 퀘스트에서는 서비스의 운영을 위해 로그를 스트리밍하는 법에 대해 다루겠습니다.

## Topics

- ElasticSearch
- AWS ElasticSearch Service
- Grafana

## Resources

- [ElasticSearch](https://www.elastic.co/kr/what-is/elasticsearch)
- [ElasticSearch 101](https://www.elastic.co/kr/webinars/getting-started-elasticsearch)
- [Grafana Panels](https://grafana.com/docs/grafana/latest/panels/)

## Checklist

- ElasticSearch는 어떤 DB인가요? 기존의 RDB와 어떻게 다르고 어떤 장단점을 가지고 있나요?

ElasticcSearch는 Apache Lucene 기반으로 개발된 오픈 소스 분산 검색엔진으로 Lucene의 풀 텍스트 검색, 인덱싱 및 검색 속도 개선 기능을 확장하여 분산 데이터베이스로서의 역할을 수행한다. ElasticSearch는 분산형 구조를 채택하여 데이터를 여러 노드에 분산하여 저장하고 데이터를 병렬적으로 처리하여 처리 속도와 확장성을 높일 수 있지만 RDBMS는 일반적으로 중앙 집중식 아키텍처를 채택하여 데이터를 단일 노드에 저장한다. 또한 ElasticSearch는 스키마리스 데이터 구조를 채택하여 데이터 구조의 변경이 유연하게 가능하게 한다. 즉 index에 데이터를 추가할 때, 해당 필드가 존재하지 않으면 자동으로 새 필드를 생성한다. 하지만 RDBMS는 엄격한 스키마를 갖추고 있으며, 데이터 구조를 변경하기 위해서는 명시적으로 스키마 수정이 필요하다. ElasticSearch는 풀 텍스트 검색과 분석을 제공하여 빠른 검색 결과를 제공하고, 분석 아키텍처를 채택하여 대용량의 데이터를 처리하고 확장하기 용이하다. 또한 스키마리스 구조를 갖춘 ElasticSearch는 데이터 구조를 유연하게 변경할 수 있는 장점이 있다. 단점으로는 RDBMS와 달리 ACID를 준수하지 않고 분산 아키텍처와 스키마리스 구조 때문에 데이터 정합성이 보장되지 않을 수 있다. 또한 ElasticSearch 는 SQL에서 제공하는 Join 기능을 제공하지 않는다는 단점이 있다.

- AWS의 ElasticSearch Service는 어떤 서비스인가요? ElasticSearch를 직접 설치하거나 elastic.co에서 직접 제공하는 클라우드 서비스와 비교하여 어떤 장단점이 있을까요?

AWS의 ElasticSearch Service는 ElasticSearch를 호스팅하는 완전 관리형 서비스이다. 이 서비스를 사용하면 ElasticSearch를 손쉽게 배포, 운영하고 관리할 수 있다. ElasticSearch를 직접 설치하는 경우, 사용자는 클러스터의 운영과 관리를 직접 수행해야 하기 때문에 초기 설정, 업그레이드, 백업 및 복원, 보안 구성 등 다양한 작업을 수행해야 해서 전문적인 지식과 기술이 필요하기 때문에 시간과 노력이 필요하다는 단점이 있지만 클러스트를 완전 제어할 수 있으며, 가격도 상대적으로 저렴하다는 장점이 있다. Elastic.co에서 제공하는 클라우드 서비스를 사용하면, ElasticSearch 클러스트를 빠르게 프로비저닝하고 쉽게 관리할 수 있고 사용자가 클러스터 운영 및 관리에 대한 부담을 줄일 수 있는 장점이 있다. 즉 ElasticSearch를 직접 설치하면 초기 비용과 시간이 적게 들지만, 관리 및 운영에 대한 부담이 크다는 단점이 있지만, Elastic.co에서 제공하는 클라우드 서비스는 초기 비용이 높을 수 있다는 단점이 있지만 클러스트 운영 및 관리 부담이 덜하며, 더 많은 기능과 유연성을 제공하여 지원 서비스도 제공한다는 장점이 있다.

- Grafana의 Panel 형식에는 어떤 것이 있을까요? 로그를 보기에 적합한 판넬은 어떤 형태일까요?

Graph Panel은 시계열 데이터를 시각화하는 데 사용되기 때문에 X축과 Y축을 지정하여 그래프를 그릴 수 있으며, 여러개의 라인을 표시할 수 있다. Singlestat Panel은 단일 값을 표시하는 데 사용된다. Heatmap Panel은 히트맵을 표시하는 데 사용되기 때문에 시계열 데이터를 2차원으로 시각화하여, 색상으로 데이터 밀도를 나타낸다. Alert List Panel은 경고를 표시하는 데 사용하기 때문에 Grafana의 경고 시스템과 연동하여, 경고 이력을 표시한다. Gauge Panel은 메트릭의 현재 값을 빠르게 시각화하는 데 사용하기 때문에 서버의 메모리 사용량, 디스크 용량 등을 실시간으로 표시한다. Text Panel은 사용자 정의 텍스트 또는 HTML을 표시하는 데 사용된다. Table Panel은 데이터 테이블을 표시하는 데 사용되기 때문에 행과 열에 대한 집계결과를 표시하거나 일련의 이벤트 또는 로그를 표시할 수 있다.Grafana 형식 중 로그를 보기 적합한 판넬 형태로는 Logs Panel이 있다.

## Quest

- 우리의 웹 서버가 stdout으로 적절한 로그를 남기도록 해 보세요.
- ElasticSearch Service 클러스터를 작은 사양으로 하나 만들고, 도커 컨테이너의 stdout으로 출력된 로그가 ElasticSearch로 스트리밍 되도록 해 보세요.
- Grafana를 이용해 ElasticSearch의 로그를 실시간으로 볼 수 있는 페이지를 만들어 보세요.

## Advanced

- ElasticSearch와 Grafana는 어떤 라이센스로 배포되고 있을까요? AWS와 같은 클라우드 제공자들이 이러한 오픈소스를 서비스화 하는 것을 둘러싼 논란은 어떤 논점일까요?
