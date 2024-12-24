import { createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import MealsByName from '../views/MealsByName.vue';
import MealsByLetter from '../views/MealsByLetter.vue';
import MealsByIngredients from '../views/MealsByIngredients.vue';
import DefaultLayout from '../components/DefaultLayout.vue';


const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home,
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsByName,
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter,
            },
            {
                path: '/by-ingredients/:ingredient?',
                name: 'byIngredients',
                component: MealsByIngredients,
            },
        ],

    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
