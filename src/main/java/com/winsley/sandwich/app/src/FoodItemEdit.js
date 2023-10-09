import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

const FoodItemEdit = () => {
    const initialFormState = {
        name: '',
        description: '',
        price: '',
        image_URL: '',
        ingredients: '',
    };
    const [foodItem, setFoodItem] = useState(initialFormState);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id !== 'new') {
            fetch(`/api/foodItems/${id}`)
                .then(response => response.json())
                .then(data => setFoodItem(data));
        }
    }, [id, setFoodItem]);

    const handleChange = (event) => {
        const { name, value } = event.target

        setFoodItem({ ...foodItem, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await fetch(`/api/foodItems${foodItem.id ? `/${foodItem.id}` : ''}`, {
            method: (foodItem.id) ? 'PATCH' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(foodItem)
        });
        setFoodItem(initialFormState);
        navigate('/foodItems');
    }

    const title = <h2>{foodItem.id ? 'Edit FoodItem' : 'Add FoodItem'}</h2>;


    return (<div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-4 mb-3">
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={foodItem.name || ''}
                               onChange={handleChange} autoComplete="name"/>
                    </FormGroup>
                        <FormGroup>
                            <Label for="price">Price</Label>
                            <Input type="number" name="price" id="price" value={foodItem.price || ''}
                                   onChange={handleChange} autoComplete="price"/>
                        </FormGroup>
                        </div>
                        <div className="col-md-4 mb-3">
                            <Label for="ingredients">Ingredients / Assembly Instructions</Label>
                            <Input type="textarea" id="ingredients" name="ingredients" value={foodItem.ingredients || ''}
                                   onChange={handleChange} cols="60" rows="5"/>
                        </div>
                    </div>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="text" name="description" id="description" value={foodItem.description || ''}
                               onChange={handleChange} autoComplete="description"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="image_URL">Image URL</Label>
                        <Input type="text" name="image_URL" id="image_URL" value={foodItem.image_URL || ''}
                               onChange={handleChange} autoComplete="image_URL"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/foodItems">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
};

export default FoodItemEdit;