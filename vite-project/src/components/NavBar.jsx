import logo from '../img/logo.png'
import '../app.css'

function NavBar() {
  return (
      <div className="NavBar">
        <img className="LogoImg" src={logo} alt="logo" />
      </div>
  );
}

export default NavBar;