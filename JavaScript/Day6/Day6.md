# 객체지향 프로그래밍

객체 지향 프로그래밍(영어: Object-Oriented Programming, OOP)은 컴퓨터 프로그래밍의 패러다임 중 하나이다. 객체 지향 프로그래밍은 컴퓨터 프로그램을 명령어의 목록으로 보는 시각에서 벗어나 여러 개의 독립된 단위, 즉 "객체"들의 모임으로 파악하고자 하는 것이다. 각각의 객체는 메시지를 주고받고, 데이터를 처리할 수 있다.

# 절차지향 프로그래밍

절차적 프로그래밍(節次的 프로그래밍, 영어: procedural programming)은 절차지향 프로그래밍 혹은 절차지향적 프로그래밍이라고도 불리는 프로그래밍 패러다임의 일종으로서, 때때로 명령형 프로그래밍과 동의어로 쓰이기도 하지만, 프로시저 호출의 개념을 바탕으로 하고 있는 프로그래밍 패러다임을 의미하기도 한다. 프로시저는 루틴, 하위프로그램, 서브루틴, 메서드, 함수(수학적 함수와는 다르고 함수형 프로그래밍에 있는 함수와는 비슷한 의미이다.)라고도 하는데, 간단히 말하여 수행되어야 할 연속적인 계산 과정을 포함하고 있다. 프로그램의 아무 위치에서나 프로시저를 호출할 수 있는데, 다른 프로시저에서도 호출 가능하고 심지어는 자기 자신에서도 호출 가능하다.

# 객체(Object)

- "실생활에서 인식할 수 있는 사물들을 객체라고 부른다"

- 명사

명사(名詞), 또는 이름씨는 구체적인 대상이나 추상적인 대상의 이름을 나타내는 품사이다. 조사와 결합할 수 있고 관형어의 꾸밈을 받는다. 그리고 문장에서 형태 변화가 없는 불변어이다. 문장 내에서 주어,목적어,보어의 역할을 한다.

- 동사

동사(動詞, Verb) 또는 움직이는 사람이나 사물의 움직임을 나타내는 품사이다. 형용사와 함께 용언에 속한다. 주어 다음에 동사가 나오는 영어나 중국어와는 달리 한국어의 동사는 문장의 끝에서 /-다/로 끝나는 경우가 많기 때문에 그 형태만 가지고는 형용사와 구별하기 쉽지 않다.

```js
const dog = {
    name: "루시",   // 프로퍼티
    age: 11,
    color: "white",
    weight: 3.5,
    family: "포메",
    play: function(){   // 프로퍼티 메소드
        console.log('신나게 놉니다');
    }
    sleep: function(){
        console.log('잠을 잡니다');
    }
}
```

✔️ 프로퍼티(property)

- 객체 내의 변수 또는 함수
- 변수 : 프로퍼티, 함수 : 프로퍼티 메소드

## 객체의 접근 방법

- 객체.프로퍼티
  get : dog.age -> 11 또는 dog['age'] -> 11
  set : dog.age = 11; 또는 dog['age'] = 11;

## 객체 생성 방법

1. 리터럴 표기법

- 가장 간단한 방법
  const 객체명 = {} // 빈 객체
- 아주 간단하게 객체를 생성할 수 있음
- 여러개를 생성할 때 힘듬

2. 생성자를 이용한 객체 생성

- new 연산자를 사용하여 객체를 생성하고 초기화할 수 있음
- 생성자는 메소드이며, 이 메소드는 새롭게 생성되는 객체를 초기화하는 역할을 함
- 여러개의 객체를 만들 때 좋음

```js
function 생성자명(매개변수1, 매겨변수2, ...) {
  프로퍼티명 = 값;
  프로퍼티명 = 값;
  ...
}

const 객체명1 = new 생성사명(값1, 값2, ...);
const 객체명2 = new 생성사명(값1, 값2, ...);
```

3. class를 이용한 객체 생성

- 클래스 (class)

  - 객체를 만드는 설계도

  ```js
  const 클래스명 = class {
    constructor(매개변수1, 매개변수2,...){
      프로퍼티명 = 값;
      프로퍼티명 = 값;
      ...
    }
    메소드명 (매개변수1, 매개변수2,...){

    }
  }
  ```

# 프로토타입(prototype)

- 자바스크립트의 모든 객체는 프로포타입이라는 객체를 포함
- 모든 객체는 프로토타입으로부터 프로퍼티와 메소드를 상속

✔️ 자바스크립트의 모든 객체는 최소한 하나이상의 다른 객체로부터 상속을 받으며, 상속되는 정보를 제공하는 객체를 프로토타입이라고 부름

✔️자바스크립트에 내장된 모든 생성자나 사용자 정의 생성자는 Object.prototype과 자신의 생성자 객체를 프로토타입으로 가짐

```js
const rucy = new Dog(); // Dog.prototype

rucy  <--- Object.prototype
      <--- Dog.prototype
```

# 내장 객체

## Math 객체

- 수학에서 자주 사용하는 상수와 함수들을 미리 구현해 높은 자바스크립트 내장 객체

- min() : 최소값을 반환, 매개변수가 전달되지 않으면 Infinity를 반환, 비교할 수 없는 값이 포함되어 있으면 NaN 반환
- max() : 최대값을 반환, 매개변수가 전달되지 않으면 -Infinity를 반환, 비교할 수 없는 값이 포함되어 있으면 NaN 반환
- round() : 소수점 첫번째 자리에서 반올림하여 반환
- floor() : 소수점 첫번째 자리에서 내림
- ceil() : 소수점 첫번째 자리에서 올림
- random() : 0보다 크거나 같고 1보다 작은 무작위 소수를 반환

## String 객체

- 문자열을 쉽게 만들고 다룰수 있게 함
- length : 문자열의 길이를 저장
- indexof() : 매개변수로 전달된 문자열이 처음 등장하는 위치를 반환
- charAt() : 매개변수로 전달된 인덱스에 위치한 문자를 반환
- includes() : 매개변수로 전달된 문자열이 포함되어 있는지 여부를 반환
- substring() : 매개 변수로 전달된 시작 인덱스부터 종료 인덱스 바로 앞까지 문자열을 추출하여 반환
- substr() : 매개변수로 전달된 시작 인덱스부터 전달된 개수만큼 문자열을 추출하여 반환
- split() : 매개변수로 전달된 구분자를 기준으로 문자열을 나눈 후 하나의 배열에 저장
- replace() : 원본 문자열을 매개변수로 전달된 문자열로 치환
- trim() : 문자열의 앞뒤 공백을 제거

# 과제

1. 주사위 게임

- 랜덤한 수를 뽑아 변수에 저장
- prompt로 입력한 수와 일치하면 게임이 종료(틀리면 무한 반복)

출력

주사위 숫자를 맞춰보세요 (1~6) : 3

정답은 4입니다. 틀렸습니다.

주사위 숫자를 맞춰보세요 (1~6) :2

정답은 2입니다. 맞췄습니다. 짝짝짝

게임을 종료합니다.

2. 로또 번호 예측 프로그램

- 1 ~ 45 까지의 랜덤한 수를 6개 추출
- 같은 수 중복 X
- 오름 차순 정렬

출력

오늘의 예측 로또 번호
2 19 24 33 37 44
