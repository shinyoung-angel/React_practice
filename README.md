## React 기초 연습

#### 1. 리액트 프로젝트 생성

- 리액트 프로젝트 생성

```bash
npx create-react-app 프로젝트명
```

- 서버 켜기

```bash
npm start --> 얘는 react
npm run serve --> 얘는 Vue
```

- index.js의 역할

    App.js를 public 폴더 안의 index.html에다가 넣어줘!

#### 2. HTML 대신 JSX를 써야함

1. 태그에 class를 주고싶다면?
   
   > class가 아닌 className 사용

2. style 태그를 사용할 때
   
   > ```javascript
   > <div style={{color: 'white', fontSize: '15px'}}>호</div>
   > ```

#### 

#### 3. 변수말고 state 사용

1. {useState} 상단에 첨부
   
   > import React, { useState } from 'react';
