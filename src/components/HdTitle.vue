<template>
	<div class="gq-header">
		<div class="gq-header-wrap">
			<i class="gq-icon gq-header-wrap-icon" @click="goback">&#xe603;</i>
			<h1 class="gq-header-wrap-title">{{title}}<span>{{showNum}}</span></h1>
			<router-link
			tag="i"
			to="/cart"
			v-show="hasCart"
			class="gq-icon gq-header-wrap-icon">&#xe601;</router-link>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		data () {
			return {
				iscart: true
			}
		},
		props: ['title', 'hasCart'],
		computed: {
			...mapGetters(['cartCmdNum']),
			showNum () {
				if (!(this.$route.path === '/cart')) {
					return ''
				} else {
					return '(' + this.cartCmdNum +')'
				}
			}
		},
		methods: {
			goback () {
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang='scss' scoped>
$baseColor: rgb(102, 102, 102);
$activeColor: rgb(255, 87, 119);
.gq-header{
	width: 100%;
	height: 0;
	padding-top: 12%;
	position: relative;
	border-bottom: 1px solid #eee;
	background-color: #fff;
	&-wrap{
		position: absolute;
		top: 7px;
		left: 0;
		height: 30px;
		width: 100%;
		display: flex;
		justify-content: space-around;
		text-align: center;
		align-items: center;
		&-icon{
			font-size: 20px;
			color: $baseColor;
			width: 50px;
		}
		&-title{
			height: 30px;
			line-height: 30px;
			text-align: center;
			font-size: 18px;
			font-family: Arail;
			color: #5e5e5e;
			font-weight: 400;
			flex: 1;
		}
	}
}
</style>
