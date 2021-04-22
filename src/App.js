import './App.css';
import ClassCounter from './component/ClassBase/ClassCounter';
import FunCounter from './component/FunctionalBase/FunCounter';

function App() {
  return (
    <div className="App"> 
      <FunCounter/>
      <ClassCounter/>
    </div>
  );
}

export default App;
