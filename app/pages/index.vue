<script setup lang='ts'>
import { graphql, useFragment, type FragmentType } from '~/gql'
import LaunchCardFragment from '~/fragments/LaunchCardFragment'

	const LaunchesQuery = graphql(`
		query Launches {
			launches {
				...LaunchCardFragment
			}
		}
	`)

	const { data } = await useAsyncQuery(LaunchesQuery)
	const launches = computed(() => data.value?.launches?.filter((launch): launch is NonNullable<typeof launch> => launch !== null) ?? [])

	const { selectedYear, filteredLaunches } = useFilterLaunches(launches)	
	const launchYears = computed(() => {
		const unmaskedLaunches = useFragment(LaunchCardFragment, launches.value)
		const years = unmaskedLaunches.map((launch) => launch.launch_year).sort()
		return [...new Set(years)]
	})

	const { selectedSort, sortedLaunches } = useSortLaunches(filteredLaunches)
</script>

<template>
	<div class="d-flex justify-space-between align-end">
		<h1>Launches</h1>
		<div class="d-flex">
			<Select
				v-model="selectedYear"
				:items="launchYears"
				label="Filter by year"
				:hint="selectedYear && `Showing results for ${selectedYear}`"
				class="me-2"
			></Select>
			<Select
				v-model="selectedSort"
				:items="sortOptions"
				label="Sort launch date"
			></Select>
		</div>
	</div>
	<v-row size="3">
		<v-col v-for="(launch, index) in sortedLaunches" :key="index" cols="1">
			<LaunchCard :launch="launch"></LaunchCard>
		</v-col>
	</v-row>
</template>

<style scoped>

</style>