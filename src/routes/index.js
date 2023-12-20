import Home from '@p/Home';
import Introduce from '@p/Introduce';
import Card from '@p/Card';
const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/introduce',
        component: Introduce
    },
    {
        path: '/card',
        component: Card
    }
]
const privateRoutes = [
  
]
export {publicRoutes, privateRoutes}