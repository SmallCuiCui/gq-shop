<template>
  <div class="gq-mine">
  	<div class="gq-mine-wrap">
  		<div class="gq-mine-wrap-user">
  			<div class="gq-mine-wrap-user_box">
  				<div class="gq-mine-wrap-user_box_img">
	  				<img src="http://s3.mogucdn.com/b7/avatar/140930/1dhz5m_ieydmmdfgu3wgyrzmmytambqgiyde_50x50.jpg_160x160.jpg">
	  			</div>
	  			<div class="gq-mine-wrap-user_box_username">小烟雨小</div>
	  			<div class="gq-mine-wrap-user_box_btn">
	  				<i class="gq-icon">&#xe631;</i>
	  				<span>个人主页</span>
	  			</div>
  			</div>
  		</div>
  	</div>

  	<div class="gq-mine-section">
  		<ul class="gq-mine-section_ul">
  			<router-link
	  			to="/chat"
	  			tag="li"
	  			class="gq-mine-section_ul_li"
  			>
  				<i class="gq-icon">&#xe629;</i>
  				<span>消息</span>
  				<font><i class="gq-icon">&#xe608;</i></font>
  			</router-link>
  			<li class="gq-mine-section_ul_li">
  				<i class="gq-icon">&#xe6b3;</i>
  				<span>收藏</span>
  				<font><i class="gq-icon">&#xe608;</i></font>
  			</li>
  		</ul>

  		<ul class="gq-mine-section_ul">
  			<router-link
	  			to="/cart"
	  			tag="li"
	  			class="gq-mine-section_ul_li"
  			>
  				<i class="gq-icon">&#xe601;</i>
  				<span>购物车</span>
  				<font>{{cartCmdNum}}<i class="gq-icon">&#xe608;</i></font>
  			</router-link>
  			<li class="gq-mine-section_ul_li">
  				<i class="gq-icon">&#xe600;</i>
  				<span>我的订单</span>
  				<font><i class="gq-icon">&#xe608;</i></font>
  			</li>
  			<li class="gq-mine-section_ul_li">
  				<i class="gq-icon">&#xe62a;</i>
  				<span>卡券红包</span>
  				<font><i class="gq-icon">&#xe608;</i></font>
  			</li>
  		</ul>

  		<ul class="gq-mine-section_ul">
  			<li class="gq-mine-section_ul_li">
  				<i class="gq-icon">&#xe65e;</i>
  				<span>蘑菇金融</span>
  				<font><i class="gq-icon">&#xe608;</i></font>
  			</li>
  			<li class="gq-mine-section_ul_li">
  				<i class="gq-icon">&#xe602;</i>
  				<span>收获地址</span>
  				<font><i class="gq-icon">&#xe608;</i></font>
  			</li>
  			<li class="gq-mine-section_ul_li">
  				<i class="gq-icon">&#xe61d;</i>
  				<span>客服</span>
  				<font><i class="gq-icon">&#xe608;</i></font>
  			</li>
  		</ul>

  		<div @click="logout" class="gq-mine-section_logout">
	  		<span>退出登录</span>
	  	</div>
  	</div>

  	
  </div>
</template>

<script>
	import { mapGetters, mapMutations } from 'vuex'
export default {
	computed: {
		...mapGetters(['cartCmdNum'])
	},
	methods: {
		...mapMutations(['toggleUserInfo']),
		logout () {
			this.toggleUserInfo({})
			const instance = this.$toast('退出登录成功');
			setTimeout(function(args) {
				// this.$router.push('/home')
				instance.close()
			},500)
			this.$router.push('/home')
		}
	}
}
</script>

<style lang="scss">
.gq-mine{
	height: 100%;
	display: flex;
	flex-direction: column;
	&-wrap{
		width: 100%;
		height: 0;
		padding-top: 197 / 375 * 100%;
		position: relative;
		background: #fff url(https://s10.mogucdn.com/mlcdn/c45406/180927_1ai9125115h4hh7k5dc3cej6j782a_750x342.png) 0 0 no-repeat;
		background-size: 100% 70%;
		&-user{
			width: 90%;
			height: 110px;
			margin: 5%;
			position: absolute;
			border-radius: 5px;
			bottom: 0;
			box-shadow: 0 5px 5px rgba(0, 0, 0, .06);
			background-color: #fff;
			&_box{
				margin: 0 auto;
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				&_img{
					width: 65px;
					height: 65px;
					margin-top: -30px;
					border-radius: 50%;
					overflow: hidden;
					img{
						height: 100%;
						width: 100%;
					}
				}
				&_username{
					height: 20px;
					line-height: 20px;
					margin: 10px 0;
					text-align: center;
					color: #5e5e5e;
					font: 15px Arial;
					font-weight: 700;
				}
				&_btn{
					width: auto;
					padding: 0 10px;
					height: 22px;
					text-align: center;
					line-height: 22px;
					display: flex;
					font-size: 12px;
					color: #5e5e5e;
					border-radius: 12px;
					border: 1px solid #d2d2d2;
					i{
						margin-right: 3px;
					}
				}
			}
		}
	}
	&-section{
		background-color: #f6f6f6;
		flex: 1;
		overflow: auto;
		&_ul{
			padding: 0 20px;
			background-color: #fff;
			margin-bottom: 10px;
			&_li{
				height: 55px;
				line-height: 55px;
				font-size: 15px;
				color: #333;
				border-bottom: 1px solid #eee;
				&:last-child{
					border: none;
				}
				>i{
					margin-right: 15px;
					font-size: 18px;
					color: #f46;
				}
				font{
					float: right;
					color: #999;
					font-size: 13px;
					i{
						font-size: 15px;
						margin-left: 8px;
					}
				}
			}
		}
		&_logout{
			width: 85%;
			height: 40px;
			line-height: 40px;
			color: #fff;
			background-color: #ff5777;
			text-align: center;
			margin: 15px auto;
			border-radius: 3px;
		}
	}

}

</style>
