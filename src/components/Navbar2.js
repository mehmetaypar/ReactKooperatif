import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/logo_sharp1.png";
export default class Navbar2 extends Component {
    state = {
        isOpen: false
    };
    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };
    render() {
        return (
            <nav className="nav">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            {/*<img src={logo} alt="alternative txt" />*/}
                        </Link>
                        <button
                            type="button"
                            className="nav-btn"
                            onClick={this.handleToggle}
                        >
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul
                        className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
                    >
                        <li>
                            <Link to="/">Ana Sayfa  </Link>
                        </li>
                        <li>
                            <Link to="/Services">Hizmetlerimiz  </Link>
                        </li>
                        <li>
                            <Link to="/Aboutus">Hakkımızda</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Iletisim</Link>
                        </li>
                        {/*<li>*/}
                        {/*  <Link to="/location">Lokasyonlarimiz</Link>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </nav>
        );
    }
}
