import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';

import { Outlet } from 'react-router-dom';
import Footer from './components/Blog/Footer';
import HomePage from './components/Home/HomePage';

function App() {
  return (
    <div className="app-container" style={{height: '10000px'}}>
        <div className='app-header'>
          {/* <Header/> */}
          <HomePage/>
        </div>
        <div className='main-container'>
          <div className=''>

          </div>

          <div className='app-contain'>
            <Outlet/>
          </div>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
