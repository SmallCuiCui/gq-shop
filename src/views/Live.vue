<template>
	<div class="gq-live">
		<!-- 直播顶部分类 -->
		<div class="gq-live-header">
			<ul>
				<li :class="{'active': select === 'hot'}" @click="select='hot'">热门</li>
        <li :class="{'active': select === 'order'}" @click="select='order'">关注</li>
        <li :class="{'active': select === 'clothes'}" @click="select='clothes'">穿搭</li>
        <li :class="{'active': select === 'makeup'}" @click="select='makeup'">美妆</li>
			</ul>
		</div>
		<!-- 直播展示 -->
		<div class="gq-live-section">
			<div
			v-for="item in liveData"
			:key="item.roomId"
			
			class="gq-live-section-item">
				<div class="gq-live-section-item-actor">
					<div class="gq-live-section-item-actor-img">
						<img :src="item.avatar">
					</div>
					<div class="gq-live-section-item-actor-idname">{{item.userName}}</div>
				</div>

				<div
				:style="{backgroundImage:'url(' + item.bgImg + ')'}"
				class="gq-live-section-item-main">
					<!-- 左边直播信息 -->
					<div class="gq-live-section-item-main-info">
						<div class="gq-live-section-item-main-info_tag">
							<font class="gq-live-section-item-main-info_tag_dot"></font>
							<span>直播中</span>
							<div class="gq-live-section-item-main-info_tag_num"><span>&#xe677;</span>{{item.visitorCount}}人观看</div>
						</div>
						<p class="gq-live-section-item-main-info_title">{{item.intro}}</p>
						<div class="gq-live-section-item-main-info_imgs">
							<div
							v-for="goods in item.shopCarts.goods"
							:key="goods.itemId"
							:style="{backgroundImage:'url(' + goods.cover + ')'}"
							class="gq-live-section-item-main-info_imgs_item">
								<span>￥{{goods.price}}</span>
							</div>
						</div>
					</div>
					<!-- 直播评论 -->
					<ul class="gq-live-section-item-main-comments">
						<li
						v-for="comment in item.comments"
						:key="comment.commentId"
						class="gq-live-section-item-main-comments_item">
							<div class="gq-live-section-item-main-comments_item_img"><img :src="comment.avatar"></div>
							<div class="gq-live-section-item-main-comments_item_text">{{comment.content}}</div>
						</li>
					</ul>
				</div>

			</div>
		</div>

		<div class="gq-live-order" v-show="!showLive">
      <div class="gq-live-order_bgImg"></div>
      <p>宝宝还没有关注的主播开播哦！</p>
    </div>
	</div>
</template>

<script>
	import liveData from '@/static/live'
	export default {
		data () {
			return {
				select: 'hot'
			}
		},
	  computed: {
	    showLive () {
	      if (this.select === 'order') {
	        return false
	      } else {
	        return true
	      }
	    }
	  },
		created () {
			this.liveData = liveData
			console.log(this.liveData)
		}
	}
</script>

<style lang="scss">
.gq-live{
	background-color: #fff;
	height: 100%;
	display: flex;
	flex-direction: column;
	&-header{
		height: 46px;
		ul{
			display: flex;
			justify-content: space-around;
			height: 45px;
			width: 100%;
			border-bottom: 1px solid #ececec;

			li{
				line-height: 45px;
				text-align: center;
				font-size: 15px;
				width: 13%;
				&.active{
					color: #ff5777;
					border-bottom: 2px solid #ff5777;
				}
			}
		}
	}
	&-section{
		overflow: auto;
		flex: 1;
		&-item{
			padding: 0 10px;
			&-actor{
				height: 42px;
				display: flex;
				padding-left: 10px;
				&-img{
					height: 42px;
					width: 42px;
					margin-top: 10px;
					background-color: #fff;
					border-radius: 50%;
					border: 1px solid #fff;
					overflow: hidden;
					img{
						width: 100%;
					}
				}
				&-idname{
					line-height: 52px;
					font-size: 12px;
					margin-left: 10px;
				}
			}
			&-main{
				height: 200px;
				width: 100%;
				border-radius: 5px;
				background-size: cover;
				&-info{
					float: left;
					margin-left: 10px;
					margin-top: 80px;
					&_tag{
						height: 20px;
						line-height: 20px;
						display: inline-block;
						border-radius: 2px;
						background-color: rgba(0, 0, 0, .4);
						color: #fff;
						font-size: 12px;
						&::after{
							content: '';
							clear: both;
						}
						&_dot{
							padding: 0 5px;
						}
						span{
							padding: 0 5px;
							border-right: 1px solid #fff;
						}
						&_num{
							float: right;
							padding: 0 5px;
						}
					}
					&_title{
						height: 23px;
						line-height: 23px;
						margin-top: 5px;
						color: white;
						font-size: 16px;
					}
					&_imgs{
						display: flex;
						height: 60px;
						&_item{
							width: 60px;
							height: 60px;
							margin-right: 5px;
							background-size: cover;
							span{
								color: white;
								float: left;
								width: 100%;
								height: 20px;
								padding-left: 5px;
								box-sizing: border-box;
								line-height: 20px;
								background: -webkit-gradient(linear, 0 0, 0 100%, from(rgba(0, 0, 0, .01)), to(rgba(0, 0, 0, .5)));
								// background-color: rgba(0, 0, 0, .1);
								margin-top: 40px;
								font-size: 12px;
							}
						}
					}
				}
				&-comments{
					float: right;
					margin-right: 10px;
					margin-top: 130px;
					&_item{
						width: 120px;
						height: 18px;
						margin-top: 3px;
						display: flex;
						align-items: center;
						&_img{
							width: 14px;
							height: 14px;
							border-radius: 50%;
							overflow: hidden;
							img{
								width: 100%;
								height: 100%;
							}
						}
						&_text{
							font-size: 12px;
							line-height: 18px;
							flex: 1;
							margin-left: 3px;
							letter-spacing: 1px;
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
							color: rgba(225,225,225,.9);
						}
					}
				}
			}
		}
	}
	&-order{
    height: 100%;
    background: #f5f5f5;
    &_bgImg{
      height: 70px;
      width: 40%;
      margin: 50px auto;
      margin-bottom: 15px;
      background-image: url("https://s10.mogucdn.com/p2/161213/upload_682e8fg28d8lk27b9l95jecghd4jl_514x260.png");
      background-repeat:no-repeat;
      background-size: auto 100%;
    }
    p{
      font-size: 15px;
      color: rgb(102, 102, 102);
      text-align: center;
    }
  }
}
</style>
