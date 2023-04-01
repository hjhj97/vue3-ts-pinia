<template>
	<input type="text" placeholder="hello" ref="inputRef" />
	<div>
		<span ref="spanRef">Span</span>
	</div>
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
			return {
				inputRef,
				spanRef,
			};
		},
	});
</script>
