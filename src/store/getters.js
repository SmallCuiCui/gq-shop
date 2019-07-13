export default {
	allCheck (state) {
		return true
	},
	isLogin (state) {
		// 是否登录是根据 用户的信息来确定
		return !!state.userInfo.tocken
	}
}