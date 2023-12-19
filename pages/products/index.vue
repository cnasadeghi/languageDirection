<template>
    <h1>{{ $t('products') }}
        <br>
        <!-- <NuxtLink :to="localePath({ name: 'products', params:{id:50} })">....</NuxtLink> -->
        <br>
        <br>
        <NuxtLink :to="`products/${50}`">***</NuxtLink>
    </h1>
</template>
<script setup>

</script>