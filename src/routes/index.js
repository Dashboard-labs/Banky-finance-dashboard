import home from '../pages/Home';

export const route = [
    {
        path: '/',
        name: 'home',
        component: home,
        icon: 'home',
        exact: true,
        requiresAuth: false,
        meta: {
            title: 'Home',
            description: 'Home page',
            keywords: 'Home, Home page',
        },
    }
]