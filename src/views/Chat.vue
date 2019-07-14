<template>
  <div class="mg-chat">
    <div class="mg-chat-header">
      <div class="mg-chat-header-wrap">
        <i
        class="gq-icon mg-chat-header-wrap-icon"
        @click="goBack"
        >&#xe603;</i>
        <h1 class="mg-chat-header-wrap-title">聊天</h1>
      </div>
    </div>
    <ul class="mg-chat-news">
      <li class="mg-chat-news-item">
        <div class="mg-chat-news-item_img">
          <img src="https://s10.mogucdn.com/mlcdn/c45406/190304_7hbcl8dd5464c39h46097eh5a2b2l_400x400.jpg_50x50.jpg" alt="">
        </div>
        <div class="mg-chat-news-item_text">
          <h1>MOGU活动菌<span>3天前</span></h1>
          <span>[活动消息]</span>
        </div>
      </li>
      <li class="mg-chat-news-item">
        <div class="mg-chat-news-item_img">
          <img src="https://s10.mogucdn.com/mlcdn/c45406/180827_14jiabgdh05jk82c9c043i86ac1di_80x80.png" alt="">
        </div>
        <div class="mg-chat-news-item_text">
          <h1>多多小秘书<span>3月17日</span></h1>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
$baseColor: rgb(102, 102, 102);
$activeColor: rgb(255, 87, 119);
.mg-chat{
  height: 100%;
  background: #f5f5f5;
  &-header{
    width: 100%;
    height: 0;
    padding-top: 12%;
    position: relative;
    border-bottom: 1px solid #eee;
    background-color: #fff;
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
        font-size: 22px;
        color: $baseColor;
        width: 50px;
      }
      &-title{
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 15px;
        flex: 1;
        margin-right: 35px;
        margin-top: -5px;
      }
    }
  }
  &-news{
    margin-top: 5px;
    &-item{
      background: #fff;
      height: 70px;
      width: 100%;
      padding: 10px 15px;
      box-sizing: border-box;
      display: flex;
      border-bottom: 1px solid #eeeeee;
      &_img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
          vertical-align: top;
        }
      }
      &_text{
        margin-left: 10px;
        flex: 1;
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        h1{
          font-size: 15px;
          margin-bottom: 5px;
          span{
            float: right;
            font-size: 12px;
            color: #999;
          }
        }
        >span{
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
}
</style>
