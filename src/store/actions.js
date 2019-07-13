import { postLogin } from '@/request'
export default {
	// 登录操作，保存用户信息
	login (context, { username, password }) {
		// console.log(username, password)
		postLogin({ username, password }).then(resp => {
			if (resp.res_code === 200) {
				const { username, id, tocken, image} = resp.res_body.userInfo
				context.commit('toggleUserInfo',{ username, id, tocken, image })
			}
		})

	}
}