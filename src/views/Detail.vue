<template>
	<div class="gq-detail">
		<!-- 详情顶部图标 -->
		<div class="gq-detail-icons">
			<div class="gq-detail-icons_icon">
				<i class="gq-icon" @click="goBack">&#xe603;</i>
			</div>
			<div class="gq-detail-icons_icon">
				<router-link
					tag="i"
					to="/cart"
					class="gq-icon"
				>&#xe601;</router-link>
			</div>
		</div>

		<!-- 详情轮播图 -->
		<div class="gq-detail-banner">
			<div class="swiper-container">
	      <div class="swiper-wrapper">
	        <div
	          class="swiper-slide"
	          v-for='img in detailData.imgList'
	          :key="img.url"
	          >
	          <img :src="img.url" :alt="img.url">
	        </div>
	      </div>
	      <div class="swiper-pagination"></div>
	    </div>
		</div>

    <!-- 商品信息栏 -->
    <div class="gq-detail-shopInfo">
    	<div class="gq-detail-shopInfo-price">
    		<div class="gq-detail-shopInfo-price_new"><span>￥</span>{{detailData.price | tofix2}}</div>
    		<div class="gq-detail-shopInfo-price_old">
    			<p>￥{{detailData.originPrice  | tofix2}}</p>
    			<font>{{detailData.discount}}折</font>
    		</div>
    	</div>
    	<div class="gq-detail-shopInfo_title">{{detailData.title}}</div>
    	<p class="gq-detail-shopInfo_miany">免邮费</p>
    </div>

    <div class="gq-detail-select">
    	<div class="gq-detail-select-item">
    		<div class="gq-detail-select-item_type">
    			<span>促销</span>
    			<font>满减</font>
    			<p>满2件立减5元，满三件立减10元</p>
    			<div class="gq-detail-select-item_type_more">
    				<span>更多</span>
    				<i class="gq-icon">&#xe608;</i>
    			</div>
    		</div>
    	</div>

    	<div class="gq-detail-select-item">
    		<div class="gq-detail-select-item_type">
    			<ul>
    				<li>
    					<i class="gq-icon">&#xe6d9;</i>
    					<span>72小时发货</span>
    				</li>
    				<li>
    					<i class="gq-icon">&#xe6d9;</i>
    					<span>7天无理由退货</span>
    				</li>
    				<li>
    					<i class="gq-icon">&#xe6d9;</i>
    					<span>延误必赔</span>
    				</li>
    			</ul>
    			<div class="gq-detail-select-item_type_more">
    				<i class="gq-icon">&#xe608;</i>
    			</div>
    		</div>
    		<div class="gq-detail-select-item-popup">
    			
    		</div>
    	</div>

    	<div class="gq-detail-select-item" @click="showSelect=!showSelect">
    		<div class="gq-detail-select-item_type">
    			<p>请选择：颜色，尺码</p>
    			<div class="gq-detail-select-item_type_more">
    				<span>更多</span>
    				<i class="gq-icon">&#xe608;</i>
    			</div>
    		</div>
    		<div class="gq-detail-select-item-popup">
    			
    		</div>
    	</div>
    </div>

     <!-- 商品参数规格选择框 -->
    <div class="gq-detail-selBox">
    	<my-popup
			  v-model="showSelect"
			  position="bottom"
			  class="gq-detail-selBox-popup"
			>
			 <div class="gq-detail-selBox-popup-shopInfo">
			 	<div class="gq-detail-selBox-popup-shopInfo_img">
			 		<img src="https://s11.mogucdn.com/mlcdn/c45406/190421_1dh69292fk8fj2e15ee85486edgfc_640x960.jpg_128x999.jpg">
			 	</div>
			 	<div class="gq-detail-selBox-popup-shopInfo_price">
			 		<h4><span>￥</span>{{detailData.price | tofix2}}</h4>
			 		<p>库存{{detailData.stock}}件</p>
			 		<p>请选择：颜色，尺码</p>
			 	</div>
			 	<div class="gq-detail-selBox-popup-shopInfo_cancel">
			 		<i class="gq-icon" @click="showSelect=!showSelect">&#xe673;</i>
			 	</div>
			 </div>

			 <div class="gq-detail-selBox-popup-types">
				 	<div class="gq-detail-selBox-popup-types-type">
				 		<h4 v-if="detailData.typeNameList" class="gq-detail-selBox-popup-types-type_title">{{detailData.typeNameList[0].typeName}}</h4>
				 		<ul class="gq-detail-selBox-popup-types-type_list">
				 			<li
				 			v-for="item in detailData.tasteList"
				 			:key="item.type"
				 			@click="selecType('type1', $event)"
				 			:class="{'active': cartType1 === item.type}"
				 			class="gq-detail-selBox-popup-types-type_list_item"
				 			>{{item.type}}</li>
				 		</ul>
				  </div>

				  <div class="gq-detail-selBox-popup-types-type">
				 		<h4 v-if="detailData.typeNameList" class="gq-detail-selBox-popup-types-type_title">{{detailData.typeNameList[1].typeName}}</h4>
				 		<ul class="gq-detail-selBox-popup-types-type_list">
				 			<li
				 			v-for="item in detailData.weightList"
				 			:key="item.type"
				 			@click="selecType('type2', $event)"
				 			class="gq-detail-selBox-popup-types-type_list_item"
				 			:class="{'active': cartType2 === item.type}"
				 			>{{item.type}}</li>
				 		</ul>
				  </div>

				  <div class="gq-detail-selBox-popup-types-num">
				  	<h4 class="gq-detail-selBox-popup-types-num_title">数量</h4>
					 	<p class="gq-detail-selBox-popup-types-num_wrap">
					 		<span @click="cartNum--">-</span>
					 		<font v-text="addNum"></font>
					 		<span @click="cartNum++">+</span>
					 	</p>
					</div>
			 </div>

			 <div
			 @click="addCart"
			 class="gq-detail-selBox-popup-confirm">确定</div>

			</my-popup>
    </div>

    <div class="gq-detail-footer">
    	<ul class="gq-detail-footer-left">
    		<li>
    			<i class="gq-icon">&#xe7dc;</i>
    			<span>店铺</span>
    		</li>
    		<li>
    			<i class="gq-icon">&#xe629;</i>
    			<span>客服</span>
    		</li>
    		<li>
    			<i class="gq-icon">&#xe61b;</i>
    			<span>收藏</span>
    		</li>
    	</ul>
    	<ol class="gq-detail-footer-right">
    		<li>
    			<!-- 点击弹出选择框，选择后点击确定收起选择框，弹出提示信息 -->
    			<span @click="showSelect=!showSelect">加入购物车</span>
    		</li>
    		<li>
    			<!-- 点击弹出选择框，选择后点击确定跳转到订单页 -->
    			<span @click="showSelect=!showSelect">立即购买</span>
    		</li>
    	</ol>
    </div>
    <Navs></Navs>

	</div>
