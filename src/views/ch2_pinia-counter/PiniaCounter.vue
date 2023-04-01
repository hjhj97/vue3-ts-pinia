<template>
	<h1>Pinia Counter</h1>
	<h2>{{ counterStore.count }}</h2>
	<h2>Larger Than 5 : {{ isLargerThan5 }}</h2>
	<div>
		<button @click="counterStore.increment">+</button>
		<button @click="counterStore.decrement">-</button>
		<button @click="onClickPatch">patch +</button>
	</div>
	<div><button @click="counterStore.$reset">Reset</button></div>
	<!--<div class="home">Home</div>-->
</template>

<script lang="ts">
	import { useCounterStore, useCounterCompStore } from '@/stores/counter';
	import { defineComponent, ref } from 'vue';

	export default defineComponent({
		setup() {
			const counterStore = useCounterStore();
			const isLargerThan5 = ref(false);
			//const counterStore = useCounterCompStore();

			const onClickPatch = () => {
				counterStore.$patch({
					count: counterStore.count + 1,
				});
			};

			counterStore.$subscribe((mutation, state) => {
				if (state.count > 5) {
					isLargerThan5.value = true;
				} else {
					isLargerThan5.value = false;
				}
			});

			return {
				counterStore,
				isLargerThan5,
				//
				onClickPatch,
			};
		},
	});
</script>
