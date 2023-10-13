import React, {useEffect, useRef, useState} from 'react';
import {
    Button,
    ButtonGroup,
    Collapse,
    Container, Input, InputGroup,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavLink,
    Table,
} from 'reactstrap';
import { Link } from 'react-router-dom';
const FoodItemList = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [searchFoodItems, setSearchFoodItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");

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

    const remove = async (id) => {
        await fetch(`/api/foodItems/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedFoodItem = [...foodItems].filter(i => i.id !== id);
            setFoodItems(updatedFoodItem);
        });
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    const foodItemList = foodItems.map(foodItem => {
        return <tr key={foodItem.id}>
            <td>{foodItem.id}</td>
            <td style={{whiteSpace: 'nowrap'}}>{foodItem.name}</td>
            <td>{foodItem.description}</td>
            <td>{foodItem.price}</td>
            <td>{foodItem.ingredients}</td>
            <td>
                <ButtonGroup>
                    <Button size="sm" color="primary" tag={Link} to={"/foodItems/" + foodItem.id}>Edit</Button>
                    <Button size="sm" color="danger" onClick={() => remove(foodItem.id)}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    });

    return (
        <div>
            <Navbar color="dark" dark expand="md" className="container-fluid">


                <NavbarBrand tag={Link} to="/" style={{color: "whitesmoke"}} className="ms-3">Home</NavbarBrand>
                <NavLink tag={Link} to="/FoodItems" style={{color: "lightgray"}} className="px-3">Manage Menu Items</NavLink>
                <NavLink tag={Link} to="/reports" style={{color: "lightgray"}} className="px-3">Reports</NavLink>

                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }}/>
                <Collapse isOpen={isOpen} navbar>
                </Collapse>
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
            <Container>
                <div className="float-end">
                    <Button color="success" tag={Link} to="/fooditems/new">Add Menu Item</Button>
                </div>
                <h3>Menu Item</h3>
                <Table className="mt-4 w-100">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th width="15%">Name</th>
                        <th width="20%">Description</th>
                        <th width="10%">Price</th>
                        <th width="50%">Ingredients/Instructions</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {foodItemList}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default FoodItemList;