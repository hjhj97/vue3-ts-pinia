<template>
	<h1>Simple Counter</h1>
	<h3>Not using state</h3>
	<div>{{ count }}</div>
	<div>
		<button @click="onClickAdd">+</button>
		<button @click="onClickSubtract">-</button>
	</div>
	<!--<div class="home">Home</div>-->
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue';

	export default defineComponent({
		setup() {
			const count = ref<number>(0);
			const onClickAdd = (): void => {
				count.value++;
			};
			const onClickSubtract = (): void => {
				count.value--;
			};
			return {
				count,
				onClickAdd,
				onClickSubtract,
			};
		},
	});
</script>
