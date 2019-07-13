<template>
	<div class="gq-navs">
		<div class="gq-navs_link" v-show="!showNav" @click="toggleShow">
			<p>快捷<br/>导航</p>
		</div>
		<my-popup
    	v-model="showNav"
    	position="bottom"
    	class="mypop"
    >
    	<div class="gq-navs-popup">
    		<p>
    			<i @click="toggleShow" class="gq-icon">&#xe673;</i>
    		</p>
    		<ul class="gq-navs-popup_items">
	    		<li class="gq-navs-popup_items_li">
	    			<p class="gq-navs-popup_items_li_p">首页</p>
	    			<div class="gq-navs-popup_items_li_icon"><router-link
	    				tag="i"
	    				to="/"
	    				class="gq-icon">&#xe604;</router-link></div>
	    		</li>
	    		<li class="gq-navs-popup_items_li">
	    			<p class="gq-navs-popup_items_li_p">购物车</p>
	    			<div class="gq-navs-popup_items_li_icon"><router-link
	    				tag="i"
	    				to="/cart"
	    				class="gq-icon">&#xe601;</router-link></div>
	    		</li>
	    		<li class="gq-navs-popup_items_li">
	    			<p class="gq-navs-popup_items_li_p">搜索</p>
	    			<div class="gq-navs-popup_items_li_icon"><router-link
	    				tag="i"
	    				to="/search"
	    				class="gq-icon">&#xe61c;</router-link></div>
	    		</li>
	    		<li class="gq-navs-popup_items_li">
	    			<p class="gq-navs-popup_items_li_p">查订单</p>
	    			<div class="gq-navs-popup_items_li_icon"><router-link
	    				tag="i"
	    				to="/"
	    				class="gq-icon">&#xe638;</router-link></div>
	    		</li>
	    	</ul>
    	</div>
    </my-popup>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				showNav: false
			}
		},
		methods: {
			toggleShow () {
				this.showNav = !this.showNav
			}
		}
	}
</script>

<style lang="scss">
.gq-navs{
	.mint-popup-bottom{
		right: -170px;
		bottom: 60px;
		background-color: rgba(0, 0, 0, 0);
	}
	&_link, &-popup{
		position: fixed;
		right: 10px;
		bottom: 60px;
		width: 50px;
		height: 50px;
		text-align: center;
		border-radius: 50%;
		color: #fff;
		font-size: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(0, 0, 0, .7);
		>p{
			letter-spacing: 1px;
			line-height: 16px;
		}
	}
	&-popup{
		right: 0;
		bottom: 0;
		&_items{
			position: absolute;
			top: -200px;
			right: 0;
			&_li{
				height: 40px;
				margin-bottom: 10px;
				margin-right: 5px;
				display: flex;
				&_p{
					width: 63px;
					text-align: center;
					height: 40px;
					line-height: 40px;
					color: #fff;
					font-size: 14px;
				}
				&_icon{
					width: 40px;
					height: 40px;
					line-height: 40px;
					text-align: center;
					border-radius: 50%;
					background-color: #fff;
					font-size: 20px;
					i{
						color: #5e5e5e;
					}
				}
			}
		}
	}
	
}
</style>