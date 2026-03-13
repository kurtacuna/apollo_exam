<script setup lang='ts'>

</script>

<template>
	<v-app>
		<v-app-bar 
			elevation="0"
			class="border-b"
		>
			<v-container>
				<p>header</p>
			</v-container>
		</v-app-bar>
		<v-main>
			<v-container>
				<slot />
			</v-container>
		</v-main>
		<v-footer class="border-t">
			<v-container>
				<p>footer</p>
			</v-container>
		</v-footer>
	</v-app>
</template>

<style scoped>

</style>
