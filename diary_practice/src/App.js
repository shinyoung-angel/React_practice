import { useEffect, useReducer, useRef} from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import LifeCycle from './LifeCycle';

const reducer = (state, action) => {
  switch(action.type){
  case 'INIT' : {
    return action.data
  }
  case 'CREATE' : {
    const created_date = new Date().getTime();
    const newItem = {
      ...action.data,
      created_date
    }
    return [newItem, ...state]
  }
  case 'REMOVE' : {
    return state.filter((it)=> it.id !== action.targetId)
    
  }
  case 'EDIT' :{
    return state.map((it)=> it.id === action.targetId? 
    {...it, content:action.newContent}:it)

  }
  default :
  return state;
}
};

function App() {

  // reducer를 쓰려고 data 주석 처리하긔!!!
  // const [data, setData] = useState([]);

  const [data, dispatch] = useReducer(reducer, []);
  
  const dataId = useRef(0);

  const getData = async() => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random()*5)+1,
        created_date: new Date().getTime(),
        id: dataId.current++
      };
    });

    dispatch({type:"INIT", data: initData});
    // setData(initData);
  };

  useEffect(()=>{
    getData();
  }, []);

  const onCreate = (author, content, emotion) => {

    dispatch({type: 'CREATE', data: {author, content, emotion, id: dataId.current}})
    // const created_date = new Date().getTime();
    // const newItem = {
    //   author,
    //   content,
    //   emotion,
    //   created_date,
    //   id: dataId.current
    // }
    dataId.current += 1;
    // setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    dispatch({type: 'REMOVE', targetId})
    // console.log(`${targetId}삭제됨`)
    // const newDiaryList = data.filter((it)=> it.id !== targetId);
    // setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    dispatch({type:'EDIT', targetId, newContent})
    // setData(
    //   data.map((it) => it.id === targetId ? {...it, content:newContent} : it)
    // )
  };

  return (
    <div className="App">
      <LifeCycle/>
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onRemove={onRemove} onEdit={onEdit} diaryList={data}/>
    </div>
  )
};
export default App;
