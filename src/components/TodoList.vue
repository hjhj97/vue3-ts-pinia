<template>
	<div v-for="todo in todos" :key="todo.id">
		<TodoItem v-bind="{ todo }" @delete-todo="onDeleteTodo" />
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';
	import { Todo } from '@/types/Todo';
	import TodoItem from './TodoItem.vue';

	export default defineComponent({
		components: { TodoItem },
		props: {
			todos: Object as PropType<Todo[]>,
		},
		emits: ['delete-todo'],
		setup(_, { emit }) {
			const onDeleteTodo = (data: number) => {
				emit('delete-todo', data);
			};
			return { onDeleteTodo };
		},
	});
</script>

<style></style>
