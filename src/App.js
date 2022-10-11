import './App.css';
import Watches from './watches';
import Filecycle from './filecycle';

function App() {
  
  return (
    <>
      <div className='task'>Мировые часы</div>
      <Watches />
      <div className='task'>CRUD</div>
      <Filecycle />
    </>
  );
}

export default App;
