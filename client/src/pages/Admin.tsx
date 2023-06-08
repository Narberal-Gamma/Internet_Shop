import { FC, useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";

const Admin: FC = () => {

    const [isTypeVisible, setIsTypeVisible] = useState<boolean>(false)
    const [isBrandVisible, setIsBrandVisible] = useState<boolean>(false)
    const [isDeviceVisible, setIsDeviceVisible] = useState<boolean>(false)

    return(
        <Container className="d-flex flex-column">
            <Button onClick={() => setIsTypeVisible(true)} variant={'outline-dark'} className="mt-2 p-2">Добавить тип</Button>
            <Button onClick={() => setIsBrandVisible(true)} variant={'outline-dark'} className="mt-2 p-2">Добавить бренд</Button>
            <Button onClick={() => setIsDeviceVisible(true)} variant={'outline-dark'} className="mt-2 p-2">Добавить устройство</Button>
            <CreateType show={isTypeVisible} onHide={() => setIsTypeVisible(false)} />
            <CreateBrand show={isBrandVisible} onHide={() => setIsBrandVisible(false)} />
            <CreateDevice show={isDeviceVisible} onHide={() => setIsDeviceVisible(false)} />
        </Container>
    )
} 

export default Admin