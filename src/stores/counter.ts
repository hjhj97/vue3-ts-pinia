import { defineStore } from 'pinia';
import { ref } from 'vue';

// option API
export const useCounterStore = defineStore('counter', {
	state: () => ({
		count: 0 as number,
	}),
	actions: {
		increment() {
			this.count++;
		},
		decrement() {
			this.count--;
		},
	},
});
// composition API
export const useCounterCompStore = defineStore('counter', () => {
	const count = ref<number>(0);

	const increment = () => {
		count.value++;
	};
	const decrement = () => {
		count.value++;
	};

	return {
		count,
		//
		increment,
		decrement,
	};
});
