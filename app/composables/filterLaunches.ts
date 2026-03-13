import { useFragment } from "~/gql"

export function useFilterLaunches(year: Ref<string | undefined>) {
    return computed(() => {
        const launches = useLaunchesStore().launches
        if (!year.value) return launches

        const unmaskedLaunches = useFragment(LaunchCardFragment, launches)
        return launches.filter((launch, index) => {
            const unmaskedLaunch = unmaskedLaunches[index]
            return unmaskedLaunch?.launch_year === year.value
        })
    })
}