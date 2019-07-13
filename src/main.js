import Vue from 'vue'
import App from './App.vue'
// 引入index.js
import router from '@/router'
// 引入请求模块
import * as ajax from '@/request'

import store from '@/store'
import { BackTop } from '@/components'
import Navs from '@/components/Navs'
import { Popup } from 'mint-ui';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'


Vue.component('Navs', Navs)

Vue.use(BackTop)
Vue.use(Mint)
Vue.component('my-popup', Popup);
Vue.prototype.$http = ajax

Vue.config.productionTip = false

const mixin = {
	methods: {
		goBack () {
	    this.$router.back()
	  }
	},
	filters: {
		tofix2 (value) {
			if (typeof value === 'number') {
				return value.toFixed(2)
			} else {
				value = Number(value)
				if (isNaN(value)) {
					return value
				} else {
					return value.toFixed(2)
				}
			}
		}
	}
}
Vue.mixin(mixin)

// 全局导航守卫
router.beforeEach((to, from, next) => {
	
	// 判断商品展示组件shopItem是否存在立即购买btn
	if (to.meta.hasAddCart === true) {
		store.commit('toggleHasAddCart', true)
	} else {
		store.commit('toggleHasAddCart')
	}

	// 判断是否登录，进入购物车以及进入个人页面需要进行登录验证
	if (to.meta.isAuthRequired === true) {
		// 需要进行登录验证
		console.log(store)
		if (store.getters.isLogin === true){
			// 已登录状态
			next()
		} else {
			// 未登录，跳转至登录页面
		const instance = Vue.$toast('请先进行登录');
		setTimeout(function(args) {
			instance.close()
		},800)

		next({
			// 强制跳转至未登录界面，并携带即将跳转到的界面路径，这样登录之后才能回到本来想要去的页面
			name:'unlogin',
			params: {
				from: to.path
			}
		})
		}
	} else {
		next()
	}

	
})

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')
