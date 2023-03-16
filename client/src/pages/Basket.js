import React from 'react';
import {Container, Row} from "react-bootstrap";

const Basket = () => {
    const basket = [
        {id:1, }
    ]
    return (
        <Container
            className="d-flex justify-content-between align-items-center mt-4"
        >
            <h2>Корзина</h2>
            <Row className="d-flex flex-column m-2">
                <h1>Характеристики</h1>

            </Row>
        </Container>
    );
};

export default Basket;