import '../../App.scss';
import Navbar from '../Blog/Navbar';
import Options from '../Blog/Options';

function HomePage() {
  return (
    <div className="homepage-container">
      <div className='header'>
        <Navbar/>
        <Options/>
      </div>
    </div>
  )
}

export default HomePage