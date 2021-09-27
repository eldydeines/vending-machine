import React from "react";
import { BrowserRouter, Route, NavLink, Link } from "react-router-dom";
import Chips from "./Chips";
import Snickers from "./Snickers";
import Coke from "./Coke";
import "./VendingMachine.css";

const VendingMachine = () => {
    return (
        <div>

            <div className="VM-div">
                <h2> Select your snack!</h2>
                <p><Link className="VM-a" exact to="/chips">Chips</Link></p>
                <p><Link className="VM-a" to="/snickers">Snickers</Link></p>
                <p><Link className="VM-a" to="/coke">Coke</Link></p>

                <img src="https://cdn11.bigcommerce.com/s-xun5w23utl/images/stencil/original/products/7306/12542/ams-39-can-bottle-snack-combo-vending-machine__58098.1613967924.jpg?c=1" alt="machine"></img>
            </div >

        </div >
    )
}

export default VendingMachine;