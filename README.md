# PorShaw Project

## 팀 정보

- 팀명 : PorShaW
- 팀장 : 오선아
- 프론트 : 김민석, 오선아, 이한수. 임지영
- 백엔드 : 김나은, 김경하, 한유림


## 프로젝트 시작하기


### 1. .env 파일 작성하기
프로젝트 최상위 경로에 .env 파일을 만든 후 아래 내용을 넣고, MONGODB_URL 을 수정한 후 저장합니다.

만약 로컬에서 몽고DB를 실행했다면, 해당 db 주소를 MONGODB_URL 에 입력하면 됩니다.

```
PORT = 5000
MONGODB_URL = mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.5
```

### 3. 로컬서버 시작하기
1. 프로젝트 상위경로에서 npm install
```
porshaw-project> npm install
```
2. node index.js 로 로컬서버 시작
```
porshaw-project> node index.js
서버가 정상적으로 시작되었습니다. http://localhost:5000
MongoDB Connected... mongodb://localhost:27017
```
3. http://localhost:5000 경로로 이동하여 로그인 페이지가 뜨는지 확인합니다. 뜨면 성공!

## 프로젝트 구성(240430 수정)
```
portfolio/
│
├── public/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   ├── img/
│   │   └── profile.jpg
│   │
│   ├── fonts/
│   │   └── ...
│   │
│   └── favicon.ico
│
├── routes/
│   ├── index.js
│   ├── user.js
│   └── ...
│
├── models/
│   ├── user.js
│   └── ...
│
├── services/
│   └── ...
│
├── server.js
│
├── views/
│   └── index.html
│
└── package.json
```
### 프론트
**./public/img**
이미지 추가

**./public/js**
자바스크립트파일 추가

**./public/css**
css 파일 추가

**./views**
각 페이지 html 추가

### 백
**./routes**
라우터 추가

**./models**
스키마 등 추가
