<script setup lang='ts'>
	const launchesStore = useLaunchesStore()
	await launchesStore.fetchLaunches()

	const year = ref<string | undefined>(undefined)
	const launches = useFilterLaunches(year)
</script>

<template>
	<div class="d-flex justify-space-between align-end">
		<h1>Launches</h1>
		<v-select
			v-model="year"
			label="Filter by year"
			:items="launchesStore.launchYears"
			density="comfortable"
			:hint="year && `Showing results for ${year}`"
			persistent-hint
			clearable
			class="mb-1"
			max-width="200"
		></v-select>
	</div>
	<v-row size="3">
		<v-col v-for="(launch, index) in launches" :key="index" cols="1">
			<LaunchCard :launch="launch"></LaunchCard>
		</v-col>
	</v-row>
</template>

<style scoped>

</style>