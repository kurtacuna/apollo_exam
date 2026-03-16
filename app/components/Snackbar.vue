<script setup lang='ts'>
    const snackbarStore = useSnackbarStore()
</script>

<template>
    <v-snackbar
        timer="top"
        timer-color="green"
        timeout="2000"
    >
        <template #actions>
            <v-btn
                variant="text"
                @click="snackbarStore.clear()"
                size="small"
                class="text-label-medium"
            >
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<style scoped>

</style>