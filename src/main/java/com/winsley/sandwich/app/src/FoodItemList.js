import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
const FoodItemList = () => {

    const [foodItems, setFoodItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('/api/foodItems')
            .then(response => response.json())
            .then(data => {
                setFoodItems(data._embedded.foodItems);
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
        let ingredients = ''
        console.log(foodItem)
        // if (foodItem.ingredients.length() > 0)
        // {ingredients = foodItem.ingredients.name.toString()}
        return <tr key={foodItem.id}>
            <td style={{whiteSpace: 'nowrap'}}>{foodItem.name}</td>
            <td>{foodItem.description}</td>
            <td>{foodItem.price}</td>
            <td>{ingredients}</td>
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
            <AppNavbar/>
            <Container fluid>
                <div className="float-end">
                    <Button color="success" tag={Link} to="/fooditems/new">Add Menu Item</Button>
                </div>
                <h3>Food Item</h3>
                <Table className="mt-4">
                    <thead>
                    <tr>
                        <th width="15%">Name</th>
                        <th width="20%">Description</th>
                        <th width="10%">Price</th>
                        <th>Ingredients</th>
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