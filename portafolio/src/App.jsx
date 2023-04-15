import './App.css'

function App() {

  return (
    <>
      <nav className="navbar">
          <ul className='nav__list'>
            <a href="#" className='nav__home'>
              <i className='home_img'></i>
              <span className='home_text'>Home</span>
            </a>


            <a href="#" className='nav__skills'>
              <i className='skills_img'></i>
              <span className='skills_text'>skills</span>
            </a>


            <a href="#" className='nav__aboutme'>
              <i className='aboutme_img'></i>
              <span className='aboutme_text'>about me</span>
            </a>


            <a href="#" className='nav__contact'>
              <i className='contact_img'></i>
              <span className='contact_text'>contact</span>
            </a>
          </ul>
      </nav>
    </>
  )
}

export default App
