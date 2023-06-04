import { AllRoutes } from "./consts/consts"
import { Admin, Auth, Basket, DevicePage, Shop } from "./pages/index"
import { IRoutes } from "./types/routes"

export const authRoutes: IRoutes[] = [
    {
        path: AllRoutes.ADMIN_ROUTE,
        element: Admin
    },
    {
        path: AllRoutes.BASKET_ROUTE,
        element: Basket
    }
]

export const publicRoutes: IRoutes[] = [
    {
        path: AllRoutes.LOGIN_ROUTE,
        element: Auth
    },
    {
        path: AllRoutes.SHOP_ROUTE,
        element: Shop
    },
    {
        path: AllRoutes.DEVICE_ROUTE + '/:id',
        element: DevicePage
    },
    {
        path: AllRoutes.REGISTRATION_ROUTE,
        element: Auth
    }
]