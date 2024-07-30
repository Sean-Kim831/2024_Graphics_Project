# Computer Graphics 프로젝트

## 개요

**제목**: 몰입형 보드게임 컨텐츠 모델

**플랫폼**: 웹

**기술스택**: HTML, CSS, JavaScript

**라이브러리 및 프레임워크**
  - Three.js : 3D 모델링 및 인터랙티브 요소 구현
  - TWEEN.js & CANNON.js : 부드러운 트랜지션, 애니메이션 구현

**깃허브 주소**: [Computer Graphics Project](https://github.com/Sean-Kim831/2024_Graphics_Project)

## 프로젝트 개요

**동기**: 
- 부루마블형 보드게임 엔터테인먼트적 요소의 고수준 몰입감 수요
- 게임속 장소(말판)에 대한 실감 요소와 현장감 수요

**목적**:  
- 기존 엔터테인먼트 컨텐츠의 고도화된 몰입감 요소 제공
- 플랫폼 확장 가능성 제고
- 창의적인 사용자 경험 제공
- 사업화 및 수익화 CPND 모델 설계

## 주요 개발 과정 (타임라인 : 2024.5 - 2024.6)

**1차 스프린트 (5.30 - 6.4)**  
   - 기획 및 보드게임 모듈 설계

**2차 스프린트 (6.5 - 6.9)**  
   - 보드게임 리소스 완성 및 3D 모델 로드

**3차 스프린트 (6.9 - 6.13)**  
   - 버그 수정 및 최적화
   - 3D 인터랙션 요소 구현 완료

## 구현 내용

1. **보드게임 플레이**  
   - 오브젝트(유저,주사위) : Three.js를 통해 구현 및 Cannon.js를 통해 물리 움직임(다이스) 구현
   - 렌더링 : 자체구현한 Phong Shader로 렌더링
   - 조명 : Ambient(주변광), Directional(방향성광원)

2. **시점변환 및 환경**  
   - 카메라 디폴트 시점 : OrbitControls
   - 1인칭 시점 : PointerLockControls
  
   - Skybox(환경맵) : CubeTextureLoader
   - HDR(고해상도 실사 환경맵) : EXRLoader

3. **오브젝트 애니메이션**  
   - 오브젝트 생성 : Three.js를 통한 생성
   - 오브젝트 무빙 : TWEEN.js, Cannon.js

4. **3D 모델 로드**  
   - 3D 오브젝트 모델 : Three.js
   - 모델로드 : STLLoader(모델 - .stl)
   - 모델 애니메이션 : TWEEN.js를 통한 인터랙티브 요소



## 활용 방안 및 기대효과 (CPND 모델)

1. **컨텐츠(Contents)**  
   - 고도화 몰입 컨텐츠로의 확장 (교육용 컨탠츠, 게임, 시뮬레이션)
   - Ex. 여행사 플랫폼 속 서비스 컨텐츠
   - EX. 서비스 속 미니게임 수익형 요소
   
2. **플랫폼(Platform)**  
   - 다양한 플랫폼으로의 확장 가능성(웹, 모바일, 메타버스)
   - Ex. 메타버스 플랫폼 속 실제 랜드 마크 모델링

3. **네트워크(Network)**  
   - 유저간 소통, 인터랙션 확장 가능성
   - 멀티플레이어, 게임 인터랙션 요소

4. **디바이스(Device)**  
   - 다양한 디바이스와의 호환 가능성(VR, AR, 터치스크린디바이스)
  
## 향후 개발 계획

1. **게임 로직 요소 개선**  
   - 목표: 게임 디자인 개선 및 다양한 게임 로직 추가
   - 계획: UI및 레이아웃의 심미성 강화, "찬스 카드 드로우", "랜드마크 매입" 기능 추가 
   - 예상 결과: 플레이어에게 더 풍부한 게임 경험 제공

2. **3D 모델 품질 향상**  
   - 목표: 다양한 모델 추가, 텍스쳐 맵핑 처리
   - 계획: stl캐드 모델만이 아닌 고수준의 obj모델 등을 추가, 이미지 및 텍스쳐 맵핑 추가
   - 예상 결과: 게임 말판에 따른 디테일한 모델제공을 통한 몰입감 증대, 현장감 강화

3. **멀티플레잉 서버구현**  
   - 목표: 1인 플레이어만이 아닌 4명의 유저참여로 개선
   - 계획: 2인부터 최대 4인까지의 서버 통신을 통한 멀티플레잉 구현
   - 예상 결과: 프로그램 경량화 및 최적화, 인터랙션 요소 및 몰입감, 재미요소 증대

## 프로젝트 진행 중 직면한 문제점

1. **시점 변환 로직 오류**  
   - 문제 상황: 유저의 다이스 이후 1인칭 시점 변환시 유지되고 있던 게임 전체를 통제하는 OrbitControl시점과 충돌
   - 해결 방안: Pointlock(1인칭전환)로직에 딜레이, 전환시 OrbitControl에서도 작동하는 방향키 제어 강제로 해결

2. **모델링 및 환경맵핑 부자연스러움**  
   - 문제 상황: 해상도가 높고 무거운 모델과 환경맵 사용으로 동시 전환시 딜레이 및 부자연스러운 사용자 경험 발생
   - 해결 방안: 게임 요소 이벤트 alert를 통한 자연스러운 딜레이 및 모델링과 환경맵핑 사이에 딜레이 추가로 부자연스러움 해결

3. **Shader선택에 따른 조명문제**  
   - 문제 상황: PhongShader를 사용함으로써 반사로 인한 유저의 가시성 감소(말판 파악 어려움)
   - 해결 방안: 플레이 몰입감을 주는 유저와 주사위 이동에만 PhongShading적용, 말판에는 반사요소 제거함으로써 사용자 경험 증대

## 결론

**3D 그래픽스 이해** :
Three.js를 활용한 3D모델링과 렌더링 과정을 통해 그래픽스의 기본 개념과 구현 방법을 이해

**애니메이션 기술 습득** : 
TWEEN.js와 Cannon.js를 활용하여 사용자 인터페이스의 동적인 요소를 효과적으로 제어하는 기술을 습득

**모듈간의 통합** : 
다양한 라이브러리와 프레임워크를 통합하여 하나의 일관된 시스템을 구축하는 방법을 경험함으로써 문제해결 및 디버깅 능력 향상 


