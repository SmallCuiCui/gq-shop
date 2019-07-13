<template>
  <div id="app" class="gq-app">
    <header class="gq-header-app">
      <router-view name="header"/>
    </header>
    <div class="gq-main-app">
      <router-view />
    </div>
    <footer class="gq-footer-app">
      <router-view name="footer"></router-view>
    </footer>
  </div>
</template>

<script>

  import Vue from 'vue'

  export default {
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>


<style lang='scss'>
$baseColor: rgb(102, 102, 102);
$activeColor: rgb(255, 87, 119);

@font-face {
  font-family: 'iconfont';  /* project id 1275218 */
  src: url('//at.alicdn.com/t/font_1275218_4rdwhxovtgk.eot');
  src: url('//at.alicdn.com/t/font_1275218_4rdwhxovtgk.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1275218_4rdwhxovtgk.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1275218_4rdwhxovtgk.woff') format('woff'),
  url('//at.alicdn.com/t/font_1275218_4rdwhxovtgk.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1275218_4rdwhxovtgk.svg#iconfont') format('svg');
}
.gq-icon{
  font-family: 'iconfont'
}

html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
em,
img,
strong,
sub,
sup,
b,
u,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
figure,
figcaption,
footer,
header,
hgroup,
main,
menu,
nav,
section,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
input{
  outline: none;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
html,
body,
.qd-app {
  height: 100%;
  color: #333;
}
.qd-app {
  display: flex;
  flex-direction: column;

  &-main {
    flex: 1;
  }

  &-footer {
    height: 52px;
    border-top: 1px solid #dedede;
  }
}
html,
body,
.gq-app{
  height: 100%;
}
.gq-app{
  display: flex;
  flex-direction: column;

  .gq-main-app{
    flex: 1;
    overflow: hidden;
  }
  .gq-footer-app{
    background-color: #fff;
  }
  .gq-header-app{
    background-color: #fff;
  }
}
</style>
