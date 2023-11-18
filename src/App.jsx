import './App.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';

function App() {
  return (
    <>
      <div>
        <div className='appContainer'>

          <Header />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
