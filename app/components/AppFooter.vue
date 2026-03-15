<script setup lang='ts'>

</script>

<template>
    <v-footer color="black pb-0">
        <v-container class="pb-0 d-flex justify-space-between">
            <div class="mb-8">
                <v-divider vertical thickness="5" style="height: 200px"></v-divider>
            </div>
            <div class="d-flex flex-column align-center">
                <div class="mb-8 d-flex ga-16">
                    <NuxtLink href="https://www.spacex.com/careers" target="_blank">Careers</NuxtLink>
                    <NuxtLink href="https://www.spacex.com/updates" target="_blank">Updates</NuxtLink>
                    <NuxtLink href="https://www.spacex.com/supplier" target="_blank">Suppliers</NuxtLink>
                </div>
                <v-img src="/Earth.svg" width="400" color="black"></v-img>
            </div>
            <div class="mb-8">
                <v-divider vertical thickness="5" style="height: 200px"></v-divider>
            </div>
        </v-container>
    </v-footer>
</template>

<style scoped>
    a {
        text-decoration: none;
        color: white;
        font-size: 14px;
    }
</style>