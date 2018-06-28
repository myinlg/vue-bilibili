import Index from '@/views/Index'
const routers = [{
    path: '/',
    name: 'Index',
    component: Index,
    children: [{
        path: '/content',
        name: 'Content',
        component: () =>
            import ('@/views/content/Content')
    }]
}]
export default routers