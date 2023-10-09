import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

const ToppingEdit = () => {
    const initialFormState = {
        name: '',
        description: '',
        price: '',
        image_URL: '',
        ingredients: '',
    };
    const [topping, setTopping] = useState(initialFormState);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id !== 'new') {
            fetch(`/api/toppings/${id}`)
                .then(response => response.json())
                .then(data => setTopping(data));
        }
    }, [id, setTopping]);

    const handleChange = (event) => {
        const { name, value } = event.target

        setTopping({ ...topping, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await fetch(`/api/toppings${topping.id ? `/${topping.id}` : ''}`, {
            method: (topping.id) ? 'PATCH' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(topping)
        });
        setTopping(initialFormState);
        navigate('/toppings');
    }

    const title = <h2>{topping.id ? 'Edit Topping' : 'Add Topping'}</h2>;


    return (<div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={handleSubmit}>
                    <div className="row">
                            <FormGroup className="col-md-4 mb-3">
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" value={topping.name || ''}
                                       onChange={handleChange} autoComplete="name"/>
                            </FormGroup>
                            <FormGroup className="col-md-4 mb-3">
                                <Label for="price">Price</Label>
                                <Input type="number" name="price" id="price" value={topping.price || ''}
                                       onChange={handleChange} autoComplete="price"/>
                            </FormGroup>
                    </div>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="text" name="description" id="description" value={topping.description || ''}
                               onChange={handleChange} autoComplete="description"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="image_URL">Image URL</Label>
                        <Input type="text" name="image_URL" id="image_URL" value={topping.image_URL || ''}
                               onChange={handleChange} autoComplete="image_URL"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/toppings">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
};

export default ToppingEdit;