import { FC } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import bigStar from '../assets/bigStar.png'

const DevicePage: FC = () => {

    const device = { id: 1, name: 'item 1', price: 1000, rating: 0, img: 'https://img.freepik.com/premium-photo/image-colorful-galaxy-sky-generative-ai_791316-9864.jpg?w=2000' }
    const description = [
        { id: 1, title: 'Камера', description: '12 мп' },
        { id: 2, title: 'Процессор', description: 'пентиум 3' },
        { id: 3, title: 'Оперативная память', description: '5 гб' },
        { id: 4, title: 'Кол-во ядер', description: '2' },
        { id: 5, title: 'Аккумулятор', description: '4000' },
    ]

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2 style={{ textAlign: 'center' }}>{device.name}</h2>
                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{ background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column justify-content-around align-items-center"
                        style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className={"d-flex flex-column m-2"}>
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row
                        key={info.id}
                        style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}
                    >
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
}

export default DevicePage