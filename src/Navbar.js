import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Chips from "./Chips";
import Snickers from "./Snickers";
import Coke from "./Coke";
import "./Navbar.css";
import VendingMachine from "./VendingMachine";

const Navbar = () => {
    return (
        <nav className="Navbar">
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/chips">Chips</NavLink>
            <NavLink exact to="/snickers">Snickers</NavLink>
            <NavLink exact to="/coke">Coke</NavLink>
        </nav>
    )
}

export default Navbar;