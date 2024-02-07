import logo from '../img/logo.png'
import '../app.css'

function NavBar() {
  return (
      <div className="NavBar">
        <img className="LogoImg" src={logo} alt="logo" />
        <h1 className="AppName">We can do this!</h1>
      </div>
  );
}

export default NavBar;