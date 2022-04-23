## React 기초 연습

#### 0. 리액트를 사용하는 이유

- 중복 코드 제거 (컴포넌트화 방식)

- 선언형 프로그래밍 

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

2. state 사용 이유는?
   
   > 웹이 App처럼 동작하게 만들고 싶어서
   > 
   > ****state는 변경되면 html이 자동으로 재렌더링 된다 ****

#### 

#### 4. 사용자 입력 처리하기

```javascript
import { useState } from "react";

const DiaryEditor = () => {

    // const [author, setAuthor] = useState("d");
    // const [content, setContent] = useState("enter");
    // 위에 따로 쓴 author, content state를 하나로 합칠 수 있어!!

    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1
    }) 

    // state 상태 변경 방법!!!
    const handleChangeState = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setState({
            ...state,
            [e.target.name]: e.target.value
        })

    };

    const handleSubmit = () => {
        console.log(state)
        alert("success")
    }
    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input 
                name="author"
                value={state.author}
                onChange={handleChangeState}/>
            </div>

            <div>
                <textarea
                name="content"
                value={state.content}
                onChange={handleChangeState}/>
            </div>

            <div>
                <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                </select>
            </div>

            <div>
                <button onClick={handleSubmit}>제출하기</button>
            </div>
        </div>

    )

};

export default DiaryEditor;
```

#### 5. Dom 조작하기 -useRef

```javascript
import {useRef} from "react";

// Dom 요소 선택 방법
const authorInput = useRef();
const contentInput = useRef();

// Dom 요소에 접근해서 focus주기

authorInput.current.focus();

// Dom 요소 지정하기
<input ref={authorInput}/>
```

#### 6. 배열 사용하기1 - 리스트 렌더링

```javascript
## App.js

## dummyList를 만들고 DiaryList.js에다가 props로 넘겨줌 

const dummyList = [
  {
    id:1,
    author:"park",
    content: "hii",
    emotion:2,
    created_date: new Date().getTime()
  },
  {
    id:2,
    author:"pashinrk",
    content: "hii 2",
    emotion:1,
    created_date: new Date().getTime()
  },
  {
    id:3,
    author:"young",
    content: "hii 3",
    emotion:5,
    created_date: new Date().getTime()
  }
]

function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;



## DiaryList.js

props로 받은 아이들을 DiaryItem에다가 하나씩 넘겨줌
import DiaryItem from "./DiaryItem";

const DiaryList = ({diaryList}) => {
    return (
        <div className="DiaryList">
            <h2>Diary List</h2>
            <h4>{diaryList.length}개의 일기가 있습니다</h4>

            <div>
                {diaryList.map((it)=>(
                    // props 받을 때 고유한 key값 필요
                    <DiaryItem key={it.id} {...it}/>
            </div>

        </div>

    )
}

DiaryList.defaultProps={
    diaryList:[]
}
export default DiaryList;


## const DiaryItem = ({author, content, emotion, created_date, id}) => {
    return (
        <div className="DiaryItem">
            <div className="info">
                <span>작성자: {author} | 감정점수: {emotion}</span>
                <br/>
                <span className="date">{new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="content">{content}</div>
        </div>
    )
};

export default DiaryItem;
```





#### 6. 배열 사용하기 2 - 데이터 추가하기

```javascript
## app.js에다 게시글 작성 함수 추가


function App() {

  const [data, setData] = useState([]);
  
  const dataId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList={data}/>
    </div>
  );
}

export default App; 


### DiaryEditor.js에서 app.js로 정보 넘겨주기

## 버튼 클릭할 때 정보를 넘겨
 const handleSubmit = () => {
        if (state.author.length < 1) {
            // 더 이상 진행이 되지 않게하기 위해 return 사용(?)
            authorInput.current.focus();
            //focus

            return; 
        }
        else if (state.content.length < 5) {
            contentInput.current.focus();
            return;
        }
        onCreate(state.author, state.content, state.emotion);
        alert("success")
        setState({
            author: "",
            content: "",
            emotion: 1
        })
    }
```
