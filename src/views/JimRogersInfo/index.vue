<template>
    <div class="JimRogersInfoNav">
        <img src="../../../public/images/吉姆·罗杰斯-1把握大势.png" alt="吉姆·罗杰斯-1把握大势" />
        <img src="../../../public/images/吉姆·罗杰斯-2耐心等待.png" alt="吉姆·罗杰斯-2耐心等待" />
        <img src="../../../public/images/吉姆·罗杰斯-3经典语录.png" alt="吉姆·罗杰斯-3经典语录" />
        <img src="../../../public/images/吉姆·罗杰斯-4环球旅新.png" alt="吉姆·罗杰斯-4环球旅新" />
        <img src="../../../public/images/吉姆·罗杰斯-5给女儿16条建议.png" alt="吉姆·罗杰斯-5给女儿16条建议" />
        <!-- <span>首页 / 吉姆·罗杰斯</span>
        <div class="navNFT">NFT</div> -->
    </div>
</template>
<script >
import './index.scss'

export default {
    mounted() {
        if (this.$route.query.index != -1)
            setTimeout(() => {
                document.documentElement.scrollTo({ top: document.querySelectorAll('.JimRogersInfoNav img')[this.$route.query.index].offsetTop, behavior: 'smooth' })
            }, 1000)
    }
}
</script>