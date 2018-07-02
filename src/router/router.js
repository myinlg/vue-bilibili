import Index from '@/views/Home'
const routers = [{
    path: '/',
    name: 'Home',
    component: Index,
    redirect: 'Content',
    children: [{
        path: '/content',
        name: 'Content',
        component: () =>
            import ('@/views/content/Content')
    }]
}]
export default routers