import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import TeaView from '../views/TeaView.vue';
import CoffeeView from '../views/CoffeeView.vue';
import BooksView from '../views/BooksView.vue';
import ProductsView from '../views/ProductsView.vue'
import StoreBookView from '../views/StoreBookView.vue'
import DetailProductView from '../views/DetailProductView.vue'
// import DetailBookView from '../views/DetailBookView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },

        {
            path: '/beverage/tea',
            name: 'tea',
            component: TeaView
        },

        {
            path: '/beverage/coffee',
            name: 'coffee',
            component: CoffeeView
        },

        {
            path: '/book',
            name: 'book',
            component: BooksView
        },
        {
            path: '/beverage/create',
            name: 'product',
            component: ProductsView
        },
        {
            path: '/book/create',
            name: 'storebook',
            component: StoreBookView
        },
        {
            path: '/beverage/:id',                
            name: 'detailBeverage',
            component: DetailProductView
        },

        // {
        //     path: '/book/:id',
        //     name: 'detailBeverage',
        //     component: DetailBookView
        // },
    ]
})

export default router
