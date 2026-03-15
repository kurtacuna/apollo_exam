<script setup lang='ts'>
import { useFragment, type FragmentType } from '~/gql';
import LaunchCardFragment from '~/fragments/LaunchCardFragment';

    const props = defineProps<{
        launch: FragmentType<typeof LaunchCardFragment>
    }>()

    const launch = computed(() => useFragment(LaunchCardFragment, props.launch))
</script>

<template>
    <v-card class="d-flex flex-column" height="100%">
        <v-card-title class="text-wrap">
            <h5 class="ma-0">{{ launch.mission_name }}</h5>
        </v-card-title>
        <v-card-subtitle class="text-wrap">
            <p class="my-0">
                {{ launch.launch_site?.site_name }} ({{ launch.launch_site?.site_name_long }})
            </p>
            <sub>
                {{ new Date(launch.launch_date_local).toDateString() }}
            </sub>
        </v-card-subtitle>
        <v-card-text>
            <h4 class="ma-0"> Rocket: {{ launch.rocket?.rocket_name }}</h4>
            <h5 class="mb-2">Details:</h5>
            <p class="mt-0">{{ launch.details }}</p>
            <p v-if="!launch.details" class="mt-0 text-medium-emphasis">No Details</p>
            <h2>{{ launch.launch_year }}</h2>
        </v-card-text>
    </v-card>
</template>

<style scoped>

</style>