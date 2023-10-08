// pages
import User from "./pages/User/User";
import Resource from "./pages/Resource/Resource";
import CreateUser from "./pages/CreateUser/CreateUser";

// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'user-route',
        title: 'User',
        path: '/',
        enabled: true,
        component: User
    },
    {
        key: 'resource-route',
        title: 'Resource',
        path: '/resource',
        enabled: true,
        component: Resource
    },
    {
        key: 'create-user-route',
        title: '',
        path: '/user/:id',
        enabled: false,
        component: CreateUser
    }
]