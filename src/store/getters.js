export default {
	allCheck (state) {
		// 判断店铺是否存在未选中的即可
		return !state.cartList.some(shopItem => {
			return shopItem.shopChecked === false
		})
	},
	// 存在编辑状态
	isEdit (state) {
		return state.cartList.some(shopItem => {
			return shopItem.shopEdit
		})
	},
	isLogin (state) {
		// 是否登录是根据 用户的信息来确定
		return !!state.userInfo.tocken
	},
	// 购物车是否为空
	isEmpty (state) {
		if (state.cartList.length === 0) {
  		return true
  	} else {
  		return false
  	}
	},
	// 购物车商品种类数量
	cartCmdNum (state) {
		return state.cartList.reduce((num,next) => {
			return num + next.shopList.length
		}, 0)
	},
	// 选中商品种类的数量，不是选中商品数量
	totalCheckedNum (state) {
		return state.cartList.reduce((numAll, nextShop) => {
			 numAll += nextShop.shopList.reduce((num, item) => {
				if (item.checked) num ++
				return num
			}, 0)
			 return numAll
		}, 0)
	},
	totalCheckedMoney (state) {
		return state.cartList.reduce((moneyAll, nextShop) => {
			 moneyAll += nextShop.shopList.reduce((money, item) => {
				if (item.checked) money += item.price * item.num
				return money
			}, 0)
			 return moneyAll
		}, 0)
	}
}