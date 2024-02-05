import logo from "./img/logo.png";

function NavBar(props) {
  return (
    <>
      <div className="NavBar">
        <h1 className="AppName">{props.AppName}</h1>
        <img className="LogoImg" src={logo} alt="logo" />
      </div>
    </>
  );
}

export default NavBar;