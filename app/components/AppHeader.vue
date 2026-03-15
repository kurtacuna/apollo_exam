<script setup lang='ts'>
    const showNavDrawer = inject<Ref<boolean>>('showNavDrawer')
</script>

<template>
    <v-app-bar elevation="0" class="border-b" height="80">
        <v-app-bar-nav-icon position="absolute" @click="showNavDrawer = !showNavDrawer"></v-app-bar-nav-icon>
        <v-container class="d-flex justify-space-between">
            <NuxtLink to="/" style="width: 300px;">
                <v-img src="/logo.png" max-width="300"></v-img>
            </NuxtLink>
            <v-btn class="ma-2" href="https://www.spacex.com/" target="_blank">
                <h4>Visit the official website</h4>
                <v-icon icon="mdi-arrow-right-box" end size="x-large"></v-icon>
            </v-btn>
        </v-container>
    </v-app-bar>
</template>

<style scoped>

</style>