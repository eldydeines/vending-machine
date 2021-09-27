import React from "react";
import { Link } from "react-router-dom";

const Chips = () => {
    return (
        <>
            <h2>Chips</h2>
            <Link style={{ display: "block" }} to="/">Go Back</Link>
            <img
                style={{ width: "20%" }}
                src="https://m.media-amazon.com/images/I/81vJyb43URL._SL1500_.jpg"
                alt="chips"></img>
        </>
    )
}

export default Chips;