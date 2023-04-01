<template>
	<div>
		<input type="text" placeholder="title" v-model="title" />
		<input type="text" placeholder="id" v-model="id" />
		<button @click="onClickSubmit">Submit</button>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	export default defineComponent({
		emits: ['submit-todo'],
		setup(props, { emit }) {
			let title = ref<string>('');
			let id = ref<number>(1);
			const onClickSubmit = () => {
				emit('submit-todo', { title: title.value, id: id.value, userId: 1, completed: true });
			};
			return {
				title,
				id,
				//
				onClickSubmit,
			};
		},
	});
</script>

<style></style>
