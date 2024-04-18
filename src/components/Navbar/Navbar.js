import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="container m-0 p-0">
            <nav className="row p-0 m-0">
                <div className="nav">
                    <div className="col-xl-4 navLogo ">POPMOVIES</div>
                    <div className="col-xl-4 text-start">
                        <ul className="menu">
                            <li className="menuList">
                                {" "}
                                <Link
                                    to="/"
                                    className="menuElement"
                                >
                                    HOME
                                </Link>
                            </li>
                            <li className="menuList">
                                <Link to="/movies" className="menuElement">
                                    MOVIES
                                </Link>
                            </li>
                            <li className="menuList text-truncate">
                                <Link to="/list" className="menuElement">
                                    MY MOVIE LIST
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-4 text-end"></div>
                </div>
            </nav>
        </div>
    );
}
