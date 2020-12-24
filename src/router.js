import vueRouter from 'vue-router';
import perfil from './components/perfil';
import registro from './components/register';
import ingreso from './components/ingreso';
import App from './App';

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },
        {
            path: '/registro',
            name: "registro",
            component: registro
        },
        {
            path: '/facturas',
            name: "facturas",
            component: perfil
        },
        {
            path: '/ingreso',
            name: "ingreso",
            component: ingreso
        },
    ]
});
export default router
