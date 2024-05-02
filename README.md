# PorShaw Project

## 팀 정보

- 팀명 : PorShaW
- 팀장 : 오선아
- 프론트 : 김민석, 오선아, 이한수. 임지영
- 백엔드 : 김나은, 김경하, 한유림


## 프로젝트 시작하기

### 1. 로컬 MongoDB 설정(Windows 기준)
1. [공식 사이트](https://www.mongodb.com/docs/manual/installation/)의 설치 가이드 에서 사용 중인 OS 의 Community Edition을 클릭합니다.

2. 클릭 후의 지시사항을 따라가며 설치합니다.
3. 설치완료 후, MongoDB Compass 프로그램을 실행합니다.
4. 메인화면의 URI를 확인한 후, Connect 를 클릭합니다.
5. 좌측 메뉴중 Databases 메뉴의 +를 클릭해 새 데이터베이스를 만듭니다.
6. Database Name은 elice_project_01로, Collection Name 은 users로 설정한 후 Create Database를 합니다.

아래는 아직 회원가입 기능이 완료되지않아, 테스트용 유저를 추가 해 로그인 테스트를 해 볼 수 있도록 하는 과정입니다.

7. 새 데이터 베이스가 만들어진걸 확인했다면, users 컬렉션으로 이동합니다.
8. Add DATA - Insert document 버튼을 눌러 아래의 예시와 같이 새 유저 데이터를 만든 후 Insert합니다.
```
/** 
* Paste one or more documents here
*/
{
  "_id": {
    "$oid": "6633a4d746cbb56738b758ec"
  },
  "email" : "test",
  "password" : "test"
}
```

### 2. .env 파일 작성하기
프로젝트 최상위 경로에 .env 파일을 만든 후 아래 내용을 넣고, MONGODB_URL 을 수정한 후 저장합니다.

```
PORT = 5000
MONGODB_URL = 위에서 만든 로컬 mongodb url 입력. (예 : mongodb://localhost:27017)
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
