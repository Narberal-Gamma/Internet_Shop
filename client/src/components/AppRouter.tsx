import { FC, useState } from "react";
import { authRoutes, publicRoutes } from "../routes";
import { Route, Routes, Navigate } from "react-router-dom";
import { AllRoutes } from "../consts/consts";

const AppRouter: FC = () => {

    const [isAuth, setIsAuth] = useState<boolean>(true)

    return (
        <Routes>
            {isAuth && authRoutes.map(route =>
                <Route path={route.path} element={<route.element />} key={route.path} />
            )}
            {publicRoutes.map(route =>
                <Route path={route.path} element={<route.element />} key={route.path} />
            )}
            <Route path="*" element={<Navigate to={AllRoutes.SHOP_ROUTE} replace={true} />} />
        </Routes>
    )
}

export default AppRouter