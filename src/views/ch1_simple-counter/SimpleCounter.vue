<template>
	<h1>Simple Counter</h1>
	<h3>Not using state</h3>
	<div>{{ count }}</div>
	<div>square : {{ square }}</div>
	<div>
		<button @click="onClickAdd">+</button>
		<button @click="onClickSubtract">-</button>
	</div>
	<!--<div class="home">Home</div>-->
</template>

<script lang="ts">
	import { computed, defineComponent, ref } from 'vue';

	export default defineComponent({
		setup() {
			const count = ref<number>(0);
			const onClickAdd = () => {
				count.value++;
			};
			const onClickSubtract = () => {
				count.value--;
			};

			const square = computed<number>(() => {
				return count.value * count.value;
			});
			return {
				count,
				square,
				//
				onClickAdd,
				onClickSubtract,
			};
		},
	});
</script>
