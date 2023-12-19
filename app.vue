<template>
  <div :dir="direction">
    <NuxtLayout>
      <NuxtPage />

    </NuxtLayout>

  </div>
</template>

<script setup>
const { locale, locales } = useI18n()
// const direction = ()=>  {
// return $i18n.locale === 'en' ? 'ltr' : 'rtl';
// }

// onMounted(()=>{
//   console.log("local");
//   console.log($i18n);
// })



</script>
