# Quest 17-B. 배포 파이프라인

## Introduction

- 이번 퀘스트에서는 CI/CD 파이프라인이 왜 필요한지, 어떻게 구축할 수 있는지 등에 대해 다룹니다.

## Topics

- Continuous Integration
- Continuous Delivery
- AWS Codebuild

## Resources

- [AWS: Continuous Integration](https://aws.amazon.com/ko/devops/continuous-integration/)
- [AWS: Continuous Delivery](https://aws.amazon.com/ko/devops/continuous-delivery/)
- [AWS Codebuild](https://aws.amazon.com/ko/codebuild/getting-started/)

## Checklist

- CI/CD는 무엇일까요? CI/CD 시스템을 구축하면 어떤 장점이 있을까요?

지속적통합인 CI는 여러 개발자들이 동시에 개발을 하면서 발생할 수 있는 문제점들을 사전에 발견하고 해결하기 위한 방법으로 여러 개발자들이 작성한 코드를 자동으로 빌드하고, 테스트, 검증하는 과정을 통해서 코드의 품질을 개선하고, 충돌이나 오류를 미리 방지할 수 있다. 지속적 배포인 CI과정을 통해 검증된 코드를 자동으로 릴리즈하여 사용자에게 지속적으로 서비스를 제공한다. 자동화된 배포 파이프라인은 빠르고 안정적으로 서비스를 배포할 수 있다. 즉 CI/CD 시스템을 구축하면 소프트웨어 개발의 생산성과 안정성을 높일 수 있다. 빠른 빌드, 자동화된 테스트, 자동화된 배포 등을 통해 빠르고 안정적으로 개발 및 배포가 가능해지게 한다.

- CI 시스템인 Travis CI, Jenkins, Circle CI, Github Actions, AWS Codebuild 의 차이점과 장단점은 무엇일까요?

Travis CI는 Github에서 호스팅되는 무료 CI/CD 시스템으로 빠른 구성과 쉬운 사용성을 가지고 있고, 다양한 프로젝트 언어와 통합이 가능하기 때문에 빠른 설정 및 쉬운 사용성, Github와의 강력한 통합이라는 장점이 있지만 유료 요금제가 없어 기능이 제한될 수 있다는 단점이 있다. jenkins는 오픈 소스기반의 CI/CD 시스템으로 유연한 플러그인 아키텍처를 가지고 있고, 다양한 플러그인을 사용하여 대부분의 작업을 자동화할 수 있으며, 매우 커스터마이징이 가능하다는 장점이 있지만 초기 구성이 복잡하고, 고급 기능 사용 시 학습 곡선이 높다는 단점이 있다. Circle CI는 클라우드 기반의 CI/CD 시스템으로서, 빠른 속도와 쉬운 사용성을 갖추고 있고 사용하기 쉬운 웹 기반 인터페이스와 지속적으로 엡데이트되는 다양한 통합 기능을 제공한다는 장점이 있지만 고가의 요금제가 존재한다는 단점이 있다. Github Actions는 Github에서 호스팅되는 무료 CI/CD 시스템으로서, Travis CI와 유사한 기능을 제공하고, Github과의 강력한 통합과 무료로 사용가능하다는 장점이 있지만 일부 고급 기능이 빠져 있을 수 있다는 단점이 있다. AWS CodeBuild는 클라우드 기반의 CI/CD 시스템으로서, AWS와의 강력한 통합을 갖추고 있고 다양한 프로젝트 언어와 통합이 가능하다는 장점이 있지만, 설정이 복잡하고 높은 비용이 필요하다는 단점이 있다.

## Quest

- AWS Codebuild를 이용하여, 특정 브랜치에 푸시를 하면 린트와 테스트를 거쳐 서버 이미지를 빌드한 뒤, 직전 퀘스트의 EC2 인스턴스에 배포되는 시스템을 만들어 보세요.

## Advanced

- 빅테크 회사들이 코드를 빌드하고 배포하는 시스템은 어떻게 설계되고 운영되고 있을까요?
