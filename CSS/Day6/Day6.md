# transition
- 요소에 추가할 css 스타일 전환 효과를 설정
- 추가할 전환효과나 지속될 시간도 설정

```
transition: property timing-function duration delay

property : 요소에 추가할 전환효과를 설정
timing-function : 전환효과의 값을 설정
(linear: 처음부터 끝까지 일정한 속도, ease: 전환효과가 천천히 시작~빨라지고~천천히, ease-in, ease-out, ease-in-out)
duration : 시간동안 전환효과를 나타냄
delay : 시간만큼 대기하다 전환효과를 나타냄
```

# CSS 애니메이션

- 요소의 현재 스타일을 다른 스타일로 변화
- @keyframe 규칙을 사용

```
@keyfrmae
시작 : from, 0%
과정 : 1%, 10% ...
끝 : to, 100%
```

## animation-name

- 애니메이션 이름을 설정

## animation-fill-mode

- 애니메이션이 끝난 후 어떻게 처리할지 설정
- forwards : 애니메이션 키프레임이 100%에 도달했을 때 마지막 키프레임을 유지

## animation-direction

- 애니메이션의 진행 방향을 정하는 속성
- reverse : 반대 순서로 진행
- alternate : 정해진 순서로 진행했다가 다시 반대 순서로 진행
- reverse-alternate : 반대 순서로 진행했다가 다시 정해진 순서로 진행

## animation-iteration-count

- 애니메이션이 몇 번 반복될지 설정
- infinite : 무한 반복
- 숫자 : 해당 숫자만 반복

## animation-duration

- 애니메이션이 일어나는 시간을 설정

## 🎁 perspective()

- 3D환경을 만들기 위해 사용자의 관찰자 시점(투영점)을 구체화해서 입체감을 부여하는 속성

```
perspective(200px) -> 스크린으로 부터 해당 px 만큼 떨어진 곳에서 관찰자가 있다는 것을 근거로 구성
```

# CSS의 우선 순위 계산

- 0. !important가 적용된 속성
- 1. 인라인 -> 1000점
- 2. id 속성 -> 100점
- 3. class 속성, 속성 선택자 -> 10점
- 4. element -> 1점
- 5. 동일한 선택자일 경우 나중에 적용한 것이 우선(점수가 같은 경우)
