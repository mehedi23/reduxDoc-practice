import './App.css';
import {useSelector , useDispatch} from 'react-redux'

function App() {

  const dispatching = useDispatch();
  const state = useSelector(state => state.counter);

  console.log(state)

  const incrementCall = () =>{
    dispatching({ type: "increment" })
  }

  const dicrementCall = () => {
    dispatching({type: "dicrement"})
  }


  return (
    <div className="App">
       <h1>{state}</h1>

       <button onClick={incrementCall}>+</button>
       <button onClick={dicrementCall}>-</button>
    </div>
  );
}

export default App;
