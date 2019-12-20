import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/', //访问路径
            name: 'Layout', //路径名
            component: Layout //访问的组件，即访问'/' 就会加载Layout组件中的所有内容
        }
    ]
})