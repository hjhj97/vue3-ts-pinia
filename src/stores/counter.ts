import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
	state: () => {
		return {
			count: 0 as number,
			step: 1 as number,
		};
	},
	actions: {
		increment() {
			this.count += this.step;
		},
	},
});
