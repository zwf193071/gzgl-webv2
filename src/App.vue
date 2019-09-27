<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html {
  font-size: 10px;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
#app {
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  line-height: 1.42857143;
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 6px;
  /*滚动条宽度*/
  height: 6px;
  /*滚动条高度*/
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  /*滚动条的背景区域的圆角*/
  background-color: rgba(0, 0, 0, 0.5);
  /*滚动条的背景颜色*/
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  /*滚动条的圆角*/
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgba(133, 144, 166, 0.5);
  /*滚动条的背景颜色*/
  /*blue*/
}
img {
    vertical-align: middle;
}
</style>
