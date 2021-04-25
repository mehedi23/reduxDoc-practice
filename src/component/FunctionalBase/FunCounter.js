import {useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import NewRedu from './NewRedu'
import {oneActionFun} from '../../store/action/oneAction'

function App() {

  const dispatching = useDispatch();
  const state = useSelector(state => state.counterReducer.counter);

  useEffect(() => {
    dispatching(oneActionFun())
  }, [dispatching])

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

       <NewRedu/>
    </div>
  );
}

export default App;
