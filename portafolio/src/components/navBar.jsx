
import '../App.css'


function Navbar() {
  
  return (
    <>
<nav className="navbar">
<ul className='nav__list'>
  <a href="#" className='nav__home'>
    <i class="fa-solid fa-house"></i>
    <span className='nav__span'>Home</span>
  </a>


  <a href="#" className='nav__skills'>
    <i class="fa-solid fa-eye"></i>
    <span className='nav__span'>skills</span>
  </a>


  <a href="#" className='nav__aboutme'>
    <i class="fa-solid fa-user"></i>
    <span className='nav__span'>about me</span>
  </a>


  <a href="#" className='nav__contact'>
    <i class="fa-solid fa-paper-plane"></i>
    <span className='nav__span'>contact</span>
  </a>
</ul>
</nav>

    </>
  )
}

export default Navbar
