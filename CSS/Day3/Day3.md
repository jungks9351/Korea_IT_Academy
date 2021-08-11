# 박스 모델(Box Model)

- 모든 HTML 요소는 박스모양으로 구성
- 박스모델이라고 부름
- 박스모델은 HTMl 요소를 내용, 패딩, 테두리, 마진으로 구분함

## 내용(cotent)

- 텍스트나 이미지가 들어있는 박스의 실질적인 내용 부분

## 패딩(padding)

- 내용과 테두리 사이의 간격
- padding-top, padding-right, padding-bottom, padding-left
- padding : 모든 패딩 속성을 한꺼번에 설정, 방향은 위부터 시작해서 시계방향으로 설정

```html
<div id="padding">안녕하세요</div>
```

```css
/* 위 20px 우 50px 아래 30px 좌 10px */
div#padding {
    padding: 20px 50px 30px 10px;
    }

/* 위 20px 좌,우 50px 아래 30px */
div#padding {
    padding: 20px 50px 30px;
    }

/* 위,아래 20px 좌,우 50px */
div#padding {
    padding: 20px 50px;
    }

/* 위,아래,좌,우 20px */
div#padding {
    padding: 20px;
    }
```

## 테두리(border)

- 내용(content)과 패딩(padding) 주변을 감싸는 테두리
- border-style : 테두리를 다양한 모양으로 설정(solid, dotted, dashed, double...)
- border-color : 테두리 색상을 설정
- border-width : 테두리 두께 설정
- border : 모든 테두리 속성을 한꺼번에 설정. 방향은 상당에서 시작해서 시계 방향으로 설정

## 마진(margin)

- 테두리(border)와 이웃하는 요소사이의 간격
- 마진은 눈에 보이지 않음

```
✔️ 세로 겹침 현상
세로로 나열된 두 박스의 간격은 두 마진의 합이 아니라 둘 중 큰 값을 선택
```

## 박스사이징(box-sizing)

- width, height 값에 padding이나 border영역은 포함되지 않음
- 만약 width 가 100%로 설정되었을 경우 padding이나 border 속성을 추가할 수 없음
- box-sizing 속성을 추가 -> padding과 border를 width와 height값에 포함

```
content-box : 기존 계산법! width와 height값에 padding과 border를 포함하지 않음

border-box : width와 height값에 padding과 border를 포함
```

```css
p {box-sizing: border-box;}
```

## 둥근 테두리 만들기

- border-radius

```
border-radius: top-left-x top-right-x bottom-right-x bottom-left-x / top-left-y top-right-y bottom-right-y bottom-left-y

border-radius: top-x bottom-x / top-y bottom-y

border-radius: xy
```

## 테이블 테두리 설정(border-collapse)

- 테이블 셀들간에 공백을 처리할지 여부를 결정하는 속성
- separate(기본, 셀들을 분리), collapse(셀들을 합쳐서 사이의 공백을 없앰)

## CSS display

- 웹 페이지의 레이아웃을 결정하는 속성
- block : display 속성값이 블록인 요소는 새로운 라인에서 시작하고, 해당 라인의 모든 너비를 차지

- inline : diplay 속성값이 인라인인 요소는 새로운 라인에서 시작되지 않음

- inline-block : block 과 inline 속성을 모두 사용
    - width, heigth를 적용
    - padding, margin 을 적용
    - line-height을 적용
    - 요소를 가로로 나열

- none : 웹 페이지에서 해당 요소가 나타나지 않고 레이아웃에서 사라짐 
```
✔️ visibility: hidden; (visible)

```

## CSS 폼
- 폼요소의 스타일을 설정
- input[type='text]:focus : 폼 요소가 포커스를 가지고 있을 때 스타일을 설정
- cursor: pointer; : 커서 모양을 설정

