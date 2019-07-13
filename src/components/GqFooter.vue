<template>
  <div class="qg-footer">
    <ul class="qg-footer-ul">
      <router-link
        class="qg-footer-item"
        tag="li"
        v-for="nav in navs"
        :key="nav.name"
        :to="nav.path"
      >
      {{ nav.meta.title }}
      </router-link>
    </ul>
  </div>
</template>

<script>
import routes from '@/router/routes'
export default {
  data () {
    return {
      navs: []
    }
  },
  created () {
    this.navs = routes.filter(route => route.meta.isTablrBar === true)
  }
}
</script>

<style lang='scss' scoped>
$baseColor: rgb(102, 102, 102);
$activeColor: rgb(255, 87, 119);

.router-link-exact-active,
.router-link-active{
  color: $activeColor;
}
.qg-footer{
  width: 100%;
  height: 0;
  padding-top: 50px;
  position: relative;

  &-ul{
    position: absolute;
    top: 0;
    left: 0;
    color: $baseColor;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #eeeeee;

    .qg-footer-item{
      flex: 1;
      height: 54px;
      line-height: 54px;
      text-align: center;
      font-size: 18px;
    }
  }
}
</style>
