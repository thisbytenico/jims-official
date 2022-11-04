<template>
    <div class="PhilanthropyandInvestment">
        <img class="clickPosition" src="/images/公益与投资-留守儿童之家.png" alt="公益与投资-留守儿童之家" />
        <img class="clickPosition" src="/images/公益与投资-全球孩子命运共同体.png" alt="公益与投资-全球孩子命运共同体" />
        <img class="clickPosition" src="/images/公益与投资-全球科技成果.png" alt="公益与投资-全球科技成果" />
        <img class="clickPosition" src="/images/公益与投资-环球旅行.png" alt="公益与投资-环球旅行" />
        <div class="academy clickPosition">
            <!-- <img src="/images/公益与投资-书院.png" alt="公益与投资-书院" /> -->
            <div class="title">罗杰斯云上书院</div>
            <div class="book">
                <div class="bookInfo" v-for="(item, index) in bookNames" :key="index">
                    <div class="bookPicture"><img :src="item.img" alt="" /></div>
                    <div class="bookTitle">{{ item.name }}</div>
                    <button @click="buyBook(item.buyLink)">立即购买</button>
                </div>
            </div>
        </div>
        <img src="/images/公益与投资-数字博物馆.png" alt="公益与投资-数字博物馆" />
    </div>
</template>
<script>
import './index.scss'
export default {
    name: 'PhilanthropyandInvestment',
    mounted() {
        if (this.$route.query.index != -1)
            setTimeout(() => {
                document.documentElement.scrollTo({ top: document.querySelectorAll('.PhilanthropyandInvestment .clickPosition')[this.$route.query.index].offsetTop, behavior: 'smooth' })
            }, 1000)
    },
    methods: {
        buyBook(url) {
            window.open(url, '_blank')
        }
    },
    data() {
        return {
            bookNames: [
                {
                    name: '《与吉姆·罗杰斯对谈七日》',
                    img: '/images/组-38@2x.png',
                    buyLink: 'https://detail.tmall.com/item.htm?abbucket=11&id=588153175321&ns=1&spm=a230r.1.14.13.12706da0eARR12'
                },
                {
                    name: '《世界地图就是你的财富版图投资大师罗杰斯环球投资》',
                    img: '/images/组-39@2x.png',
                    buyLink: 'https://detail.tmall.com/item.htm?abbucket=11&id=675834694499&ns=1&spm=a230r.1.14.37.5a196c6b3PyPiY'
                },
                {
                    name: '《中国牛市》',
                    img: '/images/组-40@2x.png',
                    buyLink: 'https://item.taobao.com/item.htm?spm=a230r.1.14.63.e30053bbXjXyor&id=645714437705&ns=1&abbucket=11#detail'
                },
                {
                    name: '《中国赛道 投资大师罗杰斯谈中国未来趋势》',
                    img: '/images/组-41@2x.png',
                    buyLink: 'https://detail.tmall.com/item.htm?abbucket=11&id=654812001026&ns=1&spm=a230r.1.14.1.3515b93cyYQD6b'
                },
                {
                    name: '《最富足的投资》',
                    img: '/images/组-42@2x.png',
                    buyLink: 'https://detail.tmall.com/item.htm?abbucket=11&id=563487163032&ns=1&spm=a230r.1.14.1.4cbf538eEYJmk0'
                },
                {
                    name: '《危机时代》',
                    img: '/images/组-43@2x.png',
                    buyLink: 'https://detail.tmall.com/item.htm?abbucket=11&id=643234413977&ns=1&spm=a230r.1.14.1.37cf66c3ZJXIgq'
                },
                {
                    name: '《吉姆·罗杰斯的大预测》',
                    img: '/images/组-44@2x.png',
                    buyLink: 'https://detail.tmall.com/item.htm?id=676171705095&spm=pc_detail.27183998/evo318828b447259.202208.3.1bf87dd6cMz9Wr'
                },
                {
                    name: '《投资大师罗杰斯给宝贝女儿的12封信》',
                    img: '/images/组-45@2x.png',
                    buyLink: 'https://detail.tmall.com/item.htm?abbucket=11&id=673710277695&ns=1&spm=a230r.1.14.1.2a254a3dvjWrvV'
                },
                {
                    name: '《投资骑士》',
                    img: '/images/组-46@2x.png',
                    buyLink: 'https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-18498230457.9.72172bea4dAb9L&id=683523164713'
                },
                { name: '《旅行,人生有价值的投资》', img: '/images/组-47@2x.png', buyLink: 'https://item.jd.com/10034107695178.html' },
                {
                    name: '《水晶球：吉姆·罗杰斯和他的投资预言》',
                    img: '/images/组-48@2x.png',
                    buyLink: 'https://detail.tmall.com/item.htm?abbucket=11&id=660348911723&ns=1&spm=a230r.1.14.61.6eae2195XXhHD6'
                },
                { name: '《热门商品投资》', img: '/images/组-49@2x.png', buyLink: 'https://detail.tmall.com/item.htm?abbucket=11&id=675397942372&ns=1&spm=a230r.1.14.1.79ac36c1DrCeP8' },
                {
                    name: '《热门商品投资:量子基金创始人的投资真经》',
                    img: '/images/组-50@2x.png',
                    buyLink: 'https://detail.tmall.com/item.htm?abbucket=11&id=609951927144&ns=1&spm=a230r.1.14.13.57af36c1en3ZVT'
                },
                {
                    name: '《玩赚地球:吉姆罗杰斯的环球投资之旅》',
                    img: '/images/组-51@2x.png',
                    buyLink: 'https://item.taobao.com/item.htm?spm=a230r.1.14.91.4edf1cbaKNzhhW&id=688818966691&ns=1&abbucket=11#detail'
                },
                {
                    name: '《罗杰斯环球投资旅行》',
                    img: '/images/组-52@2x.png',
                    buyLink: 'https://detail.tmall.com/item.htm?abbucket=11&id=595440053785&ns=1&spm=a230r.1.14.16.6ba1187bvMI3w0'
                },
                {
                    name: '《街头智慧： 罗杰斯的投资与人生》',
                    img: '/images/组-53@2x.png',
                    buyLink: 'https://detail.tmall.com/item.htm?abbucket=16&id=668546760712&rn=ce74d58b41932e253ef407c5fb43e37a&spm=a1z10.3-b.w4011-22436304768.38.4c1161584XcdVb'
                },
                { name: '《资金流向》', img: '/images/组-54@2x.png', buyLink: 'https://item.jd.com/10037684407780.html' },
                {
                    name: '《吉姆·罗杰斯 证券市场红周刊2020年15期》',
                    img: '/images/组-55@2x.png',
                    buyLink:
                        'http://e.dangdang.com/products/1901218584.html?_ddclickunion=P-295132-57139_64_0__1|ad_type=0|sys_id=1#dd_refer=https%3A%2F%2Fc.duomai.com%2Ftrack.php%3Fsite_id%3D57139%26aid%3D64%26euid%3D%26t%3Dhttp%3A%2F%2Fproduct.dangdang.com%2F1901218584.html'
                },
                { name: '《传奇投资人的智慧》 套装7册', img: '/images/组-56@2x.png', buyLink: 'https://item.jd.com/10049332501670.html' },
                { name: '《玩赚地球》', img: '/images/组-57@2x.png', buyLink: 'https://item.jd.com/10060178568378.html' }
            ]
        }
    }
}
</script>