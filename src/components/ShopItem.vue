<template>
	<router-link
	tag="div"
	:to="{name:'detail',params:{id:5, acm: acm}}"
	class="gq-listDetail-shopWrap-item"
	>
		<div class="gq-listDetail-shopWrap-item_img">
			<img :src="img">
		</div>
		<h4 class="gq-listDetail-shopWrap-item_text">
			<!-- <span class="gq-listDetail-shopWrap-item_text_hot">热卖</span> -->
			<span>品质】</span>
			{{title}}
		</h4>
		<div class="gq-listDetail-shopWrap-item_price">
			<span>￥{{price}}</span>
			<p>{{cfav}}
				<i class="gq-icon">&#xe61b;</i>
			</p>
		</div>
		<div
			v-if="hasAddCart"
			class="gq-listDetail-shopWrap-item_btn"
		>立即购买</div>
	</router-link>
</template>

<script>
import {
	mapState
}from 'vuex'
export default {
	data () {
		return {
			// hasCart: true
		}
	},
	computed: {
		...mapState(['hasAddCart'])
	},
	props: ['acm', 'img','title', 'price', 'cfav']
}
</script>

<style lang="scss">
	.gq-listDetail-shopWrap{
		&-item{
			width: 47%;
			background-color: #fff;
			margin-top: 8px;
			border-radius: 3px;

			&_img{
				overflow: hidden;
				width: 100%;
				height: 0;
				padding-top: 231/174 * 100%;
				position: relative;
				img{
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				}
			}

			&_text{
				font-size: 13px;
				line-height: 18px;
				height: 36px;
				overflow: hidden;
				text-overflow: ellipsis;
				margin: 6px 5px;
				text-align: justify;

				&_hot{
					color: white;
					background-color: #FF743C;
					margin-right: 3px;
					padding: 0 2px;
				}
			}

			&_price{
				display: flex;
				justify-content: space-between;
				margin: 5px 8px;
				span{
					font-weight: 600;
					font-size: 14px;
				}
				p{
					font-size: 12px;
					color: #999;
				}
			}
			&_btn{
				width: 94%;
				height: 25px;
				line-height: 25px;
				background-color: rgb(255, 87, 119);
				color: #fff;
				text-align: center;
				font-size: 14px;
				border-radius: 3px;
				margin: 5px auto;
			}
		}
	}
</style>
