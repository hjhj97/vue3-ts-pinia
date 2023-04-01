<template>
	<nav>
		<router-link :to="{ name: 'SimpleCounter' }">1.SimpleCounter</router-link>
	</nav>
</template>

<script>
	export default {};
</script>

<style scoped>
	nav {
		display: flex;
		gap: 1rem;
	}
</style>
