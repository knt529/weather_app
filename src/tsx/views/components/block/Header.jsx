import "../../../styles/block/Header.css"

function Header(){
  return(
    <div className="Header">
     <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <a href="#" className="brand">
          <h1>Weather App</h1>
        </a>     
      </div>
    </header>
   </div>
  )
}

export default Header