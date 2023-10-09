import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
const ToppingList = () => {

    const [toppings, setToppings] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('/api/toppings')
            .then(response => response.json())
            .then(data => {
                setToppings(data._embedded.toppings);
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
            <AppNavbar/>
            <Container fluid>
                <div className="float-end">
                    <Button color="success" tag={Link} to="/fooditems/new">Add Menu Item</Button>
                </div>
                <h3>Menu Item</h3>
                <Table className="mt-4 w-100">
                    <thead>
                    <tr>
                        <th width="15%">Name</th>
                        <th width="20%">Description</th>
                        <th width="10%">Price</th>
                        <th className="w-50"></th>
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