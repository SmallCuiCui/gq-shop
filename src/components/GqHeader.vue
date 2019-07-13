<template>
  <div class="gq-header">
    <div class="gq-header-wrap">
      <router-link
      tag="i"
      to="/list"
      class="gq-icon gq-header-wrap-icon"
      >&#xe606;</router-link>

      <router-link
      tag="form"
      to="/search"
      class="gq-header-wrap-form">
        <i class="gq-icon">&#xe61c;</i>
        <input type="text" placeholder="拖鞋">
      </router-link>
      <router-link
      to="/chat"
      tag="i"
      class="gq-icon gq-header-wrap-icon">&#xe629;</router-link>
    </div>
  </div>
</template>

<script>
export default {
data () {
  return {
  }
},
methods: {
}
}
</script>

<style lang='scss' scoped>
$baseColor: rgb(102, 102, 102);
$activeColor: rgb(255, 87, 119);
.gq-header{
  width: 100%;
  height: 0;
  padding-top: 12%;
  position: relative;
  border-bottom: 1px solid #eee;
  &-wrap{
    position: absolute;
    top: 10px;
    left: 0;
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    &-icon{
      font-size: 20px;
      color: $baseColor;
      width: 50px;
    }
    &-form{
      height: 30px;
      flex: 1;
      display: flex;
      align-items: center;
      border-radius: 5px;
      background-color: #eee;
      i{
        padding: 0 5px;
        font-size: 16px;
      }
      input{
        flex: 1;
        height: 100%;
        font-size: 12px;
        background: none;
        color: $baseColor;
        border: none;
      }
    }
  }
}
</style>
