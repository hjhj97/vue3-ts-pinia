<template>
	<nav>
		<router-link :to="{ name: 'Home' }">Home</router-link>
		<router-link :to="{ name: 'SimpleCounter' }">1.SimpleCounter</router-link>
		<router-link :to="{ name: 'PiniaCounter' }">2.piniaCounter</router-link>
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
