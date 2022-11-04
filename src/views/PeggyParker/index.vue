<template>
    <div class="PeggyParker">
        <img src="../../../public/images/佩吉·帕克-1.png" alt="佩吉·帕克-1" />
        <img src="../../../public/images/佩吉·帕克-2.png" alt="佩吉·帕克-2" />
        <img src="../../../public/images/佩吉·帕克-视频1.png" @click="Rogers()" alt="佩吉·帕克-视频1" />
        <img src="../../../public/images/佩吉·帕克-视频2.png" @click="NFTs()" alt="佩吉·帕克-视频2" />
        <img src="../../../public/images/佩吉·帕克-视频3.png" @click="Appetite()" alt="佩吉·帕克-视频3" />
        <img src="../../../public/images/佩吉·帕克-视频4.png" @click="Seismic()" alt="佩吉·帕克-视频4" />
        <img src="../../../public/images/佩吉·帕克-视频5.png" @click="ownanNFT()" alt="佩吉·帕克-视频5" />
        <img src="../../../public/images/佩吉·帕克-视频6.png" @click="Merging()" alt="佩吉·帕克-视频6" />
    </div>
</template>
<script>
import './index.scss'

export default {
    mounted() {
        if (this.$route.query.index != -1)
            setTimeout(() => {
                document.documentElement.scrollTo({ top: document.querySelectorAll('.PeggyParker img')[this.$route.query.index].offsetTop, behavior: 'smooth' })
            }, 1000)
    },
    methods: {
        Rogers() {
            window.open('https://www.bilibili.com/video/BV1714y1V7aH/', '_blank')
        },
        NFTs() {
            window.open('https://www.bilibili.com/video/BV1NP4y1U7EX/', '_blank')
        },
        Seismic() {
            window.open('https://www.bilibili.com/video/BV1b14y1V7LN/', '_blank')
        },
        ownanNFT() {
            window.open('https://www.bilibili.com/video/BV1ng41167jy/', '_blank')
        },
        Appetite() {
            window.open('https://www.bilibili.com/video/BV1hd4y1C75U/', '_blank')
        },
        Merging() {
            window.open('https://www.bilibili.com/video/BV1ZG411A7Rc/', '_blank')
        }
    }
}
</script>