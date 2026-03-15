<script setup lang='ts'>

</script>

<template>
    <div>
        <NuxtRouteAnnouncer></NuxtRouteAnnouncer>
        <NuxtLayout>
            <NuxtLoadingIndicator 
                :height="5" 
                :duration="3000" 
                :throttle="0" 
            />
            <NuxtPage></NuxtPage>
        </NuxtLayout>
    </div>
</template>

<style scoped>

</style>