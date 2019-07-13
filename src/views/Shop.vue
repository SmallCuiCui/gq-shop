<template>
	<div class="gq-shop">

		<div class="gq-shop-bgcate">

			<!-- 商城顶部几个大的模块分类 -->
			<router-link
			tag="div"
			v-for="item in shopTop"
			:key="item.acm"
			class="gq-shop-bgcate-item"
			:to="{path: '/listdtail',query: {title: item.title, link: item.link}}"
			:style="{backgroundImage:'url(' + item.backgroundImage + ')'}"
			>
			<div class="gq-shop-bgcate-item_img">
				<img :src="item.image">
			</div>
			<p class="gq-shop-bgcate-item_text">{{item.title}}</p>
		</router-link>
	</div>

	<div class="gq-shop-cate">
		<!-- 商品页小分类 -->
		<router-link
		tag="div"
		v-for="item in cateList"
		:key="item.sort"
		class="gq-shop-cate-item"
		:to="{path: '/listdtail',query: {title: item.title, link: item.link}}"
		>
		<div class="gq-shop-cate-item_img">
			<img :src="item.image">
		</div>
		<p class="gq-shop-cate-item_text">{{item.title}}</p>
	</router-link>
</div>

<!-- 商品下猜你喜欢商品 -->
<div class="gq-shop-pros">
	<div class="gq-shop-pros-img">
		<img src="https://s10.mogucdn.com/mlcdn/c45406/190426_4hlfgkc2ceaea67422ag73077lfce_1611x166.png_1200x9999.v1c7E.81.webp">
	</div>
	<div class="gq-shop-pros-prodwrap">
		<ShopItem
		v-for="item in shopList"
		:key="item.acm"
		:acm="item.acm"
		:img="item.img"
		:title="item.title"
		:price="item.price"
		:cfav="item.cfav"
		:hasCart="hasCart"
		></ShopItem>
	</div>
</div>

</div>
</template>

<script>
	import ShopItem from '@/components/ShopItem'
	import dataList from '@/static/dan'
	export default {
		data () {
			return {
				shopList: [],
				hasCart: true
			}
		},
		components: {
			ShopItem
		},
		created () {
			this.shopTop = dataList.shopTop
			this.cateList = dataList.cateList
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
.gq-shop{
	height: 100%;
	overflow-x: hidden;
	// display: flex;
	// flex-direction: column;
	width: 100%;
	&-bgcate{
		display: flex;
		padding: 9px;
		width: 100%;
		box-sizing: border-box;
		justify-content: space-between;
		background-color: #fff;
		&-item{
			width: 23%;
			height: 0;
			padding-top: 23%;
			border-radius: 5px;
			overflow: hidden;
			position: relative;
			background-size: cover;

			&_img{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				padding: 0 10px;
				box-sizing: border-box;
				img{
					width: 100%;
				}
			}
			&_text{
				width: 100%;
				position: absolute;
				bottom: 10px;
				left: 0;
				text-align: center;
				color: #fff;
				font-size: 14px;
				font-weight: 600;
			}
		} 
	}

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
	&-pros{
		&-img{
			width: 100%;
			margin-top: 5px;
			img{
				width: 100%;
			}
		}
		&-prodwrap{
			overflow: auto;
			background-color: #f5f5f5;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			color: #333;
		}
	}
}
</style>
