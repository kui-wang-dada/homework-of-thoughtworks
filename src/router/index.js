import Vue from 'vue'
import Router from 'vue-router'
import agents from '@/components/agents'
import dashboard from '@/components/dashboard'
import myCruise from '@/components/myCruise'
import help from '@/components/help'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            redirect:"/agents"
        },
        {
            path: '/dashboard',
            component: dashboard
        },
        {
            path: '/myCruise',
            component: myCruise
        },
        {
            path: '/agents',
            component: agents
        },
        {
            path: '/help',
            component: help
        }

    ]
})
