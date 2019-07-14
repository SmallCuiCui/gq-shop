export default {
	// 购物车商品按照店铺分类存放
	cartList: JSON.parse(window.localStorage.getItem('cartList')) || [],
	userInfo: JSON.parse(window.localStorage.getItem('userInfo')) || {},
	hasAddCart: false,
	headerTitle: '蘑菇街'
}