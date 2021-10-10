```
✔️ 브라우저가 해석할 수 있는 언어
  HTML, CSS, JavaScript
```

# PHP

- 서버측에서 해석하는 언어
- 웹서버 프로그램에서 해석되는 스크립트 언어
- 데이터베이스와 연동을 편하게 할 수 있음
- 거의 모든 운영체제에서 개발이 가능
- 속도가 매우 빠름
- 파일 업로드, 메일전송.. 등 기능을 자체적으로 지원

```
    클라이언트              요청                서버
(정보를 제공받는 쪽)      --------->      (정보를 제공하는 쪽)
                     <---------  site(HTML, CSS, JavaScript) 웹서버
                                    PHP -> PHP 해석기 -> HTML
```

## window

아파치 웹서버 다운로드

- https://www.apachelounge.com/download/
- Apache 2.4.51 Win64를 다운로드
- httpd-2.4.48-win64-VS16.zip 파일을 다운로드 받고 압축을 품
- 압축 푼 폴더 안에 존재하는 Apache24 디렉토리를 복사하여 c드라이브 루트에 위치

- C:\Apache24\conf 디렉토리 안에 httpd.conf 파일을 비주얼스튜디오 코드로 열기
- ServerAdmin admin@example.com 을 찾아 아래와 같이 변경
  ServerAdmin localhost:80
- 아래 내용을 찾아 변경
  DocumentRoot "${SRVROOT}/htdocs"
    <Directory "${SRVROOT}/htdocs">
  를
  DocumentRoot "C:\Ryuzy\PHP"
  <Directory "C:\Ryuzy\PHP">
- 탐색기에서 내pc 우측버튼 속성 -> 고급 시스템 설정 -> 환경 변수 -> 시스템 변수 -> Path을 선택 후 편집 버튼 -> 새로 만들기를 누르고 C:\Apache24\bin 를 입력
- cmd 에서 httpd -k install 실행
- 윈도우 검색 -> 서비스 -> Apache24 더블클릭 -> 시작 버튼누르기

아파치 설정 변경

- httpd.conf 파일을 아래 내용을 찾아 변경
  <IfModule dir_module>
  DirectoryIndex index.html
  </IfModule>
  를
  <IfModule dir_module>
  DirectoryIndex index.php
  </IfModule>
- 문서의 맨 마지막 부분에 아래 내용을 추가
  PHPIniDir "c:/php7"
  LoadModule php7_module "c:/php7/php7apache2_4.dll"
  AddType application/x-httpd-php .html .php
  AddHandler application/x-httpd-php .php
