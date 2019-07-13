<template>
	<div class="gq-proList">
		<div class="gq-proList-aside">
			<ul>
				<router-link
  				tag="li"
  				v-for="item in list"
  				:key="item.key"
  				:to="{name: 'cataname', params: {cateId:item.key}}"
				>
					<p>{{item.title}}</p>
				</router-link>
			</ul>
		</div>
		<div class="gq-proList-section">

			<router-view />

      <div class="gq-proList-section-shops">
        <div class="gq-proList-section-shops-sel">
          <li><span style="color: #FF5577">综合</span></li>
          <li><span>销量</span></li>
          <li><span>新品</span></li>
        </div>
        <div class="gq-proList-section-shops-wrap">
          <ShopItem
            name="shopitem"
            v-for="item in shopList"
            :key="item.acm"
            :acm="item.acm"
            :img="item.img"
            :title="item.title"
            :price="item.price"
            :cfav="item.cfav"
          ></ShopItem>
        </div>
      </div>
		</div>
	</div>
</template>

<script>

import ShopItem from '@/components/ShopItem'
export default {
data () {
  return {
  	list: [],
    shopList: []
  }
},
components: {
  ShopItem
},
created () {
	// 请求分类列表数据
	this.$http.getList().then(resp => {
		let allList = JSON.parse(resp.slice(5).replace(')', '')).data['117330'].list
		allList.forEach(item => {
			const { maitKey, title } = item
			this.list.push({
				key: maitKey,
				title
			})
		})
    const { cateId = this.list[0].key } = this.$route.params
    this.$router.push(`/list/${cateId}`)
	})

  // 请求列表下面的商品列表数据
  this.getData()
},
methods: {
  getData () {
    let obj = {
        page: 1,
        offset: 20,
        title: '%E9%AB%98%E8%B7%9F%E9%9E%8B',
        sort: 'pop',
        fcid: 51271,
        acm: '3.mce.1_10_1jy9s.3627.0.37oysrvTE2cB2.pos_22-m_465412-sd_119-mf_70922_1043092-idx_22-mfs_24-dm1_5000',
        ptp: '32._mf1_1239_70922.0.0.Lc0btZDL'
      }

    this.$http.getShopList(obj).then(resp => {
      this.shopList = resp.result.wall.docs
    })
  }
}
  
}
</script>

<style lang="scss">
$baseColor: rgb(102, 102, 102);
$activeColor: rgb(255, 87, 119);
.router-link-exact-active,
.router-link-active{
  color: $activeColor;
  background-color: #fff;
  p{
  	border-left: 4px solid $activeColor !important;
  }
}
.gq-footer-app{
  height: 0 !important;
}
.gq-proList{
  height: 100%;
  display: flex;

  &-aside{
  	width: 90px;
    height: 100%;
  	background-color: #F6F6F6;
    overflow-x: hidden;
  	ul{
  		width: 100%;
  		li{
  			height: 45px;
  		  font-size: 14px;
  			display: flex;
  			align-items: center;
  			p{
  				box-sizing: border-box;
  				padding: 2px 0;
  				padding-left: 8px;
  				border-left: 4px solid #F6F6F6;
  		  }
  	  }
    }
  }
  &-section{
    flex: 1;
    overflow-x: hidden;
    background-color: #fff;

   &-shops{
    margin-top: 20px;
    &-sel{
      display: flex;
      height: 38px;
      border-top: 1px solid #eaeaea;
      border-bottom: 1px solid #eaeaea;
      li{
        flex: 1;
        text-align: center;
        list-style: none;
        font-size: 14px;
        display: flex;
        align-items: center;
        span{
          display: inline-block;
          width: 100%;
          height: 18px;
          border-right: 1px solid #eaeaea;
        }
        &:last-child span{
          border: none;
        }
      }
    }
    &-wrap{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    }
  }
}
</style>
