<template>
	<NavBar />
	<router-view />
</template>
<script lang="ts">
	import { defineComponent } from 'vue';
	import NavBar from './components/common/NavBar.vue';

	export default defineComponent({
		components: { NavBar },
		setup() {
			return {};
		},
	});
</script>

<style></style>
