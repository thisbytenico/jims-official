<template>
    <div class="footer">
        <div class="social">
            <template v-for="(item, index) in socialListData" :key="index">
                <a href="" target="_blank">
                    <img :src="`/images/${item.images}`" alt="" srcset="" />
                </a>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const socialListData = ref([
    {
        link: '',
        text: 'facebook',
        images: 'facebook@2x.png',
        path: '/'
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