<template>
  <div class="PeggyParker">
    <img src="../../../public/images/PJPK1.png"
         alt="PJPK1" />
    <img src="../../../public/images/PJPK2.png"
         alt="PJPK2" />
    <img src="../../../public/images/PJPK3.png"
         alt="PJPK2" />
    <img src="../../../public/images/PJPKSP1.png"
         @click="Rogers()"
         alt="PJPKSP1" />
    <img src="../../../public/images/PJPKSP2.png"
         @click="NFTs()"
         alt="PJPKSP2" />
    <img src="../../../public/images/PJPKSP3.png"
         @click="Appetite()"
         alt="PJPKSP3" />
    <img src="../../../public/images/PJPKSP4.png"
         @click="Seismic()"
         alt="PJPKSP4" />
    <img src="../../../public/images/PJPKSP5.png"
         @click="ownanNFT()"
         alt="PJPKSP5" />
    <img src="../../../public/images/PJPKSP6.png"
         @click="Merging()"
         alt="PJPKSP6" />
  </div>
</template>
<script>
import './index.scss'

export default {
  mounted () {
    if (this.$route.query.index != -1)
      setTimeout(() => {
        document.documentElement.scrollTo({ top: document.querySelectorAll('.PeggyParker img')[this.$route.query.index].offsetTop, behavior: 'smooth' })
      }, 1000)
  },
  methods: {
    Rogers () {
      window.open('https://www.bilibili.com/video/BV1714y1V7aH/', '_blank')
    },
    NFTs () {
      window.open('https://www.bilibili.com/video/BV1NP4y1U7EX/', '_blank')
    },
    Seismic () {
      window.open('https://www.bilibili.com/video/BV1b14y1V7LN/', '_blank')
    },
    ownanNFT () {
      window.open('https://www.bilibili.com/video/BV1ng41167jy/', '_blank')
    },
    Appetite () {
      window.open('https://www.bilibili.com/video/BV1hd4y1C75U/', '_blank')
    },
    Merging () {
      window.open('https://www.bilibili.com/video/BV1ZG411A7Rc/', '_blank')
    }
  }
}
</script>