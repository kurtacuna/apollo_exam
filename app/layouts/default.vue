<script setup lang='ts'>

</script>

<template>
	<v-app>
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
