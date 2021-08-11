# CSS 속성

## color

### 색상 이름으로 표현

- red, white, blue ...

### RGB 색상값으로 표현

- rgb(0~255, 0~255, 0~255)
- rgba(0~255, 0~255, 0~255, 0~1(소수 alpha값))
    - alpha 값 = 투명도

### 16진수 색상값으로 표현

- rgb색상값을 16진수로 0~f까지 범위를 지정
    - blue #0000ff -> #00f

## text

### color

- 텍스트의 색상을 설정
- 텍스트의 기본색상은 검정색

### letter-spacing

- 텍스트 내에서 글자 사이의 간격을 설정

### word-spacing

- 텍스트 내에서 단어 사이의 간격을 설정

### text-align

- 텍스트 수평 방향 정렬을 설정

### text-indent

- 단락의 첫 줄의 들여쓰기를 설정

### line-height

- 텍스트의 줄 간격(높이)를 설정


### text-decoration

- 텍스트에 여러가지 효과를 설정하거나 제거하는데 사용
- none, underline, line-through, overline

### text-transform

- 텍스트에 포함된 영문자에 대한 대소문자를 설정
- uppercase, lowercase, capitalize

### font-varient

- 소문자를 작은 대문자로
- 소문자 크기의 대문자로 설정

### text-shadow

- 텍스트에 그림자 효과를 설정

```css

선택자 {
    text-shadow: 가로거리 세로거리 번짐정도 색상;
}

```

### text-overflow

- 텍스트가 기준선을 벗어나 넘칠 경우 넘치는 텍스트를 어떻게 처리할지 설정
- clip : 자르기 
- ellipsis : 자른뒤 ...붙임

### white-space

- 스페이스와 탭, 줄바꿈, 자동 줄바꿈을 어떻게 처리할지를 설정
- wrap : 단어를 다음줄로 넘김
- wordbreak : 단어를 쪼개서 다음줄로 넘김
- nowrap : 뚫고 나감

### overflow

- 기준선을 벗어나 넘칠 경우 값을 어떻게 처리할지 설정
- hidden : 넘어갔을 때 숨김
- visible : 넘어간것도 보여줌

## font

### font-size

- 텍스트의 크기를 설정
- px, %, em, rem ..
- em : 조상의 크기를 상속받은 상대적인 크기
- rem : html에 설정된 크기의 상대적인 크기 설정

### font-family

- 글꼴을 설정
- 하나의 글꼴을 설정, 여러개의 글꼴을 등록
- 여러개의 글꼴이 등록되어 있는경우, 웹브라우저에서 순서대로 사용여부를 판단한 뒤 적용
- 글꼴 이름에 띄어쓰기가 있는 겨우 반드시 따옴표로 감싸줘야 함

```css
선택자 {
    font-family: , , , , ;
}
/*
여러개의 글꼴을 등록할 수 있다. 
적용이 차례대로 된다. 
*/
```
```
무료 웹폰트 사이트

구글폰트 https://fonts.goole.com

눈누 https:// noonnu.cc/
```

### font-weight

- 텍스트의 굵기를 설정
- 기본 굵기는 숫자 400
- 숫자는 100 ~ 900 사용

## Background

### background-color

- HTML 요소의 배경색을 설정

### backgorund-image

- HTML 요소의 배경으로 나타날 배경 이미지를 설정
- 배경 이미지는 기본 설정으로 반복(바둑판 형식)되어 나타남

```css

선택자 {
    background-image: url('배경이미지 경로');
}

```

### background-repeat

- 배경 이미지를 수평이나 수직 방향으로 반복하도록 설정
- repeat 기본값
- repeat-x
- repeat-y
- no-repeat

### background-position

- 반복되지 않는 배경 이미지의 상대 위치를 설정
- % 나 px를 사용해서 상대위치를 직접 설정할 수 있음
- 상대 위치를 결정하는 기준은 해당 요소의 왼쪽 상단 (left top 기준)
```
left top       center top        right top
left center    center center     right center
left bottom    center bottom     right bottom
```

- 위치 값으로 설정

```
background-position : 가로위치값, 세로 위치값
background-position : 10%, 100px
```

### background-attachment

- 위치가 설정된 배경 이미지를 원하는 위치에 고정시킬 수 있음
- 고정된 배경 이미지는 스크롤과 무관하게 화면의 위치에서 이동되지 않음
- fixed

### background-size

- 배경 이미지 크기를 설정
- px, %를 사용
- contain
    - 배경 이미지의 가로, 세로 모두 요소보다 작다는 조건하에 가능한 크기 설정
    - 이미지의 가로, 세로 비율은 유지
    - 배경 이미지의 크기는 요소의 크기보다 항상 작거나 같음
- cover
    - 배경 이미지의 가로, 세로 모두 요소보다 크다는 조건하에 가능한 배경 이미지를 작게 설정
    - 이미지의 가로, 세로 비율은 유지
    - 배경 이미지의 크기는 요소의 크기보다 항상 크거나 같음

```
무료 배경 사이트
https://unsplash.com/
```

### Shorthand background

- 배경 속성을 한번에 적용
```
background: 파일 위치 반복여부 위치 사이즈 ..
```

# 과제

웹사이트의 배경, 이력서, 즐겨찾기 css 적용

과제
- 메인페이지 또는 서브페이지에 배경화면 설정
- 이력서 및 즐겨찾기 페이지 css사용하여 재구성
- news.html(인터넷 기사) 복사해서 추가하기
    - 글꼴 , 색상 등 text 속성을 사용하여 표현
