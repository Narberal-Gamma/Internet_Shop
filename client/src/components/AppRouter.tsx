import { FC, useContext, } from "react";
import { authRoutes, publicRoutes } from "../routes";
import { Route, Routes, Navigate } from "react-router-dom";
import { AllRoutes } from "../consts/consts";
import { Context } from "../main";

const AppRouter: FC = () => {

    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(route =>
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