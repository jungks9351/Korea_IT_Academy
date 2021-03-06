# 자바스크립트 테이터 타입

- 프로그램에서 다룰 수 있는 값의 종류를 의미

## 1. 숫자형(number)

- 다른 언어와 달리 정수와 실수를 따로 구분하지 않음
- 모든 수를 실수 하나로만 표현

## 2. 문자열형(string)

- 문자열형은 따옴표로 둘러싸인 문자들의 집합

```js

//문자열
const str1 = "여러분 안녕하세요?";
const str2 = '여러분 안녕하세요?';
const str3 = `여러분 안녕하세요?`;

const str4  = '김사과 : "안녕하세요?"';
const str5  = "김사과 : '안녕하세요?'";
const str6  = "김사과 : \"안녕하세요?\"";

// 함수 typeof() : 변수나 상수의 데이터 타입을 반환

```

## 3. 불리언형(boolean)

- 참(true), 거짓(false)으로 표현되는 값

```js

//불리언
const b1 = true;
const b2 = false;

```

🎁
- 자바스크립트에서는 타입 변환시 값이 있는 경우(1, "가", {"a": 1,"b": 2, "c": 3} ...) 불리언형으로 변경하게 되면 true로 변환
- **0, null, undefined 불리언형으로 변경하게 되면 false로 변환**

## 4. undefined, null 형

- undefined : 타입이 정해지지 않은 것을 의미

```js
const num;
let num;

console.log(num); // undefined
```

- null : 값이 정해지지 않은 것을 의미(객체), null로 변수를 초기화 한 경우

```js

let dog = null; //객체는 만들어졌지만 아무것도 할당되지 않음 값이 정해지지 않은 것

// null을 할당한 것과 엄연히 다르다. 데이터 타입이 정해지지 않았을 뿐
let dog;

console.log(dog); //null

```

## 5. 객체형(object)

- 여러 속성을 하나의 변수에 저장할 수 있도록 해주는 타입
- **키와 값 구조로 저장**

```js
const apple = {"no": 1, "name": '김사과', "age": 20};
               key  value
```

## 6. 심볼형(symbol)

- ES6에서 새롭게 추가된 7번째 타입
  - ES5 (Number, String, Boolean, null, undefined, Object)
- 변경 불가능한 원시 타입
- 이름의 충돌 위험이 없는 유일한 객체의 프로퍼티 키를 만들기 위해 사용

```js

let symbol1 = Symbol(); //identity한 값이 생김
let symbol2 = Symbol(); //identity한 값이 생김
//symbol3, symbol4는 전혀 다른값
let symbol3 = Symbol("a"); // {알수없는값 : "a"} 저장
let symbol4 = Symbol("a"); // {알수없는값 : "a"} 저장

let student1 = {symbol3, 'name': '김사과', ...};
let student2 = {symbol4, 'name': '김사과', ...};

```

# 자바스크립트의 타입 변환

- 자바스크립트는 변수의 타입이 고정되어 있지 않음
- 변수에 다른 타입의 값을 대입할 수 있음

```js
let a = 10; // 숫자형
...
...
a = 'Hello World!'; // 문자열형 변환
```

## 1. 자동 타입 변환 (암시적)

- 타입의 값을 기대하는 곳에 다른 타입의 값이 오면 자동으로 타입을 변화해서 사용

```js

const a = '20'; // 문자열형
const b = '10'; //문자열형

let result = a + b; // 2010
result = a - b; // 10
result = a * b; // 200
result = a / b; // 2

const c = '자바스크립트';
result = c - a; // NaN

```
✔️ NaN (Not a Number)
- 정의되지 않은 값이나 표현할 수 없는 값
- 숫자로 변환할 수 없는 연산을 시도한 경우

## 2. 명시적 타입 변환 (explicit type change)

- 직접 타입을 변환할 필요가 있을 때 함수를 통해 타입 변화
- Number() : 문자를 숫자로 변환
- String() : 숫자나 불리언등을 문자형으로 변환
- Boolean() : 문자나 숫자등을 불리언형을 변환
- Object() : 모든 자료형을 객체형으로 변환
- parseInt() : 문자열형을 int형(정수)으로 변환
- parseFloat() : 문자열형을 float(소수)형으로 변환


```js

// Number()

const a = "20"; //문자열형
const b = "10"; //문자열형

const result = Number(a) + Number(b); // 30

const result = Number(a + b); // (x) 2010

// Boolean()

Boolean(10); // true
Boolean(null); //false

// parseInt()

parseInt("10.5"); // 10

// parseFloat()

parseInt("10.5"); // 10.5

```

# 대화상자

- alert() : 사용자에게 메세지를 보여주고 확인을 기다림
```js
alert('메세지');
```

- confirm() : 사용자에게 메시지를 보여주고 확인이나 취소를 누르면 그 결과를 불리언 값으로 반환
```js
const 상수명 = confirm('메시지');
```

- prompt() : 사용자에게 메시지를 보여주고 사용자가 입력한 문자열을 반환
```js
const 상수명 = prompt('메세지');
```

# 연산자 (Operator)

## 1. 산술 연산자

- 사칙 연산 및 기본적인 연산을 하는 연산자
  - \+ : 더하기
  - \- : 빼기
  - \* : 곱하기
  - / : 나누기
  - % : 나머지 10%3 = 1
  - ** : 거듭제곱 2 ** 2 = 4

## 2. 비교 연산자

- 피연산자 사이의 상대적인 크기를 판단하여 참 또는 거짓을 반환
  - \> : 크다
  - \< : 작다
  - \>= : 크거나 같다
  - \<= : 작거나 같다
  - == : 같다 (타입이 달라도 값이 같으면 참) / 동등비교
  - === : 같다 (타입과 값이 모두 같아야 참) / 일치비교
  - != : 다르다 (값이 다르고 타입이 다르면 false, 값이 다르고 타입이 같으면 true) / 부도등비교
  - !== : 다르다 (값, 타입 둘 중 하나만 다르면 true) / 불일치 비교
    ```js
    // ==
    3==3 //true
    3== "3" // true
    
    // ===
    
    3===3 //true
    3=== "3" // false
    ```

## 3. 대입 연산자

- 변수나 상수의 값을 대입할 때 사용하는 연산자
  - = : 우측의 값을 왼쪽(변수, 상수)에 대입
  - +=, -=, *=, /=, %=, **= : 우측의 값을 왼쪽(변수)의 값과 연산한 후 다시 왼쪽(변수)에 대입

  ```js
  
  let num = 10;
  num += 1; // num = num + 1; 같은 표현
  
  console.log(num); // 11
  
  ```


## 4. 증감 연산자

- 증감 연산자는 1씩 값을 증가시키거나 감소시킬 때 사용
- 연산자의 위치가 어디에 있는지에 따라 결과가 달라질 수 있음

++변수 : 변수의 값을 1증가 시킨 후, 다음 연산으로 진행
변수++ : 먼저 연산을 수행한 후, 변수의 값을 1 증가 시킴
```js

let a = 10;
++a; // 11
a++; // 12

let b = ++a; // b= 13, a= 13

let c = a++ // c= 13, a= 14

```
--변수 : 변수의 값을 1감소 시킨 후, 다음 연산으로 진행
변수-- : 먼저 연산을 수행한 후, 변수의 값을 1 감소 시킴