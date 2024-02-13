import logo from '../img/logo.png'
import { Link } from 'react-router-dom';
import '../app.css'

function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/">
        <img className="LogoImg" src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default NavBar;