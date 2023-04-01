<template>
	<h1>Todo CRUD</h1>

	<div>
		<todo-input @submit-todo="onSubmitTodo" />
		<TodoList v-bind="{ todos }" @delete-todo="onDeleteTodo" />
	</div>
</template>
<script lang="ts">
	import TodoInput from '@/components/TodoInput.vue';
	import TodoList from '@/components/TodoList.vue';
	import { Todo } from '@/types/Todo';
	import { defineComponent, ref } from 'vue';

	export default defineComponent({
		components: { TodoList, TodoInput },
		setup() {
			const todos = ref<Todo[]>([]);
			const onSubmitTodo = (todo: Todo) => {
				todos.value.push(todo);
			};
			const onDeleteTodo = (data: number) => {
				todos.value = todos.value.filter((item) => item.id !== data);
			};
			return { todos, onSubmitTodo, onDeleteTodo };
		},
	});
</script>
