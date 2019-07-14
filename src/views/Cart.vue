<template>
	<div class="gq-cart">

		<HdTitle :title="'购物车'"></HdTitle>

		<!-- 购物车不为空，显示商品数据 -->
		<div class="gq-cart-shops" v-if="!isEmpty">
			<!-- 有效商品 -->
			<div class="gq-cart-shops-valid">
				<!-- 一家店铺的商品 -->
				<div
					v-for="shopItem in cartList"
					:key="shopItem.shopId"
					class="gq-cart-shops-valid-store"
				>
					<div class="gq-cart-shops-valid-store_name">
						<span
            @click="toggleCheckedByShop(shopItem.shopId)"
            :class="['circle', shopItem.shopChecked ? 'checked': '']"
            ></span>
            <font>{{shopItem.shopName}}</font>
            <i
	            @click="toggleShopEditByShopId({boolType: false, shopId: shopItem.shopId})"
	            v-if="shopItem.shopEdit"
	          >确定</i>
            <i
	            @click="toggleShopEditByShopId({boolType: true, shopId: shopItem.shopId})"
	            v-else class="gq-icon"
	          >&#xe61a;</i>
					</div>
          <ul class="gq-cart-shops-valid-store-shoplist">
          	<!-- 店铺下面的商品列表 -->
            <li
	            v-for="item in shopItem.shopList"
	            :key="item.id"
	            class="gq-cart-shops-valid-store-shoplist-item"
	          >
              <div class="gq-cart-shops-valid-store-shoplist-item_checkbox">
                <span
                  @click="toggleCheckedById({shopId: item.shopId, id: item.id})"
                  :class="['circle', item.checked ? 'checked': '']"
                ></span>
              </div>
              <router-link to="/detail" class="gq-cart-shops-valid-store-shoplist-item_img">
                <img :src="item.img">
              </router-link>
              <div v-if="!shopItem.shopEdit" class="gq-cart-shops-valid-store-shoplist-item_info">
                <router-link tag="h5" to="/detail">{{item.title}}</router-link>
                <p>{{item.cartType1}}：{{item.cartType1Val}}；{{item.cartType2}}：{{item.cartType2Val}}</p>
                <div class="gq-cart-shops-valid-store-shoplist-item_info_params">
                  <span>￥{{item.price | tofix2}}</span>
                  <span>￥{{item.originPrice | tofix2}}</span>
                  <font>x {{item.num}}</font>
                </div>
              </div>

              <div v-else class="gq-cart-shops-valid-store-shoplist-item_sele">
              	<div class="gq-cart-shops-valid-store-shoplist-item_sele_num">
                	<span @click="editNumById({
                		shopId: item.shopId,
                		id: item.id,
                		num: -1})">-</span>
                	<font>{{item.num}}</font>
                	<span @click="editNumById({
                		shopId: item.shopId,
                		id: item.id,
                		num: 1})">+</span>
                </div>
                <div class="gq-cart-shops-valid-store-shoplist-item_sele_params">
                	<span>{{item.cartType1}}：{{item.cartType1Val}}；{{item.cartType2}}：{{item.cartType2Val}}</span>
                	<i class="gq-icon">&#xe6b4;</i>
                </div>
              </div>
            </li>
          </ul>
				</div>
			</div>

		</div>

		<!-- 购物车为空时，显示空 -->
		<div class="gq-cart-emptyCart" v-if="isEmpty">
			<img src="https://s10.mogucdn.com/mlcdn/c45406/180704_3ac3b297lghla2jjdhe23d5jfgddf_1500x1170.png">
			<p>你的购物车空空如也</p>
			<router-link
			to="/"
			tag="div"
			class="gq-cart-emptyCart_btn">去逛逛</router-link>
		</div>

		<!-- 购物车底部 -->
		<div class="gq-cart-footer" v-if="!isEmpty">
			<label class="gq-cart-footer_check">
				<input type="checkbox" name="">
				<span
	        :class="['circle', allCheck ? 'checked': '']"
	        @click="toggleAllChecked(!allCheck)"
        ></span>
				<font>全选({{totalCheckedNum}})</font>
			</label>
			<div class="gq-cart-footer_tittleprice">￥{{totalCheckedMoney | tofix2}}</div>
			<div class="gq-cart-footer_btn" v-if='!isEdit'><span>去结算</span></div>
			<div class="gq-cart-footer_btn" v-else>
				<font>移入收藏夹</font>
				<span @click="delCheckedShop">删除</span>
			</div>
		</div>
	</div>
</template>

