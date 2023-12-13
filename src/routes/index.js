import Home from '@p/Home';
import Introduce from '@p/Introduce';

const publicRoutes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/introduce',
        component: Introduce
    }
]
const privateRoutes = [
  
]
export {publicRoutes, privateRoutes}