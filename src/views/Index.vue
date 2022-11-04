<template>
    <div class="page_index">
        <div class="nft_button">
            <div class="button">罗杰斯基金会年度盛典即将启幕 …… 欢迎详询</div>
        </div>
        <div class="footer_items">
            <div class="lists">
                <template v-for="(item, index) in listNFTData" :key="index">
                    <div class="items" @click="detailInfo(index)">
                        <div class="items_content">
                            <div class="top">
                                <div class="empty"></div>
                                <div class="name">{{ item.name }}</div>
                            </div>
                            <div class="list">
                                <label v-for="(desc, descIndex) in item.desc" @click.stop="detailInfo(index, descIndex)" :key="descIndex">
                                    {{ desc }}
                                </label>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <img class="WTBG" src="../../public/images/WTBG.png" />
        <img class="human" src="../../public/images/human.png" />
    </div>
</template>

<script setup>
import { ref, onMounted, inject, onBeforeUnmount } from 'vue'
import router from '../router'

const setHtmlFS = () => {
    const isTool = true
    const win_w = window.innerWidth
    let font_size_value = win_w / 19.2
    let min_value = 60
    if (isTool) {
        min_value = 50
        // console.log('win_w', win_w)
        if (win_w < 768) {
            font_size_value = win_w / 7.5
        } else {
            min_value = 68
        }
    }
    font_size_value = font_size_value < min_value ? min_value : font_size_value
    font_size_value = 100
    document.documentElement.style.fontSize = font_size_value + 'px'
}
function detailInfo(index, descIndex) {
    let posIndex = -1
    console.log('index === 0)', index === 0)
    if (index === 0) {
        if (descIndex) posIndex = [0, 2, 4, 3, 1][descIndex]
        router.push('/JimRogersInfo?index=' + posIndex)
    } else if (index === 1) {
        if (descIndex) posIndex = [2, 3, 4, 5, 7][descIndex]
        router.push('/PeggyParker?index=' + posIndex)
    } else if (index === 2) {
        if (descIndex) posIndex = [3, 2, 6, 4, 7][descIndex] - 1
        router.push('/HappyAndBee?index=' + posIndex)
    } else if (index === 3) {
        if (descIndex) posIndex = [1, 0, 3, 2, 4][descIndex]
        router.push('/Foundation?index=' + posIndex)
    } else {
        if (descIndex) posIndex = [0, 1, 2, 3, 4][descIndex]
        router.push('/PhilanthropyandInvestment?index=' + posIndex)
    }
}
// window.addEventListener(
//   "resize",
//   () => {
//     setHtmlFS()
//   },
//   false
// );
// setHtmlFS()

const listNFTData = ref([
    {
        name: '吉姆·罗杰斯',
        desc: ['把握大势无人能及的罗杰斯', '经典语录“21世纪是属于中国的”', '罗杰斯写给女儿的16条建议', '环球旅行打破吉尼斯世界纪录', '成功的投资家往往懂得耐心等待']
    },
    {
        name: '佩吉·帕克',
        desc: ['特立独行的佩吉著作《别叫我罗杰斯夫人》', '佩吉与罗杰斯史诗般的环球旅行', '不同类型的爱与旅行婚礼', '与NFTs一起改变艺术世界', '虚拟影响者Rae会谈NFTs']
    },
    {
        name: '快乐与小蜜蜂',
        desc: ['央视经典咏流传《声律启蒙》', '央视经典咏流传《西游记》', '罗杰斯家族的新春祝福', '快乐•罗杰斯给同学们教中文', '小蜜蜂•罗杰斯的银幕首秀《天火》']
    },
    {
        name: '罗杰斯基金会',
        desc: ['罗杰斯基金会介绍', '罗杰斯基金会章程', '罗杰斯思想研究中心', '罗杰斯基金会年度盛典', '罗杰斯基金会合作伙伴']
    },
    {
        name: '公益与投资',
        desc: ['吉姆•罗杰斯留守儿童之家', '全球孩子命运共同体', '全球科技成果产业转化中心', '环球旅行•多国家组合式移居', '罗杰斯云上书院 & 罗杰斯数字博物馆']
    }
])
</script>
