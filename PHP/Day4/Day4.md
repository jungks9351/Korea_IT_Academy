# DB 접속

- mysqli_connect()
- mysqli_connect("DB위치", "아이디", "비밀번호", "DB명") or die("연결 실패시 메세지");

  $conn = mysqli_connect("127.0.0.1", "root", "1234", "fontend") or die("데이터베이스 연결 실패!");

# SQL 쿼리 실행

- mysqli_query();
- mysqli_query(연결객체, SQL문자열);

  $result = mysqli_query($conn, $sql);

✔ select 반환값 배열에 저장하기

    배열 = mysqli_fetch_array($result);

# 🎁 비밀번호 암호화

md5

- 128비트 암호화 해시 함수
- 주로 프로그램이나 파일이 원본 그대로인지 확인하는 무결성 검사에 많이 사용
- 안전하지 않은 암호화(권장 X), 단방향
- 기본 암호화

# Ajax(Asynchronous JavaScript And XML)

- 웹 페이지 전체를 다시 로딩하지 않고 백그라운드 영역에서 서버와 통신하여 그 결과를 리턴받고 웹 페이지 일부를 갱신할 수 있게 하는 기술

## Ajax의 장점

- 웹 페이지 전체를 다시 로드하지 않아도 일부분만을 갱신할 수 있음
- 웹 페이지가 완전히 로드된 후에 서버로 데이터 요청을 보낼 수 있음
- 백그라운드 영역에서 서버로 데이터를 전송

## Ajax의 단점

- 바이너리 데이터를 전달할 수 없음
- 서버 푸싱 방식의 실시간 서비스를 만들 수 없음

XMLHttpRequest(XHR) 객체

const 객체명 = new XMLHttpRequest();

1.  UNSENT (숫자 0) : XMLHttpRequest 객체가 생성됨.
2.  OPENED (숫자 1) : open() 메소드가 성공적으로 실행됨.
3.  HEADERS_RECEIVED (숫자 2) : 모든 요청에 대한 응답이 도착함.
4.  LOADING (숫자 3) : 요청한 데이터를 처리 중임.
5.  DONE (숫자 4) : 요청한 데이터의 처리가 완료되어 응답할 준비가 완료됨.
