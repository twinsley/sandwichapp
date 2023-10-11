import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {Button, ButtonGroup, Card, CardBody, CardSubtitle, CardText, CardTitle, Container} from "reactstrap";


const MenuPage = () => {
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

    const menuCards = foodItems.map(foodItem => {
        return <Card
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

    return(
        <Container>
            <div className="row">{menuCards}</div>
        </Container>
    )
};

export default MenuPage;