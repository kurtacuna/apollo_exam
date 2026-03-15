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
			<v-select
				v-model="selectedYear"
				label="Filter by year"
				:items="launchYears"
				density="comfortable"
				:hint="selectedYear && `Showing results for ${selectedYear}`"
				persistent-hint
				clearable
				class="mb-1 me-2"
				width="200"
				:menu-props="{ scrim: true, scrollStrategy: 'close' }"
			></v-select>
			<v-select
				v-model="selectedSort"
				label="Sort launch date"
				density="comfortable"
				clearable
				width="200"
				class="mb-1"
				:menu-props="{ scrim: true, scrollStrategy: 'close' }"
				:items="sortOptions"
			></v-select>
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