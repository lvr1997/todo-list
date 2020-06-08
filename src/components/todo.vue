<template>
	<div class="container">
		<h2>每日计划</h2>
		<div class="todos">
			<div class="todos-header">
				<input type="text" placeholder="请输入内容" v-model="inputText" @keydown.enter="addTodo">
			</div>
			<!-- 待办事项列表 -->
			<div class="todos-body">
				<ul>
					<todoItem v-for="todo in todos"
							  :key="todo.id"
							  :todo="todo"
							  @finish-todo="updateTodo">
					</todoItem>
				</ul>
			</div>
			<div class="todos-footer" v-show="todos.length!=0">
				总：{{ todos.length }}条，已完成：{{ finishedTodos }}条
			</div>
		</div>
	</div>
</template>

<script>
	import todoItem from './todoItem'
	
	export default {
		components:{
			todoItem
		},
		data() {
			return {
				todos: [],
				showInput: false,
				inputText: '',
				maxTodoId: 1
			}
		},
		computed: {
			finishedTodos() {
				return this.todos.filter((item) => {
					return item.finished == true
				}).length
			}
		},
		methods: {
			addTodo() {
				var todo = {
					id: this.maxTodoId,
					name: this.inputText,
					finished: false
				}
				this.todos.push(todo)
				this.maxTodoId++
				this.inputText = ''
			},
			updateTodo(todo) {
				// console.log(todo)
				const todoId = todo.id
				if(todo.finished) {
					this.todos = this.todos.filter((item) => {
						return todoId != item.id
					})
				} else {
					todo.finished = true
				}
				// todo.finished = false
			}
		}
	}
</script>
<style scoped>
	.todos {
		width: 300px;
		margin: 0 auto;
		border: 1px solid #F2F2F2;
		border-radius: 5px;
		font-size: 14px;
		box-shadow: 1px 3px 6px 0px rgba(0, 0, 0, 0.15);
	}
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.todos-header {
		/* width: 100%; */
		height: 30px;
		line-height: 30px;
		border-bottom: 1px solid #F2F2F2;
		margin: 5px;
	}
	.todos-header input {
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		padding: 5px 5px;
		box-sizing: border-box;
	}
	.todos-footer {
		height: 25px;
		line-height: 26px;
		background-color: #F9F9F9;
		color: #a3a3a3;
		font-size: 10px;
		text-align: left;
		padding: 0 10px;
		margin-top: 5px;
	}
</style>