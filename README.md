
**React project without CRA**

## 💻 MAC OS M1 
---
### - node v14.15.5
### - yarn 1.22.10
---
내 맥에선 최신 `react-scripts`가 동작하지 않는다... 

따라서 다운그레이드 되었다..

    "react-scripts": "^3.4.4"


1. git clone https://github.com/bepyan/my-react
2. yarn install
3. yarn start
---
## 🦅 Presentational & container Pattern
### Presentational
- 프레젠테이션, UI를 출력하는 로직
- prop의 함수에 의해 state를 변경 (엄격하게 지켜야 하는 규칙은 아니다)
- 순수 함수인 경향 (의존적 X)
### container
- 데이터와 데이터 조작에 관한 함수를 만들고 present component에 제공
- 스타일을 사용하지 않음

---
## 🐋 vscode 플러그인
- ES7 React/Redux/GraphQL/React-Native snippets
    
    ```
    rafce
    ```
    새로운 컴포넌트 만들 때