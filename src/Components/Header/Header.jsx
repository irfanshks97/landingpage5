import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <header className="w-100">
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand mb-0 h5">Microsoft Azure</span>
          <img src={logo} width="90" className="img-fluid" alt="Logo" />
        </div>
      </nav>
    </header>
  );
}
