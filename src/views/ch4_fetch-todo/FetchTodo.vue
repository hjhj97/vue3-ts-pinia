<template>
	<h1>Fetch CRUD</h1>

	<div class="todo-list">
		<TodoList v-bind="{ todos }" />
	</div>
</template>
<script lang="ts">
	import { fetchTodos } from '@/api/todo';
	import TodoList from '@/components/TodoList.vue';
	import { Todo } from '@/types/Todo';
	import { defineComponent, onMounted, ref } from 'vue';

	export default defineComponent({
		components: { TodoList },
		setup() {
			const todos = ref<Todo[]>([]);

			onMounted(async () => {
				const res = await fetchTodos().catch((fail) => alert(fail));
				if (res) {
					todos.value = res;
				}
			});

			return { todos };
		},
	});
</script>
<style scoped>
	.todo-list {
		display: flex;
		gap: 1rem;
		flex-direction: column;
		padding: 1rem;
	}
</style>
