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
        ingredients: [],
    };
    const [foodItem, setFoodItem] = useState(initialFormState);
    const navigate = useNavigate();
    const { id } = useParams();
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        if (id !== 'new') {
            fetch(`/api/foodItems/${id}`)
                .then(response => response.json())
                .then(data => setFoodItem(data));
        }
        fetch(`/api/ingredients`)
            .then(response => response.json())
            .then(data => setIngredients(data._embedded.ingredients))
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
                    <FormGroup className="col-md-4 mb-3">
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={foodItem.name || ''}
                               onChange={handleChange} autoComplete="name"/>
                    </FormGroup>
                        <FormGroup className="col-md-4 mb-3">
                            <Label for="price">Price</Label>
                            <Input type="number" name="price" id="price" value={foodItem.price || ''}
                                   onChange={handleChange} autoComplete="price"/>
                        </FormGroup>
                        {/*TODO get ingredients selector working*/}
                        {/*<FormGroup className="col-md-4 mb-3">*/}
                        {/*    <select multiple name="ingredients" id="ingredients" defaultValue={foodItem.ingredients || ''}*/}
                        {/*           onChange={handleChange} autoComplete="ingredients">*/}
                        {/*    <option value="">Select the ingredients</option>*/}
                        {/*    {ingredients.map(ingredient => (*/}
                        {/*        <option key={ingredient.id}>*/}
                        {/*            {ingredient.name}*/}
                        {/*        </option>))} </select>*/}
                        {/*</FormGroup>*/}
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