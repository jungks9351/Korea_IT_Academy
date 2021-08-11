# 하이퍼 링크 \<a>

- 하이퍼 링크란 다른 페이지나 사이트로 연결하는 링크(문자 또는 이미지)

```html

<a href="사이트 또는 이동할 문서의 위치 경로">링크에 사용될 문자 또는 이미지</a>

```


## 호스팅

### 닷홈 
https://www.dothome.co.kr/

* 닷홈은 html 디렉토리 안에 HTML문서를 저장
* 닷홈은 첫1페이지를 하상 index.html로 작성

ftp-simple extensinon 설치

### 설정

1. f1키 -> ftp-simple : Config -ftp connection setting 선택

```
[
	{
		"name": "정진의 홈페이지",
		"host": "IP주소", // 파일질라
		"port": 21,
		"type": "ftp",
		"username": "FTP ID",
		"password": "FTP password",
		"path": "/",
		"autosave": true,
		"confirm": true -> false 변경
	}
]
```

2. f1키 -> ftp-simple : Remote open to workspace

# 테이블 \<table>

여러 종류의 데이터를 보기 좋게 정리하여 보여주는 표

```html

<table>
	<tr> <!-- 테이블의 각 층 -->
		<td></td><td></td> <!-- 테이블의 각 셀 -->
	</tr>
</table>

```

## 테이블 속성

- border : 테이블의 테두리 두께를 설정 (기본 0)
- width : 테이블의 가로 폭을 설정
- align : 테이블의 정렬을 설정(left, right, center)

### \<hr> 수평선
- 가로로 수평선을 생성

## \<tr>, \<td> 속성

- width : 셀의 가로 폭을 설정
- height : 셀의 높이를 설정
- align : 셀의 텍스트 정렬 설정(left, right, center)

## colspan 속성

- 가로로 열을 합침

```html
<td colspan="합칠 열의 개수"></td>
```

## rowspan 속성

```html
<td rowspan="합칠 행의 개수"></td>
```

## \<colgroup> 

- \<colgroup> 태그 뒤에 나오는 컬럼(th 또는 td)에 적용할 스타일을 해당 태그에서 미리 설정할 수 있도록 함

## \<caption>
- 표에 제목을 붙일 때 사용
- 기본 위치는 표의 상단 중앙

## 과제

자신의 웹사이트에 이력서 만들기

이력서 만들기 - 인터넷 이력서 양식 만들기

index.html ----> resume.html 

이력서 링크	 ----> 이력서

(자유롭게 꾸미기)

# 책갈피 (bookmark)

- \<a> 태그의 name 속성 또는 특정 태그의 id 속성을 이용하여 책갈피 기능을 활용

```html
<a href="a태그의 #값 또는 id 속성의 값">링크에 사용될 문자 또는 이미지</a>

<a href="#book">도착지로 이동</a>
...
...
...
<!-- a태그만 name 다른 태그들은 id -->
<a name="book">도착</a>
또는
<p id="book">도착</p>
```