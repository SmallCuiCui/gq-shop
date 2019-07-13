import {
	ADD_CART_BY_ID,
	INCREMENT_BY_ID,
	DECREMENT_BY_ID,
	TOGGLE_CHECKED_BY_ID,
	TOGGLE_ALL_CHECKED,
	TOGGLE_CHECKED_BY_STORE,
	TOGGLE_HAS_ADD_CART,
	TOGGLE_USERINFO
} from './mutationTypes'

// mutation中除了进行state的修改，不处理过多的其他逻辑
export default {
	// 添加购物车
	[ ADD_CART_BY_ID ] (state, obj) {
		let isExist = state.cartList.some(item => item.id === obj.id)
		if(isExist){
			state.cartList = state.cartList.map(item => {
				if (item.id === obj.id) {
					item.num += obj.num
				}
				return item
			})
		} else {
			state.cartList.push(obj)
		}
	},
	[ INCREMENT_BY_ID ] (state) {

	},
	[ DECREMENT_BY_ID ] (state) {

	},
	[ TOGGLE_CHECKED_BY_ID ] (state) {

	},
	[ TOGGLE_CHECKED_BY_STORE ] (state) {

	},
	[ TOGGLE_ALL_CHECKED ] (state) {
		state.allCheck = !state.allCheck
	},
	// 根据路由mate信息hasAddCart判断商品展示组件是否存在添加购物车按钮
	[ TOGGLE_HAS_ADD_CART ] (state, hasAddCart = false) {
		state.hasAddCart = hasAddCart
	},
	[ TOGGLE_USERINFO ] (state, userInfo) {
		state.userInfo = userInfo
	}
}