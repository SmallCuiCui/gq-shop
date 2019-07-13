<template>
  <div class="gq-item">
  	<ul class="gq-item-wrap">
  		<router-link
      tag="li"
      v-for="item in listData"
      :to="{name:'listdtail', query: {headerTitle: item.title, link: item.link}}"
      class="gq-item-wrap-li"
      >
      <div class="gq-item-wrap-li-img">
        <img :src="item.image">   
      </div>
      <div class="gq-item-wrap-li-text">{{item.title}}</div>   
  		</router-link>
  		
  	</ul>

    <div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listData: []
    }
  },
  created () {
    const id = this.$route.params.cateId
    // 根据id请求数据
    this.getData(id)
  },
  beforeRouteUpdate (to, from, next) {
    const id = to.params.cateId
    this.getData(id)
    next()
  },
  methods: {
    getData (id) {
      this.$http.getListData(id).then(resp => {
        let list = JSON.parse(resp.slice(5).replace(")", "")).data.list
        // console.log(list)
        this.listData = []
        list.forEach((item, index) => {
          const{image, title, link} = item
          this.listData.push({
            key: index,
            image,
            title,
            link
          })
        })
    })
    }
  }
}
</script>

<style lang="scss">
.gq-item{
	width: 100%;
	&-wrap{
		width: 100%;
		display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
    box-sizing: border-box;
		&-li{
			width: 32%;
			padding: 10px 0;
			&-img{
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        img{
          width: 100%;
        }
      }
			&-text{
				text-align: center;
        color: #666666;
        font-size: 12px;
        text-decoration: none;
			}
		}
	}
}
</style>
