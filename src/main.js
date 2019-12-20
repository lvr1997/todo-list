import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

//等价于
// new Vue({
//   el: '#app', //挂载id这个实例下的所有内容都会在index.html 中一个id为app的div下显示
//   router, 注入路由配置
//   template: '<App></App>', 配置根模板，即打开页面显示哪个组件
//   components: {  
//       App    注入组件
//   }
// })
