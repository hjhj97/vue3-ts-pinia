<template>
	<div v-for="todo in todos" :key="todo.id">
		<TodoItem v-bind="{ todo }" />
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';
	import { Todo } from '@/types/Todo';
	import TodoItem from './TodoItem.vue';

	export default defineComponent({
		props: {
			todos: Object as PropType<Todo[]>,
		},
		setup() {
			return {};
		},
		components: { TodoItem },
	});
</script>

<style></style>
