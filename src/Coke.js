import React from "react";
import { Link } from "react-router-dom";

const Coke = () => {
    return (
        <>
            <h2>Coke</h2>
            <Link style={{ display: "block" }} to="/">Go Back</Link>
            <img
                style={{ width: "20%" }}
                src="https://media.istockphoto.com/photos/cocacola-classic-in-a-glass-bottle-picture-id499208007?k=20&m=499208007&s=612x612&w=0&h=ZGZi6HI8himQzfsWxH9Ak3CU2zFSGK4gyzAHnRLw7kY="
                alt="coke"></img>
        </>
    )
}

export default Coke;