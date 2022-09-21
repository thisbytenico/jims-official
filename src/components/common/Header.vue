<template>
    <div class="header">
        <div class="header_container">
            <div class="logo">
                <img src="/images/logo@2x.png" alt="" srcset="" />
                <label>罗杰斯基金会</label>
            </div>
            <div class="widget">
                <div class="social">
                    <template v-for="(item, index) in socialListData" :key="index">
                        <a href="" target="_blank">
                            <img :src="`/images/${item.images}`" alt="" srcset="" />
                        </a>
                    </template>
                </div>
                <div class="menu">
                    <img src="/images/menu@2x.png" alt="" srcset="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, inject, onBeforeUnmount } from 'vue'

const socialListData = ref([
    {
        link: '',
        text: 'facebook',
        images: 'facebook@2x.png'
    },
    {
        link: '',
        text: 'twitter',
        images: 'twitter@2x.png'
    },
    {
        link: '',
        text: 'instagram',
        images: 'instagram@2x.png'
    },
    {
        link: '',
        text: 'whatsapp',
        images: 'whatsapp@2x.png'
    },
    {
        link: '',
        text: 'email',
        images: 'email@2x.png'
    }
])
</script>