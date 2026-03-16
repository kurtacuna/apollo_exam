<script setup lang='ts'>
    const {
        label = "Search",
    } = defineProps<{
        label?: string,
    }>()

    const modelValue = defineModel<string | undefined>()
    const internalQuery = ref(modelValue.value)

    const emits = defineEmits(['submit'])
    
    const debouncedSearch = debounce((query: string) => {
        modelValue.value = query
        emits('submit', query)
    }, 300)

    watch(internalQuery, (newVal) => {
        if (!newVal) {
            debouncedSearch.cancel()
            modelValue.value = newVal
        } else {
            debouncedSearch(newVal)
        }
    })
</script>

<template>
    <v-form @submit.prevent>
        <v-text-field v-model="internalQuery" variant="outlined" :label="label" clearable>
            <template #append-inner>
                <v-btn icon="mdi-magnify" flat></v-btn>
            </template>
        </v-text-field>
    </v-form>
</template>

<style scoped>

</style>