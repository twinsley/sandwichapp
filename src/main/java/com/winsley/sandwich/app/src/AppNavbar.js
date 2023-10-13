import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar color="dark" dark expand="md" className="container-fluid">
            <NavbarBrand tag={Link} to="/" style={{color: "whitesmoke"}} className="ms-3">Home</NavbarBrand>
            <NavLink tag={Link} to="/FoodItems" style={{color: "lightgray"}} className="px-3">Manage Menu Items</NavLink>
            <NavLink tag={Link} to="/Toppings" style={{color: "lightgray"}} className="px-3">Manage Toppings</NavLink>
            <NavLink tag={Link} to="/reports" style={{color: "lightgray"}} className="px-3">Reports</NavLink>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }}/>
            <Collapse isOpen={isOpen} navbar>
            </Collapse>
        </Navbar>
    );
};

export default AppNavbar;