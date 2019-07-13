# gq-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 接口

#### 热搜

`https://list.mogu.com/module/mget?code=sketch%2ChotWord`

#### 轮播

`https://mce.mogucdn.com/jsonp/multiget/3?appPlat=m&pids=136556`

#### 分类列表数据

`https://mce.mogucdn.com/jsonp/multiget/3appPlat=m&pids=117330`

#### 各分类下数据

pid参数是不同分类的id

`https://mce.mogucdn.com/jsonp/get/3?pid=3627`

#### 某一类商品数据

参数title，acm。其中acm为商品分类代码

`https://list.mogu.com/search?_version=8253`

`&ratio=3%3A4`

`&cKey=16`

`&sort=pop`    综合 

`&page=1&ad=0`

`&fcid=20004428`

`&action=shopping`

`&title=%25E6%2596%25B0%25E5%2593%2581%25E9%2580%259F%25E9%2580%2592`

`&acm=3.mce.1_10_1l33o.3627.0.cNo7hrvklbQF9.pos_0-m_491870-sd_119-mf_70922_1043092-idx_0-mfs_24-dm1_5000`



1. acm: "3.mce.1_10_1ia3k.117330.0.gkhzcrvkNxln4.pos_0-m_426420-sd_119"
2. maitKey: "3627"
3. miniWallkey: "10062603"
4. title: "正在流行"



1. acm: "3.mce.1_10_1l33o.3627.0.azme8rvkLFH8e.pos_0-m_491870-sd_119"

2. image: "https://s10.mogucdn.com/mlcdn/c45406/190611_727ec070jeai4c91igb9k5kajf90e_120x120.png"

3. link: "//m.mogu.com/wall/book/shopping?

   fcid=20004428

   &title=%E6%96%B0%E5%93%81%E9%80%9F%E9%80%92

   &acm=3.mce.1_10_1l33o.3627.0.azme8rvkLFH8e.pos_0-m_491870-sd_119"

4. title: "新品速递"



https://list.mogu.com/search

_version=8253  //可固定，没什么影响

&ratio=3%3A4   //可固定，没什么影响

&cKey=16   //可固定，没什么影响

&sort=pop  //商品展示页面的综合，销量，新品分类参数----需要传递，本界面筛选时传递

&page=1   //鼠标滚动到底部时进行自增参数，然后根据参数请求数据

&ad=0   //可固定，没什么影响

&fcid=20004428   //此类商品的某个参数----需要传递

&action=shopping  //一级分类的商品类别，可不传

&title=新品速递   //上一级传递的参数

&acm=3.mce.1_10_1l33o.3627.0.azme8rvkLFH8e.pos_0-m_491870-sd_119-mf_70922_1043092-idx_0-mfs_24-dm1_5000    //上一级传递的参数