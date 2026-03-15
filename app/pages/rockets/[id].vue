<script setup lang='ts'>
import { RocketFragment } from '~/fragments/RocketFragment';
import { graphql, useFragment } from '~/gql';

    definePageMeta({
        layout: 'rocket'
    })

    const route = useRoute()

    const RocketQuery = graphql(`
        query Rocket($id: ID!) {
            rocket(id: $id) {
                ...RocketFragment
            }
        }
    `)

    const { data } = await useAsyncQuery(RocketQuery, { id: route.params.id })
    const rocket = useFragment(RocketFragment, data.value?.rocket ?? {})

    const overviewData = [
        { label: "First Flight", value: rocket.first_flight },
        { label: "Height", value: rocket.height },
        { label: "Diameter", value: rocket.diameter },
        { label: "Mass", value: rocket.mass },
        { label: "Stages", value: rocket.stages },
    ]
</script>

<template>
    <div class="d-flex justify-space-between align-center">
        <v-btn to="/" variant="outlined">
            <v-icon icon="mdi-arrow-left mr-2"></v-icon>
            Go back to Launches
        </v-btn>
        <h2>Rocket Details</h2>
    </div>
    <v-card class="px-16 py-4">
        <h1>{{ rocket.name }}</h1>
        <p>{{ rocket.description }}</p>
        <h4 class="mb-0">Overview</h4>
        <v-table>
            <tbody>
                <tr>
                    <td>First Flight</td>
                    <td>{{ new Date(rocket.first_flight).toDateString() }}</td>
                </tr>
                <tr>
                    <td>Height</td>
                    <td>{{ rocket.height?.feet }}ft / {{ rocket.height?.meters }} m</td>
                </tr>
                <tr>
                    <td>Diameter</td>
                    <td>{{ rocket.diameter?.feet }}ft / {{ rocket.diameter?.meters }} m</td>
                </tr>
                <tr>
                    <td>Mass</td>
                    <td>{{ rocket.mass?.kg }} kg / {{ rocket.mass?.lb }} lb</td>
                </tr>
                <tr>
                    <td>Stages</td>
                    <td>{{ rocket.stages }}</td>
                </tr>
            </tbody>
        </v-table>
    </v-card>
</template>

<style scoped>

</style>