<script>
	import HdTitle from '@/components/HdTitle'
	import {
		mapGetters,
    mapState,
    mapMutations
		} from 'vuex'

	export default {
		data () {
			return {
			}
		},
		computed: {
      ...mapState([
      	'cartList'
      ]),
      ...mapGetters([
      	'isEmpty',
      	'allCheck',
      	'isEdit',
      	'totalCheckedNum',
      	'totalCheckedMoney'
      ])
    },
    mounted () {
    	// 渲染期间可以获取computed的数据，在created期间获取不到
    	// console.log(this.cartList)
    },
		components: {
			HdTitle
		},
    methods: {
      ...mapMutations([
        'toggleAllChecked',
        'toggleCheckedById',
        'toggleCheckedByShop',
        'toggleShopEditByShopId',
        'editNumById',
        'delCheckedShop'
      ])
    }
	}
</script>

<style lang="scss">
// 自写圆圈样式
	.circle{
			display: inline-block;
			height: 18px;
			width: 18px;
			vertical-align: middle;
			margin-right: 10px;
			border-radius: 50%;
			border: 1px solid #666;
			&.checked{
				background-color: #ff5777;
				position: relative;
				&::after{
					content: "";
					position: absolute;
					top: 3px;
					left: 2px;
					width: 10px;
					height: 6px;
					border: 1px solid #fff;
					border-width: 0 0 2px 2px;
					transform: rotate(-45deg)
				}
			}
		}

	.gq-cart{
		display: flex;
		height: 100%;
		flex-direction: column;
		background-color: #f1f1f1;
		&-shops{
			flex: 1;
			overflow: auto;
			&-valid{
				overflow: hidden;
				&-store{
					margin-top: 12px;
					background-color: #fff;
					&_name{
						padding: 8px 15px;
						font-size: 14px;
						color: #5e5e5e;
						border-bottom: 1px solid #eee;
						i{
							float: right;
							margin-top: 5px;
						}
					}
					&-shoplist{
						padding: 10px 15px;
						&-item{
							display: flex;
							height: 96px;
							margin-bottom: 15px;
							&_checkbox{
								width: 34px;
								display: flex;
								align-items: center;
							}
							&_img{
								width: 64px;
								height: 100%;
								margin-right: 15px;
								img{
									height: 100%;
									width: 100%;
									vertical-align: top;
								}
							}
							&_info{
								flex: 1;
								h5{
									font-size: 12px;
									line-height: 18px;
									font-weight: 700;
									color: #5e5e5e;
									font-family: Arail;
								}
								p{
									font-size: 12px;
									color: #999;
									height: 36px;
									margin-top: 8px;
								}
								&_params{
									>span{
										font-size: 14px;
										color: #333;
										&:nth-child(2){
											color: #999;
											font-size: 12px;
											margin-left: 5px;
											text-decoration: line-through;
										}
									}
									>font{
										float: right;
										font-size: 12px;
										color: #999;
									}
								}
							}
							&_sele{
								flex: 1;
								font-size: 12px;
								&_num{
									height: 28px;
									line-height: 28px;
									margin-top: 5px;
									border: 1px solid #999;
									display: inline-block;
									span{
										display: inline-block;
										width: 40px;
										font-size: 20px;
										line-height: 28px;
										text-align: center;
									}
									font{
										width: auto;
										padding: 0 15px;
										display: inline-block;
										vertical-align: top;
										border-right: 1px solid #999;
										border-left: 1px solid #999;
									}
								}
								&_params{
									height: 36px;
									line-height: 36px;
									margin-top: 10px;
									padding: 0 10px;
									width: 100%;
									box-sizing: border-box;
									border: 1px solid #999;
									i{
										float: right;
									}
								}
							}
						}

					}
				}
			}
		}

		&-emptyCart{
			height: 260px;
			overflow: hidden;
			position: relative;
			background-color: #fff;
			img{
				width: 100%;
				margin-top: -50px;
			}
			p{
				font-size: 12px;
				color: #5e5e5e;
				text-align: center;
				margin-top: -66px;
			}
			&_btn{
				width: 100px;
				height: 34px;
				line-height: 34px;
				text-align: center;
				margin: 0 auto;
				background-color: #ff5777;
				color: #fff;
				position: absolute;
				bottom: 20px;
				left: 50%;
				margin-left: -50px;
				border-radius: 5px;
			}
		}

		&-footer{
			background-color: #fff;
			border-top: 1px solid #d8d8d8;
			height: 30px;
			line-height: 30px;
			padding: 10px 15px;
			font-size: 14px;
			&_check{
				float: left;
				input{
					display: none;
				}
				
			}
			&_tittleprice{
				margin-left: 10px;
				float: left;
				color: #ee4566;
			}
			&_btn{
				display: inline-block;
				float: right;
				height: 30px;
				
				span{
					display: inline-block;
					padding: 0 20px;
					width: auto;
					line-height: 30px;
					background-color: #ff5777;
					color: #fff;
					border-radius: 5px;
					letter-spacing: 1px;
				}
				font{
					display: inline-block;
					margin-right: 10px;
					line-height: 28px;
					padding: 0 10px;
					width: auto;
					border-radius: 5px;
					border: 1px solid #ff5777;
					color: #ff5777;
				}
			}
		}
	}
</style>