</template>

<script>
	// 引入轮播插件以及样式
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import { Toast } from 'mint-ui';
import { mapMutations } from 'vuex'
export default {
	data () {
		return {
			detailData: {},
			cartNum: 1,
			cartType1: '',
			cartType2: '',
			showSelect: false
		}
	},
	computed: {
		addNum () {
			if (this.cartNum < 1) {
				return 1
			} else {
				return this.cartNum
			}
		}
	},
	created () {
		this.$http.getDetail().then(resp => {
			this.detailData = resp.res_body
			// console.log(this.detailData)
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
	},
	methods: {
		...mapMutations(['addCartById']),
		selecType (type, $event) {
			if(type === 'type1'){
				this.cartType1 = $event.target.innerHTML
			} else {
				this.cartType2 = $event.target.innerHTML
			}
		},
		addCart () {
			this.showSelect = false
			Toast('加入购物车成功');
			this.addCartById({
				 	id: this.detailData.id,
				 	num: this.addNum,
				 	img: this.detailData.imgList[0].url,
				 	title: this.detailData.title,
				 	price: this.detailData.price,
				 	originPrice: this.detailData.originPrice,
				 	cartType1: this.detailData.typeNameList[0].typeName,
				 	cartType1Val: this.cartType1,
				 	cartType2: this.detailData.typeNameList[1].typeName,
				 	cartType2Val: this.cartType2
				 })
		}
	}
}
</script>

<style lang="scss">
.gq-detail{
	position: relative;
	height: 100%;
	overflow: auto;
	&-icons{
		height: 40px;
		margin-top: 10px;
		position: absolute;
		z-index: 2;
		top: 0;
		left: 0;
		width: 100%;
		padding: 0 10px;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		&_icon{
			height: 40px;
			width: 40px;
			text-align: center;
			line-height: 40px;
			border-radius: 50%;
			background-color: rgba(0, 0, 0, .5);
			color: white;
			&:first-child i{
				font-weight: 600;
				font-size: 25px;
			}
			i{
				font-size: 22px;
			}
		}
	}
	&-banner{
		.swiper-container{
			width: 100%;
		  height: 0;
		  padding-top: 375 / 390 * 100%;
		  position: relative;
		  overflow: hidden;
			.swiper-wrapper{
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				.swiper-slide{
					img{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
	&-shopInfo{
		padding: 10px 15px;
		background: #fff;
		&-price{
			height: 42px;
			margin: 5px 0;
			&_new{
				float: left;
				font-size: 30px;
				span{
					font-size: 12px;
					vertical-align: top;
				}
			}
			&_old{
				float: left;
				margin-left: 10px;
				p{
					color: #999;
					text-decoration: line-through;
					font-size: 12px;
					margin-bottom: 6px;
				}
				font{
					font-size: 12px;
					padding: 0 10px;
					color: rgb(255, 34, 85);
					background-color: rgb(255, 232, 238);
				}
			}
		}
		&_title{
			line-height: 20px;
		}
		&_miany{
			color: #999;
			font-size: 12px;
			margin-top: 16px;
		}
	}
	&-select{
		background-color: #f1f1f1;
		padding-top: 10px;
		padding-bottom: 50px;
		&-item{
			height: 38px;
			line-height: 38px;
			margin-bottom: 10px;
			background-color: #fff;
			&_type{
				display: flex;
				font-size: 13px;
				padding: 0 15px;
				display: flex;
				align-items:center;
				justify-content: space-between;
				span{
					color: #999;
				}
				font{
					height: 20px;
					line-height: 20px;
					padding: 0 5px;
					font-size: 12px;
					border-radius: 5px;
					background-color: #ffeef3;
					color: #ff5777;
				}
				p{
					font-size: 13px;
					color: #666;
				}
				&_more{
					color: #999;
				}

				ul{
					display: flex;
					font-size: 12px;
					li{
						margin-right: 13px;
						i{
							margin-right: 5px;
							color: rgb(255, 34, 85);
							font-size: 14px;
						}
					}
				}

				&_more{
					font-size: 12px;
					i{
						margin-left: 5px;
						font-size: 16px;
						font-weight: 600;
						vertical-align: middle;
					}
				}
			}
		}
	}
	&-selBox{
		width: 100%;
		height: auto;
		&-popup{
			width: 100%;
			box-sizing: border-box;
			max-height: 475 / 667 * 100%;
			display: flex;
			flex-direction: column;

			&-shopInfo{
				height: 75px;
				padding: 15px 10px;

				&_img{
					float: left;
					margin-top: -46px;
					margin-right: 10px;
					width: 80px;
					height: 120px;
					img{
						width: 100%;
						height: 100%;
					}
				}
				&_price{
					float: left;
					color: #333;
					h4{
						font-weight: normal;
						font-size: 26px;
						margin-bottom: 6px;
						span{
							vertical-align: top;
							font-size: 12px;
						}
					}
					p{
						height: 18px;
						line-height: 18px;
						font-size: 12px;
					}
				}
				&_cancel{
					float: right;
					font-size: 13px;
					font-weight: 600;
					color: black;
				}
			}
			&-types{
				flex: 1;
				overflow: auto;
				padding: 0 10px;
				&-type{
					color: #5e5e5e;
					&_title{
						font-size: 12px;
						margin: 5px 0 8px;
					}
					&_list{
						display: flex;
						flex-wrap: wrap;
						&_item{
							height: 24px;
							line-height: 24px;
							border-radius: 3px;
							text-align: center;
							margin-right: 10px;
							margin-bottom: 13px;
							padding: 0 15px;
							border: 1px solid #bbb;
							font-size: 12px;
							&.active{
								color: #ed4566;
								border: 1px solid #ed4566;
							}
						}
					}
				}
				&-num{
					margin-bottom: 15px;
					&_title{
						font-size: 12px;
						margin: 5px 0 8px;
					}
					&_wrap{
						height: 24px;
						display: inline-block;
						border: 1px solid #bbb;
						border-radius: 3px;
						span{
							display: inline-block;
							width: 28px;
							height: 24px;
							line-height: 24px;
							text-align: center;
							color: #ed4566;
						}
						font{
							display: inline-block;
							width: auto;
							height: 24px;
							line-height: 24px;
							vertical-align: top;
							border: 1px solid #bbb;
							border-width: 0 1px;
							padding: 0 10px;
						}
					}
				}
			}
			&-confirm{
				height: 50px;
				line-height: 50px;
				text-align: center;
				background-color: #ff5777;
				color: white;
				letter-spacing: 1px;
				font-size: 13px;
			}
		}
	}
	&-footer{
		height: 50px;
		position: fixed;
		background-color: #fff;
		bottom: 0;
		left: 0;
		color: #666;
		font-size: 12px;
		display:flex;
		width: 100%;
		&-left{
			flex: 1;
			display: flex;
			align-items:center;
			border-top: 1px solid #eee;
			li{
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items:center;
				justify-content: center;
				&:nth-child(2){
					color: #ff5777;
					border-right: 1px solid #eee;
					border-left: 1px solid #eee;
				}
				i{
					font-size: 18px;
					margin-bottom: 5px;
				}
			}
		}
		&-right{
			flex: 1;
			display: flex;
			align-items:center;
			font-size: 14px;
			li{
				flex: 1;
				height: 50px;
				line-height: 50px;
				text-align: center;
				&:first-child{
					background-color: #ffe6e8;
					color: #ff5777;
				}
				&:last-child{
					background-color: #ff5777;
					color: white;
				}
			}
		}
	}
	&-navs{
		position: fixed;
		bottom: 100px;
		right: 20px;
	}
}
</style>
