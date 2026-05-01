import './Header.css'

function Header() {
  
  return (
    <>
      <header>
        <div className='right-part'>YASSIR SAOUI</div>
        <div className='list-elements'>
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='left-part'>
          <a href="mailto:yassirsaoui06@gmail.com">Hire me</a>
        </div>
      </header>
    </>
  )
}

export default Header
