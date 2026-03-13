import { graphql, useFragment, type FragmentType } from "~/gql"

export const LaunchCardFragment = graphql(`
    fragment LaunchCardFragment on Launch {
        id,
        mission_name,
        launch_date_local,
        launch_year,
        launch_site {
            site_name,
            site_name_long
        },
        rocket {
            rocket_name
        },
        details
    }
`)

export const useLaunchesStore = defineStore("launchesStore", {
    state: () => ({
        launches: [] as FragmentType<typeof LaunchCardFragment>[],
    }),
    getters: {
        launchYears: (state) => {
            const unmaskedLaunches = useFragment(LaunchCardFragment, state.launches)
            const years = unmaskedLaunches.map((launch) => launch.launch_year).sort()
            return [...new Set(years)]
        }
    },
    actions: {
        async fetchLaunches() {
            const LaunchesQuery = graphql(`
                query Launches {
                    launches {
                        ...LaunchCardFragment
                    }
                }
            `)

            const { data } = await useAsyncQuery(LaunchesQuery)
            const rawData = data.value?.launches ?? []

            this.launches = rawData.filter((launch): launch is NonNullable<typeof launch> => launch !== null)
        },
    }
})