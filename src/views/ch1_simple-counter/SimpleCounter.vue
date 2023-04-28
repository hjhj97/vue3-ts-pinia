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
	import { computed, defineComponent, onMounted, ref } from 'vue';
	import { createHead } from '@vueuse/head';

	export default defineComponent({
		setup() {
			const count = ref<number>(0);

			onMounted(() => {
				createHead({ title: 'Simple Counter' });
			});

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
