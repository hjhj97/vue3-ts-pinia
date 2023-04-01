<template>
	<input type="text" placeholder="hello" ref="inputRef" />
	<div>
		<span ref="spanRef">Span</span>
	</div>
	<button @click="onClickBtn($event)">Event</button>
</template>

<script lang="ts">
	import { defineComponent, onMounted, ref } from 'vue';

	export default defineComponent({
		setup() {
			const inputRef = ref<HTMLInputElement | null>();
			const spanRef = ref<HTMLSpanElement | null>();

			onMounted(() => {
				if (inputRef.value) {
					inputRef.value.focus();
				}
				if (spanRef.value) {
					spanRef.value.textContent = 'this is span';
				}
			});
			const onClickBtn = (e: Event) => {
				const target = e.target as HTMLElement;
				console.log(target);
			};
			return {
				inputRef,
				spanRef,
				onClickBtn,
			};
		},
	});
</script>
