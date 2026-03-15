import LaunchCardFragment from "~/fragments/LaunchCardFragment"
import { useFragment, type FragmentType } from "~/gql"

export function useFilterLaunches(launches: Ref<FragmentType<typeof LaunchCardFragment>[]>) {
    const selectedYear = ref<string | undefined>(undefined)

    const filteredLaunches = computed(() => {
        const list = launches.value
        if (!selectedYear.value) return list

        const unmaskedLaunches = useFragment(LaunchCardFragment, list)
        return list.filter((launch, index) => {
            const unmaskedLaunch = unmaskedLaunches[index]
            return unmaskedLaunch?.launch_year === selectedYear.value
        })
    })

    return {selectedYear, filteredLaunches}
}