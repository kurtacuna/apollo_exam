import LaunchCardFragment from "~/fragments/LaunchCardFragment";
import { useFragment, type FragmentType } from "~/gql";

export const sortOptions = [
    { title: "Ascending", value: "asc" },
    { title: "Descending", value: "desc" },
]

export function useSortLaunches(launches: Ref<FragmentType<typeof LaunchCardFragment>[]>) {
    const selectedSort = ref<string | undefined>(undefined)

    const sortedLaunches = computed(() => {
        const list = launches.value
        if (!selectedSort.value) return list

        const unmaskedLaunches = useFragment(LaunchCardFragment, list)
        const maskedToUnmasked = list.map((launch, index) => {
            return {
                masked: launch,
                unmasked: unmaskedLaunches[index]
            }
        })

        if (selectedSort.value == "asc") {
            return maskedToUnmasked
                .sort((a, b) => new Date(a.unmasked?.launch_date_local).getTime() - new Date(b.unmasked?.launch_date_local).getTime())
                .map((obj) => obj.masked)
        } else if (selectedSort.value == "desc") {
            return maskedToUnmasked
                .sort((a, b) => new Date(b.unmasked?.launch_date_local).getTime() - new Date(a.unmasked?.launch_date_local).getTime())
                .map((obj) => obj.masked)
        } else {
            return list
        }
    })

    return { selectedSort, sortedLaunches }
}