<template>
	<div>
		<p>{{ todo.title }}</p>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from 'vue';
	import { Todo } from '@/types/Todo';

	export default defineComponent({
		props: {
			todo: Object as PropType<Todo>,
		},
		setup() {
			return {};
		},
	});
</script>

<style></style>
