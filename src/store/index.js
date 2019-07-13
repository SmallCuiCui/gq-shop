import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
	// 开发状态下使用严格模式
	strict: process.env.NODE_ENV === 'development',
	state,
	mutations,
	getters,
	actions
})

// 订阅所有的mutation,只要存在提交就触发
store.subscribe((mutation, state) => {
	// 购物车数据存在变化时更新localstorage的数据
	window.localStorage.setItem('cartList',JSON.stringify(state.cartList))
})

store.subscribe((mutation, state) => {
	// 存在修改用户信息的订阅，则更新localStorage
	if (mutation.type === 'toggleUserInfo') {
		window.localStorage.setItem('userInfo',JSON.stringify(state.userInfo))
	}
})
export default store