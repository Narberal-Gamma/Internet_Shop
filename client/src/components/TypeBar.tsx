import { FC, useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "../main";
import { observer } from "mobx-react-lite";

const TypeBar: FC = observer(() => {

    const { types } = useContext(Context)

    return (
        <ListGroup>
            {types.types.map(type =>
                <ListGroup.Item
                    style={{ cursor: 'pointer' }}
                    active={type.id === types.selectedType.id}
                    onClick={() => types.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    )
})

export default TypeBar