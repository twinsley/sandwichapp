import React, { useEffect, useState } from 'react';
import {
    Button,
    ButtonGroup,
    Collapse,
    Container, Input,
    InputGroup,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavLink,
    Table
} from 'reactstrap';
import { Link } from 'react-router-dom';
const ToppingList = () => {

    const [toppings, setToppings] = useState([]);
    const [searchToppings, setSearchToppings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");

    let searchResults = [];
    function search() {
        searchToppings.forEach(function(item) {
            if(item.name.toLowerCase().includes(input.toLowerCase()) || item.description.toLowerCase().includes(input.toLowerCase())) {
                searchResults.push(item);

            }})
        if (searchResults.length > 0) {
            setToppings(searchResults);
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

        fetch('/api/toppings')
            .then(response => response.json())
            .then(data => {
                setToppings(data._embedded.toppings);
                setSearchToppings(data._embedded.toppings);
                setLoading(false);
            })
    }, []);

    const remove = async (id) => {
        await fetch(`/api/toppings/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedTopping = [...toppings].filter(i => i.id !== id);
            setToppings(updatedTopping);
        });
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    const toppingList = toppings.map(topping => {
        return <tr key={topping.id}>
            <td style={{whiteSpace: 'nowrap'}}>{topping.name}</td>
            <td>{topping.description}</td>
            <td>{topping.price}</td>
            <td>{topping.foodItem}</td>
            <td></td>
            <td>
                <ButtonGroup>
                    <Button size="sm" color="primary" tag={Link} to={"/toppings/" + topping.id}>Edit</Button>
                    <Button size="sm" color="danger" onClick={() => remove(topping.id)}>Delete</Button>
                </ButtonGroup>
            </td>
        </tr>
    });

    return (
        <div>
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
            <Container>
                <div className="float-end">
                    <Button color="success" tag={Link} to="/toppings/new">Add Topping</Button>
                </div>
                <h3>Menu Item</h3>
                <Table className="mt-4 w-100">
                    <thead>
                    <tr>
                        <th width="15%">Name</th>
                        <th width="20%">Description</th>
                        <th width="10%">Price</th>
                        <th width="25%">Menu Item ID</th>
                        <th className="w-25"></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {toppingList}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ToppingList;