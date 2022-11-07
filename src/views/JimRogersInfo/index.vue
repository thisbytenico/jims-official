<template>
  <div class="JimRogersInfoNav">
    <img src="../../../public/images/JLSBH.png"
         alt="吉姆·罗杰斯-1把握大势" />
    <img src="../../../public/images/LJS2.png"
         alt="吉姆·罗杰斯-2耐心等待" />
    <img src="../../../public/images/LJS3.png"
         alt="吉姆·罗杰斯-3经典语录" />
    <img src="../../../public/images/LJS4.png"
         alt="吉姆·罗杰斯-4环球旅新" />
    <img src="../../../public/images/LJS5.png"
         alt="吉姆·罗杰斯-5给女儿16条建议" />
    <!-- <span>首页 / 吉姆·罗杰斯</span>
        <div class="navNFT">NFT</div> -->
  </div>
</template>
<script >
import './index.scss'

export default {
  mounted () {
    if (this.$route.query.index != -1)
      setTimeout(() => {
        document.documentElement.scrollTo({ top: document.querySelectorAll('.JimRogersInfoNav img')[this.$route.query.index].offsetTop, behavior: 'smooth' })
      }, 1000)
  }
}
</script>