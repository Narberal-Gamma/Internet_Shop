import { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { Button, Modal, Form, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import { IModal } from "../../types/modal";
import { IDeviceInfo } from "../../types/deviceInfo";
import { fetchTypes } from "../../http/typeAPI";
import { fetchBrands } from "../../http/brandAPI";
import { createDevice } from "../../http/deviceAPI";

const CreateDevice: FC<IModal> = observer(({ show, onHide }) => {

    const { types, brands } = useContext(Context)

    const [info, setInfo] = useState<IDeviceInfo[]>([])

    const [name, setName] = useState('')
    const [price, setPrice] = useState('0')
    const [file, setFile] = useState<any>()

    const changeInfo = (key: string, value: string, id: number) => {
        setInfo(info.map(i => i.id === id ? { ...i, [key]: value } : i))
    }
    console.log(file)
    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', `${brands.selectedBrand.id}`)
        formData.append('typeId', `${types.selectedType.id}`)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }

    useEffect(() => {
        fetchTypes().then(data => types.setTypes(data))
        fetchBrands().then(data => brands.setBrands(data))
    }, [])

    const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            setFile(e.target.files[0])
        }
    }

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', id: Number(Date.now()) }])
    }

    const removeInfo = (id: number) => {
        setInfo(info.filter(i => i.id !== id))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новое устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{types.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {types.types.map(type =>
                                <Dropdown.Item onClick={() => types.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{brands.selectedBrand.name || 'Выберите бренд'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {brands.brands.map(brand =>
                                <Dropdown.Item onClick={() => brands.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название устройства"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        className="mt-3"
                        placeholder="Введите стоимость устройства"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <br />
                    <Button onClick={addInfo} variant={'outline-dark'}>Добавить новое свойство</Button>
                    {info.map(i =>
                        <Row className="mt-3" key={i.id}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.id)}
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.id)}
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button onClick={() => removeInfo(i.id)} variant="outline-danger">
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateDevice