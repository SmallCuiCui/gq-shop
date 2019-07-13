
import GqFooter from '@/components/GqFooter'
import GqHeader from '@/components/GqHeader'
import CateList from '@/components/CateList'



const Home = () => import('@/views/Home')
const Shop = () => import('@/views/Shop')
const Live = () => import('@/views/Live')
const Mine = () => import('@/views/Mine')
const UnLogin = () => import('@/views/UnLogin')
const Login = () => import('@/views/Login')
const Search = () => import('@/views/Search')
const Chat = () => import('@/views/Chat')
const ProList = () => import('@/views/ProList')
const Detail = () => import('@/views/Detail')
const ListDetail = () => import('@/views/ListDetail')
const Cart = () => import('@/views/Cart')

export default [
  {
    path: '/',
    redirect: '/home',
    meta: {}
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default: Home,
      header: GqHeader,
      footer: GqFooter
    },
    meta: {
      isTablrBar: true,
      title: '首页'
    }
  },
  {
    path: '/shop',
    name: 'shop',
    components: {
      default: Shop,
      header: GqHeader,
      footer: GqFooter
    },
    meta: {
      isTablrBar: true,
      title: '商城',
      hasAddCart: true
    }
  },
  {
    path: '/live',
    name: 'live',
    components: {
      default: Live,
      footer: GqFooter
    },
    meta: {
      isTablrBar: true,
      title: '直播'
    }
  },
  {
    path: '/mine',
    name: 'mine',
    components: {
      default: Mine,
      footer: GqFooter
    },
    meta: {
      isTablrBar: true,
      title: '我',
      isAuthRequired: true
    }
  },
  {
    path: '/unlogin',
    name: 'unlogin',
    components: {
      default: UnLogin
    },
    meta: {}
  },
  {
    path: '/login',
    name: 'login',
    components: {
      default: Login
    },
    meta: {}
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default: Cart
    },
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
    meta: {}
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat,
    meta: {}
  },
  {
    path: '/list',
    name: 'list',
    components: {
      default: ProList,
      header: GqHeader
    },
    children: [
      {
        path: ':cateId',
        name: 'cataname',
        component: CateList
      }
    ],
    meta: {
      hasAddCart: true
    }
  },
  {
    path: '/listdtail',
    name: 'listdtail',
    components: {
      default: ListDetail
    },
    meta: {
      hasAddCart: false
    }
  },
  {
    path: '/detail',
    name: 'detail',
    components: {
      default: Detail
    },
    meta: {}
  }
]
