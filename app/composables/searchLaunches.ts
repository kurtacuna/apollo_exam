import LaunchCardFragment from "~/fragments/LaunchCardFragment";
import { useFragment, type FragmentType } from "~/gql";

export function useSearchLaunches(launches: Ref<FragmentType<typeof LaunchCardFragment>[]>) {
    const query = ref<string | undefined>(undefined)

    const searchedLaunches = computed(() => {
        const list = launches.value
        if (!query.value) return list

        const unmaskedLaunches = useFragment(LaunchCardFragment, list)
        return list.filter((launch, index) => {
            const unmaskedLaunch = unmaskedLaunches[index]
            return unmaskedLaunch?.mission_name?.toLowerCase().includes(query.value?.toLowerCase() ?? "")
        })
    })

    return { query, searchedLaunches }
}