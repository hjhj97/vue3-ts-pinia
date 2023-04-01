<template>
	<div v-if="isSuccess">
		<p>title : {{ todoDetail?.title ?? 'title' }}</p>
	</div>
	<p v-else>Error</p>
</template>

<script lang="ts">
	import { fetchTodoDetail } from '@/api/todo';
	import { Todo } from '@/types/Todo';
	import { defineComponent, onMounted, ref } from 'vue';
	import { useRoute } from 'vue-router';

	export default defineComponent({
		setup() {
			const route = useRoute();
			const todoDetail = ref<Todo>();
			let isSuccess = ref<boolean>(false);

			onMounted(async () => {
				const res = await fetchTodoDetail(route.params.todoId as string).catch((fail) =>
					alert(fail),
				);
				if (res) {
					isSuccess.value = true;
					todoDetail.value = res;
				}
			});

			return {
				isSuccess,
				todoDetail,
			};
		},
	});
</script>

<style></style>
