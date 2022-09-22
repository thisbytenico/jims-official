<template>
    <div class="page_index">
        <div class="nft_button">
            <div class="button">NFT</div>
        </div>
        <div class="footer_items">
            <div class="lists">
                <template v-for="(item, index) in listNFTData" :key="index">
                    <div class="items">
                        <div class="items_content">
                            <div class="top">
                                <div class="empty"></div>
                                <div class="name">{{ item.name }}</div>
                            </div>
                            <div class="list">
                                <label v-for="(desc, descIndex) in item.desc" :key="descIndex">
                                    {{ desc }}
                                </label>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, inject, onBeforeUnmount } from 'vue'
const listNFTData = ref([
    {
        name: '吉姆·罗杰斯',
        desc: ['投资大师','环球旅行','亲子教育','传奇人生','罗杰斯看中国']
    },
    {
        name: '佩吉·帕克',
        desc: ['新书发布','环球旅行','NFT','我叫佩吉·帕克(I am Paige Parker)','佩吉·派克与吉姆·罗杰斯']
    },
    {
        name: '快乐与小蜜蜂',
        desc: ['经典咏流传《西游记》《声律启蒙》','快乐小蜜蜂教中文','罗杰斯一家','罗杰斯一家','春节贺年', '电影《天火》']
    },
    {
        name: '罗杰斯基金会',
        desc: ['罗杰斯基金会介绍','罗杰斯基金会章程','罗杰斯思想研究中心','罗杰斯基金会年度盛典','罗杰斯基金会合作伙伴']
    },
    {
        name: '公益与投资',
        desc: ['罗杰斯云上书院','吉姆•罗杰斯留守儿童之家','全球孩子命运共同体（赫宫a.m.）','全球科技成果产业转化中心（赫宫noon）','环球多国家组合式移居（赫宫p.m.）']
    }
])
</script>
