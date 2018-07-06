import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'
import ForgotPassword from '../pages/forgotPassword'
import ResetPassword from '../pages/resetPassword'
import Dashboard from '../pages/dashboard'
import NoMatch from '../pages/noMatch'
import Message from '../pages/message'
import Profile from '../pages/profile'

const routes = [
    {
        path: '/',
        exact: true,
        auth: true,
        component: Home
    },
    {
        path: '/login/:social',
        exact: false,
        auth: false,
        component: Home
    },
    {
        path: '/login',
        exact: true,
        auth: false,
        component: Login
    },
    {
        path: '/register',
        exact: true,
        auth: false,
        component: Register
    },
    {
        path: '/forgot-password',
        exact: true,
        auth: false,
        component: ForgotPassword
    },
    {
        path: '/reset-password/:token/:email',
        exact: true,
        auth: false,
        component: ResetPassword
    },
    {
        path: '/dashboard',
        exact: true,
        auth: true,
        component: Dashboard
    },
    {
        path: '/message',
        exact: true,
        auth: true,
        component: Message
    },
    {
        path: '/profile',
        exact: true,
        auth: true,
        component: Profile
    },

    {
        path: '',
        exact: true,
        auth: false,
        component: NoMatch
    }
];

export default routes;