import { FC, useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "../main";
import { fetchTypes } from "../http/typeAPI";
import { fetchBrands } from "../http/brandAPI";
import { fetchDevices } from "../http/deviceAPI";
import Pages from "../components/Pages";

const Shop: FC = observer(() => {

    const { types, brands, devices } = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => types.setTypes(data))
        fetchBrands().then(data => brands.setBrands(data))
        fetchDevices(null, null, 1, 3).then(data => {
            devices.setDevices(data.rows)
            devices.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(types.selectedType.id, brands.selectedBrand.id, devices.page, 3).then(data => {
            devices.setDevices(data.rows)
            devices.setTotalCount(data.count)
        })
    }, [devices.page, types.selectedType, brands.selectedBrand])

    return (
        <Container>
            <Row className="mt-4">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                    <Pages />
                </Col>
            </Row>
        </Container>
    )
})

export default Shop