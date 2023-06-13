import { FC, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { IModal } from "../../types/modal";
import { createType } from "../../http/typeAPI";

const CreateType: FC<IModal> = ({ show, onHide }) => {

    const [value, setValue] = useState('')

    const addType = () => {
        createType({ name: value }).then(data => setValue(''))
        onHide()
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
                    Добавить новый тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Введите название типа"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateType