import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter';
function App() {
  let name = "이히히";

  return (
    <div className="App">
      <MyHeader></MyHeader>
      <Counter/>
    </div>
  );
}

export default App;
