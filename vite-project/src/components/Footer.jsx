import React from "react"
import logoFooter from '../img/logo-footer.png'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="Footer">
            <p> </p>
            <img className="LogoFooter" src={logoFooter} alt="logo" />
            <Link to="https://github.com/Paulinecvt/project-react">Github Repo</Link>
        </div>
    );
}

export default Footer;