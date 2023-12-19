<template>
  <header>
    <span>{{ $t('home') }}</span>
    <NuxtLink :to="localePath({ name: 'products' })">{{ $t('products') }}</NuxtLink>
    <NuxtLink :to="localePath({ name: 'aboutus' })"> {{ $t('aboutus') }}</NuxtLink>
    <span>{{ $t('contactus') }}</span>


    <NuxtLink v-for="locale in availableLocales" @click="getDirection(locale.code)" :key="locale.code"
      :to="switchLocalePath(locale.code)">{{
        locale.name
      }}</NuxtLink>

  </header>
</template>

<script  setup>
const switchLocalePath = useSwitchLocalePath()
const { locale, locales } = useI18n()
const direction = ref('rtl')
const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})



const getDirection = (id) => {
  console.log(id);
  if (id == 'en') {
    alert("ys")

    useHead({
      bodyAttrs: { dir: 'ltr' }
    })
  } else {
    useHead({
      bodyAttrs: { dir: 'rtl' }
    })
  }
}


</script>


<style scoped>
span,
select,
a {
  padding: 30px;
  background-color: #fff;
  border: 0;
}
</style>