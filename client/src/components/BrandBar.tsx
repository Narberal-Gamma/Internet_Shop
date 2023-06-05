import { FC, useContext } from "react";
import { Context } from "../main";
import { observer } from "mobx-react-lite";
import { Card } from "react-bootstrap";

const BrandBar: FC = observer(() => {

    const { brands } = useContext(Context)

    return (
        <div className="d-flex flex-wrap">
            {brands.brands.map(brand =>
                <Card
                    border={brand.id === brands.selectedBrand.id ? 'danger' : '#dee2e6'}
                    onClick={() => brands.setSelectedBrand(brand)}
                    key={brand.id}
                    className="p-2"
                    style={{marginRight: 5, marginBottom: 5, cursor: 'pointer'}}
                >
                    {brand.name}
                </Card>
            )}
        </div>
    )
})

export default BrandBar