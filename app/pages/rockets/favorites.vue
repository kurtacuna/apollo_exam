<script setup lang='ts'>
    const favoriteRocketsStore = useFavoriteRocketsStore()
    const snackbarStore = useSnackbarStore()

    function removeFromFavorite(rocketId: string) {
        favoriteRocketsStore.removeFromFavorite(rocketId)
        snackbarStore.setSnackbar({
            snackbar: Snackbars.removeFromFavorites,
            text: `Removed ${rocketId} from favorites`
        })
    }
</script>

<template>
    <h1>Favorite Rockets</h1>
    <p
        v-if="!favoriteRocketsStore.favoriteRockets.length"
        class="text-medium-emphasis"
    >
        No favorites added yet
    </p>
    <v-row size="2">
        <v-col v-for="rocketId in favoriteRocketsStore.favoriteRockets" :key="rocketId" cols="1">
            <v-card class="pa-8 text-center">
                <h3 class="mt-0">Rocket ID: {{ rocketId }}</h3>
                <v-btn
                    variant="tonal"
                    class="text-title-small w-auto me-4"
                    color="red"
                    @click="removeFromFavorite(rocketId)"
                >
                    Remove
                </v-btn>
                <v-btn
                    variant="outlined"
                    :to="`/rockets/${rocketId}`"
                >
                    View Details
                </v-btn>
            </v-card>
        </v-col>
    </v-row>
</template>

<style scoped>

</style>