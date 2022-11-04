<template>
    <div class="Foundation">
        <img src="../../../public/images/罗杰斯基金会-章程.png" alt="罗杰斯基金会-章程" />
        <img src="../../../public/images/罗杰斯基金会-介绍.png" alt="罗杰斯基金会-介绍" />
        <img src="../../../public/images/罗杰斯基金会-年度盛典.png" alt="罗杰斯基金会-年度盛典" />
        <img src="../../../public/images/罗杰斯基金会-研究中心.png" alt="罗杰斯基金会 -研究中心" />
        <img src="../../../public/images/罗杰斯基金会-合作伙伴.png" alt="罗杰斯基金会-合作伙伴" />
        <img src="../../../public/images/公益与投资-数字博物馆.png" alt="公益与投资-数字博物馆" />
    </div>
</template>
<script >
import './index.scss'
export default {
    mounted() {
        if (this.$route.query.index != -1)
            setTimeout(() => {
                document.documentElement.scrollTo({ top: document.querySelectorAll('.Foundation img')[this.$route.query.index].offsetTop, behavior: 'smooth' })
            }, 1000)
    }
}
</script>