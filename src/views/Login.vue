<template>
  <div class="gq-login">
  	<HdTitle :title="'登录'" :hasCart="false"></HdTitle>
  	<div class="gq-login-wrap">
  		<div class="gq-login-wrap_user">
  			<input type="text" v-model="username" placeholder="用户名/邮箱/手机号">
  		</div>
  		<div class="gq-login-wrap_user">
  			<input type="text" v-model="password" placeholder="密码">
  		</div>
  		<div class="gq-login-wrap_btn" @click="doLogin">登录</div>
  		<p class="gq-login-wrap_p">忘记密码</p>
  	</div>
  </div>
</template>

<script>
	import HdTitle from '@/components/HdTitle'
	import {
		mapGetters,
		mapActions
	} from 'vuex'
	export default {
		data () {
			return {
				username: '',
				password: ''
			}
		},
		computed: {
			...mapGetters(['isLogin'])
		},
		components: {
			HdTitle
		},
		methods: {
			...mapActions(['login']),
			doLogin () {
				if (!this.username || !this.password) {
					let instance = this.$toast('请输入登录信息');
					setTimeout(()=>{
						instance.close()
					},800)
				} else {
					this.login({
						username: this.username,
						password: this.password
					})
				}
			}
		},
		watch: {
			isLogin (value) {
				// 检测登录状态，如果登录成功则跳转回购物车页面/或者个人主页
				if (value) {
					let instance = this.$toast('登录成功！跳转至首页');
					setTimeout(() => {
						instance.close()
						const { from } = this.$route.params
						if (from) {
							// 说明是从需要进行登录验证的界面强制跳转过来，则返回该页面
							this.$router.push(from)
						} else {
							// 正常跳转，直接沿着历史记录跳转
							// 还是返回首页吧
							this.$router.push('/')
						}
					},1000)
				} 
			}
		}
	}
</script>

<style lang="scss">
.gq-login{
	&-wrap{
		padding: 50px 25px;
		&_user{
			height: 30px;
			padding: 10px 0;
			border-bottom: 1px solid #999;
			input{
				border: none;
				height: 100%;
				padding-left: 10px;
				font-size: 16px;
			}
		}
		&_btn{
			margin-top: 50px;
			height: 50px;
			width: 100%;
			text-align: center;
			line-height: 50px;
			border-radius: 25px;
			color: #fff;
			font-size: 16px;
			background-color: #FF5777;
		}
		&_p{
			margin-top: 20px;
			text-align: right;
			color: #999;
			font-size: 14px;
		}
	}
}
</style>
