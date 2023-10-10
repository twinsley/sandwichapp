import React, { useState } from 'react';
import {
    Button,
    Collapse,
    Input,
    InputGroup,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
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
            //TODO get search working
            <div className="align-content-end me-3">
            <InputGroup size="sm" style={{width: "350px"}} >
                <Button>
                    Search
                </Button>
                <Input />
            </InputGroup>
            </div>


        </Navbar>
    );
};

export default AppNavbar;