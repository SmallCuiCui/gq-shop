import axios from 'axios'
import { Indicator } from 'mint-ui'

const ajax = axios.create()

// 拦截器
ajax.interceptors.request.use(config => {
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })
  return config
})

ajax.interceptors.response.use(resp => {
  Indicator.close()
  if (resp.status === 200) {
    return resp.data
  } else {
    return resp
  }
})

// 获取搜索区的热搜词
export const getHotSearch = () => ajax.get('/module/mget?code=sketch%2ChotWord')

// 获取首页的轮播图
export const getBanner = () => ajax.get('/jsonp/multiget/3?appPlat=m&pids=136556')
// 获取商品分类的一级分类
export const getList = () => ajax.get('/jsonp/multiget/3?appPlat=m&pids=117330')
// 获取商品一级分类下的二级分类
export const getListData = (id) => ajax.get(`/jsonp/get/3?pid=${id}`)
// 获取某一个分类下面的商品数据
export const getShopList = (obj) => ajax.get(`/search?_version=8253&ratio=3%3A4&cKey=16&sort=${obj.sort}&page=${obj.page}&q=${obj.q}&offset=${obj.offset}&ad=0&fcid=${obj.fcid}&action=shopping&title=${obj.title}&acm=${obj.acm}&minPrice=${obj.minPrice}&maxPrice=${obj.maxPrice}`)

export const getDetail = () => ajax.get(`http://rap2api.taobao.org/app/mock/224117/detail-info`)

// 请求登录接口
export const postLogin = ({ username, password }) => ajax.post('http://rap2api.taobao.org/app/mock/166390/user', { username, password })
