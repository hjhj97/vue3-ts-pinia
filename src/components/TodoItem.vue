<template>
	<div class="todo-item">
		<div>
			<p>title : {{ todo.title }}</p>
			<p>id : {{ todo.id }}</p>
			<p>userId : {{ todo.userId }}</p>
			<p>completed : {{ todo.completed }}</p>
		</div>
		<div>
			<button @click="$emit('delete-todo', todo.id)">Delete</button>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';
	import { Todo } from '@/types/Todo';

	export default defineComponent({
		props: {
			todo: { type: Object as PropType<Todo>, required: true },
		},
		emits: ['delete-todo'],
		setup() {
			return {};
		},
	});
</script>

<style scoped>
	.todo-item {
		border: 1px solid black;
	}
</style>
