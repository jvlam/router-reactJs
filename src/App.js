import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app-container" style={{height: '10000px'}}>
        <div className='app-header'>
          <Header/>
        </div>
        <div className='main-container'>
          <div className=''>

          </div>

          <div className='app-contain'>
            <Outlet/>
          </div>
        </div>
    </div>
  );
}

export default App;
