<template>
	<div class="gq-cart">

		<HdTitle :title="'购物车'"></HdTitle>

		<!-- 购物车不为空，显示商品数据 -->
		<div class="gq-cart-shops">
			<!-- 有效商品 -->
			<div class="gq-cart-shops-valid">
				<!-- 一家店铺的商品 -->
				<div class="gq-cart-shops-valid-store">
					<div class="gq-cart-shops-valid-store_name">
						<span
            @click="toggleCheckedById"
            :class="['circle']"
            ></span>
            <font>翰代维旗舰店</font>
            <i class="gq-icon">&#xe61a;</i>
            <i>确定</i>
					</div>
          <ul class="gq-cart-shops-valid-store-shoplist">
            <li class="gq-cart-shops-valid-store-shoplist-item">
              <div class="gq-cart-shops-valid-store-shoplist-item_checkbox">
                <span
                  @click="toggleCheckedByStore"
                  :class="['circle']"
                  ></span>
              </div>
              <div class="gq-cart-shops-valid-store-shoplist-item_img">
                <img src="https://s11.mogucdn.com/mlcdn/c45406/190619_392k5j0ehac9hh7j228kiaidd91b8_640x960.jpg_220x330.webp">
              </div>
              <div class="gq-cart-shops-valid-store-shoplist-item_info">
                <h5>翰代维超火裤子女夏季2019新品赛车哈伦裤撞色拼接束脚休闲裤</h5>
                <p>颜色：83K006白色；尺码：M；</p>
                <div class="gq-cart-shops-valid-store-shoplist-item_info_params">
                  <span>￥88.00</span>
                  <span>￥126.00</span>
                  <font>x2</font>
                </div>
              </div>

              <div class="gq-cart-shops-valid-store-shoplist-item_sele">
              	<div class="gq-cart-shops-valid-store-shoplist-item_sele_num">
                	<span>-</span>
                	<font>1</font>
                	<span>+</span>
                </div>
                <div class="gq-cart-shops-valid-store-shoplist-item_sele_params">
                	<span>颜色：83K006白色；尺码：M；</span>
                	<i class="gq-icon">&#xe6b4;</i>
                </div>
              </div>
            </li>
          </ul>
				</div>
			</div>

		</div>

		<!-- 购物车为空时，显示空 -->
		<div class="gq-cart-footer">
			<label class="gq-cart-footer_check">
				<input type="checkbox" name="">
				<span
        @click="toggleAllChecked"
        :class="['circle', allCheck ? 'checked': '']"
        ></span>
				<font>全选(0)</font>
			</label>
			<div class="gq-cart-footer_tittleprice">￥99.99</div>
			<a href="javascript:;" class="gq-cart-footer_btn">去结算</a>
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
				cartList: []
			}
		},
    computed: {
      ...mapState([
        'allCheck'
      ])
    },
		components: {
			HdTitle
		},
    methods: {
      ...mapMutations([
          'toggleAllChecked',
          'toggleCheckedById',
          'toggleCheckedByStore'
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
		&-shops{
			flex: 1;
			overflow: auto;
			background-color: #f1f1f1;
			&-valid{
				overflow: hidden;
				&-store{
					margin-top: 15px;
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
								display: none;
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
				width: 100px;
				height: 34px;
				line-height: 34px;
				text-align: center;
				border-radius: 5px;
				text-decoration: none;
				letter-spacing: 1px;
				color: #fff;
				background-color: #ff5777;
			}
		}
	}
</style>
