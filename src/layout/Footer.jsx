import React from "react";
import Logo from "../components/UI-components/Logo";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="col-3">
        <Logo size={125} color="black" />
        <p className="footer__copyright">Copyright © 2021 Seedly</p>
        <h2 className="footer__header">Contact</h2>
        <a className="footer__contact" href="mailto:grow@seedly.com.au">
          grow@seedly.com.au
        </a>
      </div>
      <div className="footer__link-group">
        <div className="col-3">
          <h2 className="footer__heading">Useful links</h2>
          <ul>
            <li>Shipping FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className="col-3">
          <h2 className="footer__heading">Account</h2>
          <ul>
            <li>Shipping FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
