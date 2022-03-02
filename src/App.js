import './App.css';
import React, { useState } from 'react';

function App() {
  
  let [title, titleChange] = useState('react 공부 시작');

  let posts = '개발 시좍'
  
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color: 'white', fontSize: '15px'}}>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{title}</h3>
        <p>3월 1일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
