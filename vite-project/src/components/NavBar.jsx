import logo from './img/logo.png';

function NavBar() {
  return (
      <div className="NavBar">
        <h1 className="AppName">To Do List</h1>
        <img className="LogoImg" src={logo} alt="logo" />
      </div>
  );
}

export default NavBar;