<template>
    <div class="_layout">
        <section class="layout_header">
            <common-header></common-header>
        </section>
        <section class="layout_view">
            <router-view />
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, inject, onBeforeUnmount } from 'vue'
import CommonHeader from '@/components/common/Header.vue'
</script>