<template>
  <div class="HappyAndBee">
    <img src="../../../public/images/XMF1.png"
         alt="快乐与小蜜蜂1" />
    <img src="../../../public/images/XMFSP1.png"
         @click="vedioOne()"
         alt="XMFSP1" />
    <img src="../../../public/images/XMFSP2.png"
         @click="videotwo()"
         alt="XMFSP2" />
    <img src="../../../public/images/XMFSP3.png"
         @click="videothree()"
         alt="XMFSP3" />
    <img src="../../../public/images/XMFSP4.png"
         @click="videofour()"
         alt="XMFSP4" />
    <img src="../../../public/images/XMFSP5.png"
         @click="videofive()"
         alt="XMFSP5" />
    <img src="../../../public/images/XMFSP6.png"
         @click="videosix()"
         alt="XMFSP6" />
  </div>
</template>
<script>
import './index.scss'
export default {
  mounted () {
    if (this.$route.query.index != -1)
      setTimeout(() => {
        document.documentElement.scrollTo({ top: document.querySelectorAll('.HappyAndBee img')[this.$route.query.index].offsetTop, behavior: 'smooth' })
      }, 1000)
  },
  methods: {
    vedioOne () {
      window.open('http://tv.cctv.com/2020/01/27/VIDEcvPqv8Rn5BIR5VerQFr4200127.shtml', '_blank')
    },
    videotwo () {
      window.open('https://www.bilibili.com/video/BV1KK411L72m/', '_blank')
    },
    videothree () {
      window.open('https://3g.163.com/v/video/VHHODJE9V.html?referFrom= ', '_blank')
    },
    videofour () {
      window.open('https://www.bilibili.com/video/av625491203 ', '_blank')
    },
    videofive () {
      window.open('https://video.sina.cn/finance/2021-02-18/detail-ikftssap6290432.d.html?pid=4752&pid=4752  ', '_blank')
    },
    videosix () {
      window.open('https://v.qq.com/x/cover/uakmrwmx7c4ddei/i0033ml2d53.html', '_blank')
    }
  }
}
</script>