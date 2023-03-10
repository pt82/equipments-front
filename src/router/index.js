import Vue from 'vue'
import Router from 'vue-router'
import Auth from '../page/Auth'
import Equipments from '../page/Equipments'
import Equipment from '../page/Equipment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Auth
    },
    {
      path: '/equipments',
      name: 'Equipments',
      component: Equipments
    },
    {
      path: '/equipment/:id',
      name: 'Equipment',
      component: Equipment,
      props: {
        edit: true
      }
    },
    {
      path: '/equipment-new',
      name: 'Equipment',
      component: Equipment,
      props: {
        edit: false
      }
    }
  ]
})
