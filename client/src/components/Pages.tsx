import { observer } from "mobx-react-lite";
import { FC, useContext } from "react";
import { Pagination } from "react-bootstrap";
import { Context } from "../main";

const Pages: FC = observer(() => {

    const { devices } = useContext(Context)
    const pageCount = Math.ceil(devices.totalCount / devices.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-5">
            {pages.map(page =>
                <Pagination.Item
                    active={devices.page === page}
                    onClick={() => devices.setPage(page)}
                    key={page}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    )
})

export default Pages