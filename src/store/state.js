export default {
	cartList: JSON.parse(window.localStorage.getItem('cartList')) || [],
	userInfo: JSON.parse(window.localStorage.getItem('userInfo')) || {},
	hasAddCart: false,
	allCheck: false,
	headerTitle: '蘑菇街'
}