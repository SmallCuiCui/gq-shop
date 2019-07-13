<template>
  <div class="gq-search">
    <div class="gq-search-top">
      <div>
          <i class="gq-icon" @click="goBack">&#xe616;</i>
          <input type="text" ref="input" :placeholder="inputVal">
          <span @click="search" class="gq-icon right">搜索</span>
      </div>
    </div>

    <div class="gq-search-history">
      <h4>
        <i class="gq-icon">&#xe61c;</i>
        <span>历史搜索</span>
        <i class="gq-icon right">&#xe645;</i>
      </h4>
      <ul class="gq-search-history-wrap">
        <router-link
        v-for="item in historyList"
        :key = "item"
        tag="li"
        :to="{name:'listdtail', query: {headerTitle: item, acm: '3.mce.1_10_11k.37705.28553.u7v16rvSBbPbj.p_3_hotSearchKeywordRec-mid_37705-sd_115-mdt_hotWord-dit_181-lc_201'}}"
        >{{item}}</router-link>
      </ul>
    </div>

    <div class="gq-search-hot">
        <h4>
          <i class="gq-icon">&#xe61b;</i>
          <span>热门搜索</span>
        </h4>
        <ul class="gq-search-hot-wrap">
          <li 
          v-for="hot in hotWord"
          :key="hot.query"
          >{{hot.query}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
data () {
  return {
    hotWord: [],
    historyList: [],
    inputVal: ''
  }
},
created () {
  this.historyList = JSON.parse(window.localStorage.getItem('historyList')) || []
  this.$http.getHotSearch()
    .then(resp => {
      this.inputVal = resp.data.sketch.data.query
      this.hotWord = resp.data.hotWord.data
    })
},
methods: {
  search () {
    // 获取输入的值，没有输入时就是请求的默认数据
    if (this.$refs.input.value){
      this.inputVal = this.$refs.input.value
    }
    // 保存搜索记录到localStorage
    if (!this.historyList.includes(this.inputVal)) {
      this.historyList.push(this.inputVal)
      window.localStorage.setItem('historyList',JSON.stringify(this.historyList))
    }
    // 跳转至商品列表页
    this.$router.push({
      name: 'listdtail',
      query: {
        headerTitle: this.inputVal,
        acm: '3.mce.1_10_11k.37705.28553.u7v16rvSBbPbj.p_3_hotSearchKeywordRec-mid_37705-sd_115-mdt_hotWord-dit_181-lc_201'
      }
    })
  }
}
}
</script>
<style lang='scss' scoped>
$baseColor: rgb(102, 102, 102);
$activeColor: rgb(255, 87, 119);

.gq-search{
  width: 100%;
  height: 0;
  padding-top: 12%;
  position: relative;
  border-bottom: 1px solid #eee;
  &-top{
    position: absolute;
    top: 10px;
    left: 0;
    height: 30px;
    width: 100%;
    div{
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-around;
      text-align: center;
      align-items: center;
      i,span{
        color: $baseColor;
        font-size: 14px;
        padding: 0 10px;
      }
      i{
        font-size: 20px;
      }
      input{
        flex: 1;
        color: $baseColor;
        font-size: 14px;
        border-radius: 5px;
        padding-left: 10px;
        height: 25px;
        border: 1px solid #eee;
        &:focus{
          border: 1px solid $activeColor;
        }
      }
    }
  }
  &-history{
    margin-top: 5;
  }
  &-history, &-hot{
    padding: 10px;
    &-wrap{
      display: flex;
      flex-wrap: wrap;
      li{
        height: 25px;
        margin-left: 10px;
        margin-top: 12px;
        line-height: 25px;
        border: 1px solid #f5f5f5;
        border-radius: 3px;
        padding: 0 11px;
        font-size: 13px;
      }
    }
    h4{
      height:22px;
      line-height: 22px;
      color: #999;
      font-size: 14px;
      i{
        font-size: 16px;
        margin-right: 5px;
      }
      .right{
        float: right;
        font-size: 20px;
        margin-right: 10px;
      }
    }
  }
}
</style>
