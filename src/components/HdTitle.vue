<template>
	<div class="gq-header">
		<div class="gq-header-wrap">
			<router-link
			tag="i"
			to="/list"
			class="gq-icon gq-header-wrap-icon"
			@click="goback"
			>&#xe603;</router-link>
			<h1 class="gq-header-wrap-title">{{title}}</h1>
			<router-link
			tag="i"
			to="/cart"
			v-show="hasCart"
			class="gq-icon gq-header-wrap-icon">&#xe601;</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
			}
		},
		props: ['title', 'hasCart'],
		created () {
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
		top: 10px;
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
			// font-weight: 600;
			flex: 1;
		}
	}
}
</style>
