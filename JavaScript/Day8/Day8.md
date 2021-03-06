## 노드 추가

- appendChild() : 새로운 노드를 해당 노드의 자식 노드 리스트 맨 마지막에 추가
- insertBefore() : 새로운 노드를 특정 자식 노드 바로 앞에 추가
- insertData() : 새로운 노드를 텍스트 데이터에 새로운 텍스트로 추가

## 노드 생성

- createElement() : 새로운 요소 노드를 만듬
- createAttribute() : 새로운 속성 노드를 만듬
- createTextNode() : 새로운 텍스트 노드를 만듬

## 노드 제거

- removeChild()
  - 자식 노드 리스트에서 특정 자식 노드를 제거
  - 성공적으로 노드가 제거되면 노드를 반환
  - 노드가 제거될 때에는 제거되는 노드의 모든 자식들도 다같이 제거됨

## 노드 복제

- cloneNode() : 기존의 존재하는 노드와 동일한 새로운 노드를 생성하고 반환

- cloneNode(true)
  - true : 복제되는 노드의 모든 속성과 자식노드도 같이 복제
  - false: 속성 노드만 복제하고 자식 노드를 복제하지 않음

## 폼 객체

```html
<form name="myfrom" id="regform">
  <input type="text" name="userid" id="id" />
</form>
```

- 폼의 접근

  - const frm = document.myfrom; (name 접근)
  - const frm = document.getElementById('regform'); (id 접근)

- 아이디 value 접근
  - const id = document.myfrom.userid.value; (name)
  - const id = frm.userid.value; (name)
  - const id = frm.elements[0].value;
  - const id = frm.elements['userid'].value;
  - const id = document.getElementById('id).value;

## 정규표현식

- https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions
- 문자열에 특정 문자 조합과 대응시키기 위해 사용되는 패턴

### test()

- 정규표현식에 대입한 문자열이 부합하면 true, 아니면 false를 반환
  - 정규표현식객체.test() -> true or false

다음 우편번호 api
