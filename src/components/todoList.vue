<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
		<input type="text" class="text" v-model="newTodoText" placeholder="新任务" @keydown.enter="addTodo"/>
		<button @click="addTodo">添加</button>
		
		<ul v-if="todos.length">
			任务列表：
			<todoListItem v-for="todo in todos"
										:key="todo.id"
										:todo="todo"
										@remove="removeTodo"/>
		</ul>
		<p v-else>还没有添加任务哦...</p>
  </div>
</template>

<script>
	import todoListItem from './todoListItem.vue'
	
	let nextTodoId = 1
	
	export default {
		props: ['msg'], //由子组件向父组件传参
		components: {
			todoListItem
		},
		data() {
			return {
				newTodoText: '',
				todos: []
			}
		},
		methods: {
			addTodo(){
				const trimmedText = this.newTodoText.trim()
				if(trimmedText) {
					this.todos.push({
						id: nextTodoId++,
						text: trimmedText
					})
					this.newTodoText = ''
				}
			},
			removeTodo(idToRemove){
				this.todos = this.todos.filter(todo => {
					return todo.id !== idToRemove
				})
				
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
