<template>
  <div class="gq-unlogin">
  	<h1 class="gq-unlogin_title">登录</h1>
  	<div class="gq-unlogin_loginBtn">
  		<i class="gq-icon">&#xe64a;</i>
  		<router-link :to="{name:'login', query:{title: '登录'}}" tag="span">账户登录</router-link>
  	</div>
  	<div class="gq-unlogin_line"></div>
  	<div class="gq-unlogin-otherWay">
  		<p class="gq-unlogin-otherWay_p">其他登录方式</p>
  		<ul class="gq-unlogin-otherWay_wrap">
  			<li class="gq-unlogin-otherWay_wrap_item">
  				<div class="gq-unlogin-otherWay_wrap_item_icon"><i class="gq-icon">&#xe68b;</i></div>
  				<router-link to="/login" tag="span">QQ登录</router-link>
  			</li>
  			<li class="gq-unlogin-otherWay_wrap_item">
  				<div class="gq-unlogin-otherWay_wrap_item_icon"><i class="gq-icon">&#xe607;</i></div>
  				<router-link to="/login" tag="span">微信登录</router-link>
  			</li>
  			<li class="gq-unlogin-otherWay_wrap_item">
  				<div class="gq-unlogin-otherWay_wrap_item_icon"><i class="gq-icon">&#xe650;</i></div>
  				<router-link to="/login" tag="span">手机登录</router-link>
  			</li>
  		</ul>
  	</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
	.gq-unlogin{
		padding: 25px 30px;
		&_title{
			margin: 50px;
			height: 42px;
			line-height: 42px;
			font-size: 28px;
			text-align: center;
		}
		&_loginBtn{
			height: 50px;
			border-radius: 25px;
			line-height: 50px;
			color: #fff;
			background-color: rgb(9, 187, 7);
			font-size: 18px;
			display: flex;
			justify-content: center;
			i{
				margin-right: 16px;
			}
		}
		&_line{
			width: 20px;
			height: 1px;
			margin: 0 auto;
			margin-top: 75px;
			border-top: 1px solid #999;
		}
		&-otherWay{
			&_p{
				margin-top: 40px;
				margin-bottom: 15px;
				height: 22px;
				line-height: 22px;
				text-align: center;
				color: #999;
				font-size: 15px;
			}
			&_wrap{
				padding: 25px 0;
				display: flex;
				justify-content: space-around;
				&_item{
					display: flex;
					height: 72px;
					color: #5e5e5e;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					font-size: 14px;
					&_icon{
						height: 44px;
						width: 44px;
						font-size: 20px;
						text-align: center;
						line-height: 44px;
						border-radius: 50%;
						border: 1px solid #999;
					}
				}
			}
		}
	}
</style>
