import React, { useRef,useState } from "react";

const DiaryEditor = ({onCreate}) => {

    // const [author, setAuthor] = useState("d");
    // const [content, setContent] = useState("enter");
    // 위에 따로 쓴 author, content state를 하나로 합칠 수 있어!!

    // Dom 요소 선택방법!!!!!!!!
    const authorInput = useRef();
    const contentInput = useRef();

    
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
    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input 
                ref={authorInput}
                name="author"
                value={state.author}
                onChange={handleChangeState}/>
            </div>

            <div>
                <textarea
                ref={contentInput}
                name="content"
                value={state.content}
                onChange={handleChangeState}/>
            </div>

            <div>
                <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
            </div>

            <div>
                <button onClick={handleSubmit}>제출하기</button>
            </div>




            {/* <div>
                <input
                name = "author" 
                value={state.author} 
                // onChange={(e)=>{
                //     setState({
                //         ...state,
                //         author: e.target.value
                //     })
                // }}
                onChange={handleChangeState}
                
                />
            </div>
            <div>
                <textarea
                name="content"
                value={state.content}
                // onChange={(e)=>{
                //     setState({
                //         author: state.author,
                //         content: e.target.value
                //     })
                // }}
                onChange={handleChangeState}
                
                />
            </div>

            <div>
                <span>오늘의 감정 점수: </span>
                <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>

            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div> */}
        </div>

    )

};

export default DiaryEditor;