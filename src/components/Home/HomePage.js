import videoHomepage from '../../assets/video-homepage.mp4'
import '../../App.scss';

function HomePage(props) {
  return (
    <div className="homepage-container">
      <video autoPlay loop muted >
        <source
          src={videoHomepage}
          type="video/mp4"
        />
      </video>
      <div className='homepage-content'>
        <h1 className='title'>There's a better way to ask</h1>
        <p className='desc'>You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy.</p>
        <button>Get started - it's free</button>
      </div>
    </div>
  )
}

export default HomePage