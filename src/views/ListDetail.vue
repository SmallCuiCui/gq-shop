<template>
  <div class="gq-listDetail">
    <HdTitle :title= "title" :hasCart="true"></HdTitle>
      <ul class="gq-listDetail-select">
      <li
        :class="['gq-listDetail-select-item',sort==='pop'?'active':'']"
        @click="changeSelect('pop')"
      >
        <span>综合</span>
      </li>
      <li
      :class="['gq-listDetail-select-item',sort==='sell'?'active':'']"
      @click="changeSelect('sell')"><span>销量</span></li>
      <li
      :class="['gq-listDetail-select-item',sort==='new'?'active':'']"
      @click="changeSelect('new')"><span>新品</span></li>
      <li
      :class="['gq-listDetail-select-item',isShow ? 'active':'']"
      @click="changeSelect('price', $event)">
        <span>价格<i class="gq-icon">&#xe6b4;</i></span>
        <div v-if="isShow" class="gq-listDetail-select-item_slprice">
          <ul class="gq-listDetail-select-item_slprice_but">
            <li
              v-for="price in priceList"
              :key="price.min"
              @click="getData(price.min, price.max)"
            >
              <span>{{price.min}}<font>-</font>{{price.max}}</span>
            </li>
          </ul>
          <div class="gq-listDetail-select-item_slprice_input">
            <span>区间(元)</span>
            <input type="text" @click.stop v-model="inputMin" name="" >
            <font>-</font>
            <input type="text" @click.stop  v-model="inputMax" name="">
            <button @click="getData(inputMin, inputMax)">确认</button>
          </div>
        </div>
      </li>
    </ul>

    <div class="gq-listDetail-shopWrap">
      <ShopItem
      name="shopitem"
      v-for="item in dataList"
      :key="item.acm"
      :acm="item.acm"
      :img="item.img"
      :title="item.title"
      :price="item.price"
      :cfav="item.cfav"
      ></ShopItem>
    </div>
    <BackTop
    :heightToShow="300"
    scrollContainer=".gq-listDetail-shopWrap"
    ></BackTop>
  </div>
</template>

<script>
import ShopItem from '@/components/ShopItem'
import HdTitle from '@/components/HdTitle'
export default {
  data () {
    return {
      dataList: [],
      inputMin: '',
      inputMax: '',
      // 默认价格区间
      priceList: [
        {
          min: 0,
          max: 50
        },
        {
          min: 50,
          max: 80
        },
        {
          min: 80,
          max: 200
        }
      ],
      sort: 'pop',
      page: 1,
      offset: 20,
      isShow: false
    }
  },
  components: {
    ShopItem,
    HdTitle
  },
  created () {
    this.sort = 'pop'
    // 初始价格参数没有
    this.getData('', '')
  },
  methods: {
    getData (minPrice, maxPrice) {
      this.inputMin = ''
      this.inputMax = ''
      // 此处通过query保留查询数据而不是params，否则在当前页面刷新时会导致params数据清空
      this.title = this.$route.query.headerTitle
      let fcid
      let acm

      if (this.$route.query.link) {
        const attr = this.$route.query.link.split('&')
        fcid = attr[0].split('=')[1]
        acm = attr[2].split('=')[1]
      } else {
        acm = this.$route.query.acm
        fcid = ''
      }
      let obj = {
        page: this.page,
        offset: this.offset,
        q: encodeURI(encodeURI(this.title)),
        title: this.title,
        sort: this.sort,
        fcid,
        acm,
        minPrice,
        maxPrice
      }
      this.$http.getShopList(obj).then(resp => {
        if (resp.result.priceFilter) {
          this.priceList = resp.result.priceFilter
        }
        this.page = Number(resp.result.param.page) + 1
        this.offset += 20
        this.dataList = resp.result.wall.docs
      })
    },
    changeSelect (types, event) {
      if (types === 'price') {
        this.isShow = !this.isShow
      } else {
        this.sort = types
        this.getData()
      }
    }
  }
}
</script>

<style lang="scss">
.gq-listDetail{
 display: flex;
 flex-direction: column;
 height: 100%;
 &-select{
  height: 39px;
  border-top: 1px solid #eaeaea;
  display: flex;
  position: relative;
  background-color: #fff;

  &-item{
   line-height: 39px;
   text-align: center;
   flex: 1;
   display: flex;
   align-items:center;
   &.active{
    color: #ff5b76;
   }

   &:last-child{
    >span{
      border-right: none;
      display: flex;
      justify-content: center;
      i{
        font-size: 16px;
        margin-left: 5px;
        color: #666;
        line-height: 20px;
      }
    }
   }

   &_slprice{
    width: 100%;
    position: absolute;
    top: 40px;
    left: 0;
    color: #333;
    z-index: 1;
    background-color: #fff;
    &_but{
     display: flex;
     justify-content: space-around;
     align-items: center;
     li{
      width: 30%;
      height: 30px;
      line-height: 30px;
      margin: 10px 0;
      text-align: center;
      background-color: #f3f3f3;
      font-size: 14px;

      font{
       margin: 0 8px;
      }
     }
    }
    &_input{
     justify-content: space-around;
     padding: 0 10px;
     margin-bottom: 10px;
     align-items: center;
     display: flex;
     font-size: 14px;

     input{
      border: 1px solid #e5e5e5;
      width: 85px;
      height: 28px;
      line-height: 28px;
      text-align: center;
      background-color: #fff;
     }

     button{
      color: #fff;
      width: 85px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background-color: #ff5b76;
      border: none;
      border-radius: 3px;
     }
    }
   }
   >span{
    display: inline-block;
    width: 100%;
    height: 18px;
    line-height: 18px;
    font-size: 14px;
    text-align: center;
    border-right: 1px solid #e6e6e6;
   }
  }
 }
  &-shopWrap{
    overflow: auto;
    background-color: #f5f5f5;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-around;
    color: #333;
  }
}
</style>
