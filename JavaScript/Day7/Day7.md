## Date 객체

- 날짜, 시간등을 쉽게 다룰 수 있는 내장객체
- 브라우저 시간
- const 객체명 = new Date();  // 현재 날짜 시간을 가진 객체가 만들어짐

연도(year)
2자리로 표현 : 1900 ~ 1999
    const date = new Date(21, 6, 20);   // 1921년 7월 20일

4자리로 표현 : 2000 ~
const date = new Date(2021, 6, 20); // 2021년 7월 20일

월(month)
범위 0 ~ 11(1월 ~ 12월)
    const date = new Date(2021, 5, 20); // 2021년 6월 20일

일(day), 시(hour), 분(minute), 초(seconds)

## Date 객체를 만드는 방법

1. new Date() : 현재 날짜 시간을 저장하는 객체가 만들어짐(브라우저 기준)
2. new Date("날짜 문자열") : 해당 날짜 시간을 가리키는 객체가 만들어짐
    new Date("2021-05-20");
3. new Date("Timestamp 밀리초") : 1970년 1월 1일 0시 ~ 해당 밀리초만큼 지난 시간의 날짜 객체가 만들어짐
4. new Date(년, 월, 일, 시, 분, 초, 밀리초) : 해당 특정 날짜 시간을 가리키는 객체가 만들어짐

## window 객체

- 현재 웹브라우저의 창이나 탭을 표현하기 위한 객체
- 비표준 객체

setTimeout() : 일정 시간이 지난 후 매개변수로 제공된 함수를 실행

    function 함수명(){
        ....
    }
    
    const 상수명 = setTimeout(함수명, 시간);  

clearTimeout() : setTimeout()에서 실행된 함수를 취소

    clearTimeout(setTimeout의 이름);


setInterval() : 일정 시간마다 매개변수로 제공된 함수를 실행

    function 함수명(){
        ....
    }
    
    const 상수명 = setInterval(함수명, 시간);  

clearInterval() : setInterval()에서 실행된 함수를 취소

    clearInterval(setInterval의 이름);

## 콜백함수(Callback Function)

- 파라미터로 함수를 전달받아 함수의 내부에서 실행하는 함수

    const num = [1, 2, 3, 4, 5];

    num.forEach(x => {
        console.log(x * 10);
    });

10
20
30
40
50

```js
num.forEach(function(x) {
    console.log(x * 10);
});
```

👿 콜백지옥!

```js
function add(x, callback){
    let sum = x + x;
    console.log(sum);
    callback(sum);
}

add(10, function(result) {
    add(result, function(result){
        add(result, function(result){
        ...

        })
    })
});
```


문서 객체 모델(Document Object Model)
- xml이나 html문서에 접근하기 위한 일종의 인터페이스
- 문서내에 모든 요소를 정의하고 요소에 접근하는 방법을 제공

```html
<html lang="en">

<head>
    <title>초간단 문서</title>
</head>

<body>

    <h2>초간단 문서</h2>
    <p>간단한 문서</p>

</body>
</html>
```






                                document 객체
    
                                <html> - lang
                                
                    <head>                    <body>
                    <title>             <h2>          <p>     
                  초간단 문서         초간단 문서   간단한 문서

## document 객체

- 웹 페이지 자체를 의미
- 웹 페이지에 존재하는 HTML 요소에 접근할 때는 반드시 document 객체로부터 시작

### 메소드
document.getElementsByTagName() : 해당 태그 이름의 요소를 모두 선택
    const tag = document.getElementsByTagName('h2');
document.getElementById() : 해당 아이디의 요소를 선택
document.getElementsByClassName() : 해당 클래스에 속한 요소를 모두 선택
document.getElementsByName() : 해당 name 속성값을 가지는 요소를 모두 선택
querySelectorAll() : 해당 선택자로 선택되는 요소를 모두 선택
    const sel = document.querySelectorAll('div > p');

### 노드(node)

- HTML DOM은 노드라고 불리는 계층적 단위에 정보를 저장
- 노드트리는 노드들의 집합이며 노드간의 관계를 보여줌



#### 노드 종류

- 문서 노드(document node) : 문서 전체를 나타내는 노드
- 요소 노드(element node) : HTML요소는 요소 노드이며, 속성 노드를 가질 수 있는 유일한 노드
- 속성 노드(attribute node) : HTML요소의 속성은 속성 노드이며, 요소 노드에 관한 정보를 가지고 있음
- 텍스트 노드(text node) : HTML문서의 모든 텍스트는 텍스트 노드
- 주석 노드(comment node) : 모든 주석은 주석 노드

#### 노드간의 관계
- parentNode : 부모 노드
- childNodes : 자식 노드 리스트
- firstChild : 첫번째 자식 노드
- lastChild : 마지막 자식 노드
- nextSibling : 다음 형제 노드
- previousSibling : 이전 형제 노드