import React, {useEffect, useState} from 'react';
import './App.css';

import { Link } from 'react-router-dom';
import {
    Button,
    Card, CardBody, CardText, CardTitle,
    Collapse,
    Container,
    Input,
    InputGroup,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavLink, Table
} from 'reactstrap';

const Home = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [searchFoodItems, setSearchFoodItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const menuCards = foodItems.map(foodItem => {
        return <Card  key={foodItem.id}
                      style={{
                          width: '18rem',
                          margin: "3px"
                      }}
        >
            <img
                alt={foodItem.name}
                src={foodItem.image_URL}
                width="260px"
                height="260px"
                className="pt-3"
            />
            <CardBody >
                <CardTitle tag="h5">
                    {foodItem.name}
                </CardTitle>
                <CardText>
                    {foodItem.description}
                </CardText>
                <Button >
                    {/*TODO make buy button add item to cart and prompt for toppings in popup*/}
                    Buy
                </Button>
            </CardBody>
        </Card>
    });
    const [cartItems, setCartItems] = useState([]);

    let searchResults = [];
    function search() {
        searchFoodItems.forEach(function(item) {
            if(item.name.toLowerCase().includes(input.toLowerCase()) || item.description.toLowerCase().includes(input.toLowerCase())) {
                searchResults.push(item);

            }})
        if (searchResults.length > 0) {
            setFoodItems(searchResults);
        } else {
            alert("No results found.")
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setInput(value)
    }

    useEffect(() => {
        setLoading(true);

        fetch('/api/foodItems')
            .then(response => response.json())
            .then(data => {
                setFoodItems(data._embedded.foodItems);
                setSearchFoodItems(data._embedded.foodItems);
                setLoading(false);
            })
    }, []);


    const cartTable = cartItems.map(cartitem => {
        return(
            <tr>
                <td>
                    cartitem.name
                </td>
            </tr>
        )
    });


    return (
        <div >
            <Navbar color="dark" dark expand="md" className="container-fluid">


                <NavbarBrand tag={Link} to="/" style={{color: "whitesmoke"}} className="ms-3">Home</NavbarBrand>
                <NavLink tag={Link} to="/FoodItems" style={{color: "lightgray"}} className="px-3">Manage Menu Items</NavLink>
                <NavLink tag={Link} to="/Toppings" style={{color: "lightgray"}} className="px-3">Manage Toppings</NavLink>
                <NavLink tag={Link} to="/reports" style={{color: "lightgray"}} className="px-3">Reports</NavLink>

                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }}/>
                <Collapse isOpen={isOpen} navbar>
                </Collapse>
                {/*//TODO get search working*/}
                <div className="align-content-end me-3">
                    <InputGroup size="sm" style={{width: "350px"}} >
                        <Button onClick={search} >
                            Search
                        </Button>
                        <Input onChange={handleChange} onKeyDown={event => {
                            if (event.key === "Enter") {
                                search();}}}/>
                    </InputGroup>
                </div>

            </Navbar>
            <Container fluid className="row" style={{height: "89vh"}}>
                <div className="col-9"><div className="row">{menuCards}</div></div>
                <div className="col-3">
                    <div className="h-100 bg-secondary-subtle">
                    <Table striped bordered>
                        <thead>
                        <tr>
                            <th>Product</th>
                        </tr>
                        </thead>
                        {cartTable}
                    </Table>
                </div></div>

            </Container>
        </div>
    );
}

export default Home;