import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/todo'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/', //访问路径
            name: 'Todo', //路径名
            component: Todo //访问的组件，即访问'/' 就会加载Layout组件中的所有内容
        }
    ]
})