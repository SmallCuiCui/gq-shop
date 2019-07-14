import {
	ADD_CART_BY_ID,
	EDIT_NUM_BY_ID,
	TOGGLE_CHECKED_BY_ID,
	TOGGLE_CHECKED_BY_SHOP,
	TOGGLE_ALL_CHECKED,
	TOGGLE_SHOP_EDIT_BY_SHOP_ID,
	DEL_CHECKED_SHOP,
	TOGGLE_HAS_ADD_CART,
	TOGGLE_USERINFO
} from './mutationTypes'

// mutation中除了进行state的修改，不处理过多的其他逻辑
export default {
	// 添加购物车
	[ ADD_CART_BY_ID ] (state, obj) {
		// 首先判断商品店铺id是否存在，再根据商品id判断是否存在该商品
		// 存在该店铺的记录
		let shopIsExist = state.cartList.some(shopItem => shopItem.shopId === obj.shopId)
		if (shopIsExist) {
			state.cartList = state.cartList.map(shopItem => {
				// 找到该店铺
				if (shopItem.shopId === obj.shopId) {
					// 判断店铺下是否存在该商品
					let cmdIsExist = shopItem.shopList.some(item => item.id === obj.id)
					// 店铺存在该商品
					if (cmdIsExist) {
						console.log(1)
						shopItem.shopList = shopItem.shopList.map(item => {
							if (item.id === obj.id) {
								item.num += obj.num
							}
							return item
						})
					} else {
						// 店铺不存在该商品，新添进的商品默认为未选中状态，所以该店铺选中状态需手动改为未选中
						shopItem.shopChecked = false
						shopItem.shopList.push(obj)
					}
				}
				return shopItem
			})
		} else {
			// 新建一个店铺对象
			let shopObj = {
				shopId: obj.shopId,
				shopName: obj.shopName,
				shopChecked: false,
				shopEdit: false,
				// 保存该店铺商品的列表
				shopList: []
			}
			shopObj.shopList.push(obj)
			state.cartList.push(shopObj)
		}
	},
	// 修改商品数量
	[ EDIT_NUM_BY_ID ] (state, {shopId, id, num}) {
		state.cartList = state.cartList.map(shopItem => {
			if (shopItem.shopId === shopId) {
				shopItem.shopList = shopItem.shopList.map(item => {
					if (item.id === id) {
						item.num += num
						if (item.num < 1) item.num = 1
					}
					return item
				})
			}
			return shopItem
		})
	},
	[ TOGGLE_CHECKED_BY_ID ] (state, {shopId, id}) {
		state.cartList = state.cartList.map(shopItem => {
			if (shopItem.shopId === shopId) {
				// 商品选中状态更改时可能影响店铺的选中状态，因此需要同时对店铺的选中状态进行处理
				let shopCheckedNum = 0
				shopItem.shopList = shopItem.shopList.map(item => {
					if (item.id === id) {
						item.checked = !item.checked
					}
					if (item.checked) shopCheckedNum ++
					return item
				})
				shopItem.shopChecked = shopCheckedNum === shopItem.shopList.length
			}
			return shopItem
		})
	},
	
	[ TOGGLE_CHECKED_BY_SHOP ] (state, shopId) {
		state.cartList = state.cartList.map(shopItem => {
			if (shopItem.shopId === shopId) {
				shopItem.shopChecked = !shopItem.shopChecked
				shopItem.shopList = shopItem.shopList.map(item => {
					item.checked = shopItem.shopChecked
					return item
				})
			}
			return shopItem
		})
	},
	[ TOGGLE_ALL_CHECKED ] (state, allCheck) {
		state.cartList = state.cartList.map(shopItem => {
			shopItem.shopChecked = allCheck
			shopItem.shopList = shopItem.shopList.map(item => {
				item.checked = allCheck
				return item
			})
			return shopItem
		})
	},
	// 更改店铺编辑状态，参数：编辑状态，店铺id
	[ TOGGLE_SHOP_EDIT_BY_SHOP_ID ] (state, {boolType, shopId}) {
		state.cartList = state.cartList.map(shopItem => {
			if (shopItem.shopId === shopId) {
				shopItem.shopEdit = boolType
			}
			return shopItem
		})
	},
	[ DEL_CHECKED_SHOP ] (state) {
		state.cartList = state.cartList.filter(shopItem => {
			if (shopItem.shopChecked) {
				// 店铺选中，则直接全部删除该店铺的记录
				return false
			} else {
				// 单独删除选中商品
				shopItem.shopList = shopItem.shopList.filter(item => {
					return !item.checked
				})
				return true
			}
		})
	},
	// 根据路由mate信息hasAddCart判断商品展示组件是否存在添加购物车按钮
	[ TOGGLE_HAS_ADD_CART ] (state, hasAddCart = false) {
		state.hasAddCart = hasAddCart
	},
	[ TOGGLE_USERINFO ] (state, userInfo) {
		state.userInfo = userInfo
	}
}