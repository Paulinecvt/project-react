import logo from "./img/logo.png"

function NavBar (props){
    return 
    <>
    <h1>{props.AppName}</h1>
    <img src={logo} alt="logo"/>
    </>
};

export default NavBar;