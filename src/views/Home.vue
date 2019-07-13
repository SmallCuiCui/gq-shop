<template>
  <div class="gq-home">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for='banner in banners'
          :key="banner.title"
          >
          <img :src="banner.image_800" :alt="banner.title">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <div class="gq-home-cate">
      <!-- 跳转至商品列表 -->
      <router-link
        tag="div"
        v-for="item in cateList"
        :key="item.sort"
        class="gq-home-cate-item"
        :to="{name:'listdtail',params: {headerTitle: item.title, link: item.link}}"
        >
        <div class="gq-home-cate-item_img">
          <img :src="item.image">
        </div>
        <p class="gq-home-cate-item_text">{{item.title}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
// 引入轮播插件以及样式
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import cateList from '@/static/cate'

export default {
  data () {
    return {
      banners: []
    }
  },
  created () {
    this.cateList = cateList.list
    console.log(this.cateList)
    this.$http.getBanner()
    .then(resp => {
      let bannerData = JSON.parse(resp.slice(5).replace(')', '')).data['136556'].list
      bannerData.forEach(item => {
        const { sort, image_800, title } = item
        this.banners.push({
          sort,
          image_800,
          title
        })
        this.$nextTick().then(() => {
          new Swiper('.swiper-container', {
            autoplay: true,
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination'
            }
          })
        })
      })
    })
  },
  methods: {

  }
}
</script>

<style lang="scss">
.swiper-container{
  width: 100%;
  height: 0;
  padding-top: 150/375 * 100%;
  position: relative;

  .swiper-wrapper{
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;

    .swiper-slide{
      img{
        width: 100%;
      }
    }
  }

  .swiper-pagination-bullet{
    background-color: white;
    opacity: .9;
  }
  .swiper-pagination-bullet-active{
    background-color: red;
  }
}

.gq-home{

  &-cate{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 5px 0;
    background-color: #fff;
    &-item{
      width: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 10px;
      &_img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        img{
          width: 100%
        }
      }
      &_text{
        text-align: center;
        font-size: 14px;
        color: #666;
        margin-top: 5px;
      }
    }
  }
}
</style>
