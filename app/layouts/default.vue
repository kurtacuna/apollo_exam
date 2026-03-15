<script setup lang='ts'>
	const showNavDrawer = ref(false)
	provide('showNavDrawer', showNavDrawer)
</script>

<template>
	<v-app>
		<v-navigation-drawer temporary v-model="showNavDrawer">
			<v-list-item>
				<h4>Navigation Links</h4>
			</v-list-item>
			<v-divider></v-divider>
			<v-list-item
				link
				title="Launches"
				to="/"
				class="py-4"
				color="green"
			></v-list-item>
			<v-list-item
				link
				title="Favorite Rockets"
				to="/rockets/favorites"
				class="py-4"
				color="green"
			></v-list-item>
		</v-navigation-drawer>
		<AppHeader></AppHeader>
		<v-main>
			<v-container>
				<slot />
			</v-container>
		</v-main>
		<AppFooter></AppFooter>
	</v-app>
</template>

<style scoped>

</style>
