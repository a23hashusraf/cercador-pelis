import { createRouter, createWebHistory } from 'vue-router'
import BuscadorPelis from '../components/BuscadorPelis.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: BuscadorPelis,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
