import React from "react";
import { Link } from "react-router-dom";

const Snickers = () => {
    return (
        <>
            <h2>Snickers</h2>
            <Link style={{ display: "block" }} to="/">Go Back</Link>
            <img
                style={{ width: "20%" }}
                src="https://m.media-amazon.com/images/I/71+r1gAwsZL._SX425_.jpg"
                alt="snickers"></img>
        </>
    )
}

export default Snickers;