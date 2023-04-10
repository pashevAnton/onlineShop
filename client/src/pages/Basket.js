import React, {useContext} from 'react';
import {Container, Form, Image, Row} from "react-bootstrap";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Basket = observer(() => {
    const {user} = useContext(Context)
    const totalPrice = user.basket.reduce((acc, item) => acc += item.price, 0)
    return (
        <Container
            className=" mt-4"
        >
            <h1>Корзина</h1>
            {user.basket.length ?
                <Row className="d-flex flex-column">
                    {user.basket.map((elem, index) =>
                        <Form
                            className="d-flex justify-content-between mt-3"
                            key={elem.id}
                            style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
                        >
                            <div className="d-flex ms-2">
                                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + elem.img}/>
                                <h4 className="ms-4">{elem.name}</h4>
                            </div>
                            <h4>{elem.price} руб.</h4>
                        </Form>
                    )}
                    <h4 className="d-flex justify-content-end mt-3">Общая сумма: {totalPrice} руб.</h4>
                </Row>
            :
                <h2 style={{textAlign: "center", marginTop: 100, color: "grey"}}>Корзина пуста</h2>
            }

        </Container>
    );
});

export default Basket;