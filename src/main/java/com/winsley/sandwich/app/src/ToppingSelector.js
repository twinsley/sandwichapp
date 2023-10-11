import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {Button, ButtonGroup, Card, CardBody, CardSubtitle, CardText, CardTitle, Container} from "reactstrap";


const ToppingSelector = () => {
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

    const toppingCards = toppings.map(topping => {
        return <Card
            style={{
                width: '18rem',
                margin: "3px"
            }}
        >
            <img
                alt={topping.name}
                src={topping.image_URL}
            />
            <CardBody>
                <CardTitle tag="h5">
                    {topping.name}
                </CardTitle>
                <CardText>
                    {topping.description}
                </CardText>
                <Button>
                    {/*TODO make buy button add item to cart and prompt for toppings in popup*/}
                    Buy
                </Button>
            </CardBody>
        </Card>
    });

    return(
        <Container>
            <div className="row">{toppingCards}</div>
        </Container>
    )
};

export default ToppingSelector;