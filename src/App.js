import './App.css';
import React, { useState } from 'react';
import logo from'./logo.svg';

function App() {
  
  let [title, titleChange] = useState(['react 공부 시작', '오늘도 시작~']);
  let [num, numChange] = useState(0);

  function change(){
    // titleChange(['vue 공부 시좌학', '오늘도 시작~']);
    // deepcopy해주기~~~~
    var newArray = [...title];
    newArray[0] = 'angular 공부 시좍';
    titleChange(newArray);
  }

  // let posts = '개발 시좍'
 
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color: 'white', fontSize: '15px'}}>개발 Blog</div>
      </div>
      <img style={{width: '100px'}} src={logo} />
      <div className="list">
        <h3>{title[0]} <span onClick={()=>{numChange(num+1)}}>👍</span> {num}</h3>
        <p>3월 1일 발행 <button onClick={change}>변경</button></p>
        {/* change() 처럼 뒤에 괄호가 있으면 바로 실행해!라는 뜻 */}
        <hr/>
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>3월 2일 발행</p>
        <hr/>
      </div>

      <Modal></Modal>

    </div>
  );
}

//컴포넌트 이름 시작은 대문자
function Modal(){
  return (
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}
export default App;
