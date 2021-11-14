프로젝트 복원

npm install

## express 모듈

- use() : 미들웨어를 등록
- redirect() : 웹 페이지의 경로를 강제로 이동

http://127.0.0.1:3000/?userid=apple

php : $userid = $\_GET['userid'];

node.js : const userid = req.query.userid;

query : 클라이언트에서 GET방식으로 전송한 요청 파라미터를 확인

body : 클라이언트에서 POST방식으로 전송한 요청 파라미터를 확인

✔️ 단, POST방식을 통한 요청 파라미터를 확인하려면 body-parser와 같은 모듈을 사용해야 함

```html
<form method="post" action="./">...</form>
```

body-parser 미들웨어의 여러 옵션 중에 extended를 false로 설정하면 node.js로 기본으로 내장된 queryString이 true일 때 따로 설치가 필요한 npm qs 라이브러리를 사용

```js
app.user(bodyParser, urlencoded({ extended: false }));
```

## REST(Representational State Transfer)

- 자원을 이름으로 구분하여 해당 자원의 상태를 주고 받는 것을 의미

## Router 미들웨어

- 사용자의 다양한 요청이

## 템플릿 엔진

- view를 구현하기 위한 템플릿

## EJS(Embeded JavaScript) 모듈

- 특정한 형식인 파일로 부터 html페이지를 생성하는 모듈
- npm i ejs

\*MVC model view controller

## EJS 파일 형식의 특수 코드

<% ~~~~~~ code ~~~~~~~ %> : 자바스크립트 코드를 입력하는 영역
<%=변수%> : 데이터를 출력
<%-변수%> : ejs 파일 전체를 전달

## EJS 데이터 전달

render() : 메소드의 매개변수에 전달하고자 하는 데이터를 입력
