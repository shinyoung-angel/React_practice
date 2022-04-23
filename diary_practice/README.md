# 

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
