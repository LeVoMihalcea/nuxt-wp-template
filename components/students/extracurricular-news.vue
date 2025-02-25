<script setup lang="ts">

import PreparedCard from "~/components/index/prepared-card.vue";
</script>

<template>
  <h1>{{ $t('extracurricular-news.title') }}</h1>
  <prepared-card
      :date="$t('extracurricular-news.date')"
      :title="$t('extracurricular-news.title')"
      :description="$t('extracurricular-news.text')"
      :button="$t('extracurricular-news.button')"
      background-image="/hero/hero-about.png"
      />
</template>

<style scoped>

</style>
