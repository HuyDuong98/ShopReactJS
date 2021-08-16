import MainLayout from "./layout/MainLayout";
import About from "./pages/about";
import Error from "./pages/error";
import Home from "./pages/home";
import Login from "./pages/login";
import Shop from "./containers/Shop";

const routers = [
    
    {
        component: MainLayout,
        routers: [
            {
                path: '/',
                component: Home,
                auth: true,
                exact: true
            },
            {
                path: '/shop',
                auth: true,
                component: Shop
            },
            {
                path: '/about',
                auth: true,
                component: About
            },
            {
                path: '/login',
                component: Login
            },
        ]
    },
    {
        component: Error
    }
]

export default routers