<template>
  <div class="_layout"
       :class="{'day_layout':isDay}"
       :style="{ height: $route.path == '/' ? 0 : 'auto' }">
    <section class="layout_header">
      <common-header></common-header>
    </section>
    <section class="layout_view">
      <router-view :isDay="isDay" />
    </section>
    <section class="layout_footer">
      <common-footer></common-footer>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, inject, onBeforeUnmount } from 'vue'
import CommonHeader from '@/components/common/Header.vue'
import CommonFooter from '@/components/common/Footer.vue'

const curHours = new Date().getHours();

const isDay = ref(curHours < 19 && curHours > 7) && true
</script>