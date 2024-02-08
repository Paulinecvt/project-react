import React from "react"
import logoFooter from '../img/logo-footer.png'

function Footer() {
    return (
        <div className="Footer">
            <p> </p>
            <img className="LogoFooter" src={logoFooter} alt="logo" />
            <a href="https://github.com/Paulinecvt/project-react">Github Repo</a>
        </div>
    );
}

export default Footer;