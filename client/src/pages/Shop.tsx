import { FC, useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "../main";
import { fetchTypes } from "../http/typeAPI";
import { fetchBrands } from "../http/brandAPI";
import { fetchDevices } from "../http/DeviceAPI";

const Shop: FC = observer(() => {

    const { types, brands, devices } = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => types.setTypes(data))
        fetchBrands().then(data => brands.setBrands(data))
        fetchDevices().then(data => devices.setDevices(data.rows))
    }, [])

    return (
        <Container>
            <Row className="mt-4">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    )
})

export default Shop