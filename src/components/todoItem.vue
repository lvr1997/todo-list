<template>
	<li class="list-todo">
		<a :class="{finished:todo.finished}">{{ todo.name }}</a>
		<!-- 已完成的显示删除图标，未完成的显示对号 -->
		<i class="iconfont icon-duihao" v-if="todo.finished==false" @click="finish"></i>
		<i class="iconfont icon-shanchu" v-else @click="finish"></i>
	</li>
</template>

<script>
	import '../assets/iconfont/iconfont.css'
	export default {
		props: ['todo'],
		data() {
			return {
				
			}
		},
		methods: {
			finish() {
				this.$emit('finish-todo', this.$props['todo'])
			}
		}
	}
</script>

<style scoped>
	.list-todo {
		height: 35px;
		line-height: 35px;
		padding: 0 10px;
		text-align: left;
		position: relative;
	}
	.list-todo i {
		position: absolute;
		top: 0px;
		right: 12px;
		/* margin-left: -24px;
		margin-right: 10px; */
	}
	.list-todo:hover {
		background-color: #e2f0ff;
	}
	.finished {
		text-decoration: line-through;
		color: #888888;
	}
</style>
