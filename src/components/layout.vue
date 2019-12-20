<template>
        <!-- template的最外层只能有一个容器 -->
       <div class="container">
           <todos></todos>
           <div class="content"></div> 
       </div>
</template>
<script>
    import todos from './todos'
    export default {
        components: {
            todos  //组件的局部注册
        }
    }
</script>
<style scoped>

</style>