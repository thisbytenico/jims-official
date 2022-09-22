<template>
  <div class="page_index">
    <div class="nft_button">
      <div class="button">NFT</div>
    </div>
    <div class="footer_items">
      <div class="lists">
        <template v-for="(item, index) in listNFTData"
                  :key="index">
          <div class="items">
            <div class="items_content">
              <div class="top">
                <div class="empty"></div>
                <div class="name">{{ item.name }}</div>
              </div>
              <div class="list">
                <label v-for="(desc, descIndex) in item.desc"
                       :key="descIndex">
                  {{ desc }}
                </label>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <img class="WTBG"
         src="../../public/images/WTBG.png" />
    <img class="human"
         src="../../public/images/human.png" />

  </div>
</template>

<script setup>
import { ref, onMounted, inject, onBeforeUnmount } from 'vue'

const setHtmlFS = () => {
  const isTool = true;
  const win_w = window.innerWidth;
  let font_size_value = win_w / 19.2;
  let min_value = 60;
  if (isTool) {
    min_value = 50;
    // console.log('win_w', win_w)
    if (win_w < 768) {
      font_size_value = win_w / 7.5;
    } else {
      min_value = 68;
    }
  }
  font_size_value = font_size_value < min_value ? min_value : font_size_value;
  font_size_value = 100
  document.documentElement.style.fontSize = font_size_value + "px";
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
    desc: ['投资大师', '环球旅行', '亲子教育', '传奇人生', '罗杰斯看中国']
  },
  {
    name: '佩吉·帕克',
    desc: ['新书发布', '环球旅行', 'NFT', '我叫佩吉·帕克(I am Paige Parker)', '佩吉·派克与吉姆·罗杰斯']
  },
  {
    name: '快乐与小蜜蜂',
    desc: ['经典咏流传《西游记》《声律启蒙》', '快乐小蜜蜂教中文', '罗杰斯一家', '春节贺年', '电影《天火》']
  },
  {
    name: '罗杰斯基金会',
    desc: ['罗杰斯基金会介绍', '罗杰斯基金会章程', '罗杰斯思想研究中心', '罗杰斯基金会年度盛典', '罗杰斯基金会合作伙伴']
  },
  {
    name: '公益与投资',
    desc: ['罗杰斯云上书院', '吉姆•罗杰斯留守儿童之家', '全球孩子命运共同体（赫宫a.m.）', '全球科技成果产业转化中心（赫宫noon）', '环球多国家组合式移居（赫宫p.m.）']
  }
])
</script>
