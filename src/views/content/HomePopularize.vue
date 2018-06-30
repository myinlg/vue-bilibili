<template>
  <div class="home-popularize">
      <el-row class="popularize">
        <div class="content">
          <p class="title"><span>推广</span></p>
          <div class="storey-box">
             <ImgDescript></ImgDescript>
          </div>
        </div>
        <div class="adpos">
          <p class="adpos-top"></p>
          <div class="adpos-img"></div>
        </div>
      </el-row>
      <el-row class="live-module">
        <div class="lazy-img"></div>
        <p class="title"><span>正在直播</span></p>
        <div class="content">
          <div class="storey-box">
             <ImgStorey></ImgStorey>
          </div>
          <div class="adpos"></div>
        </div>
      </el-row>
  </div>
</template>
<script>
import ImgDescript from '@/components/ImgDescript'
import ImgStorey from '@/components/ImgStorey'
export default {
  name: 'HomePopularize',
  components: {
    ImgDescript,
    ImgStorey
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
@import url(~assets/css/icon.less);
.home-popularize {
  width: 100%;
  height: 100%;
  //公用样式
  > .el-row {
    margin-bottom: 30px;
    .title {
      position: relative;
      width: 100%;
      font-size: 24px;
      font-weight: 400;
      height: 40px;
      line-height: 40px;
      text-indent: 50px;
      margin: 10px 0;
      &:before {
        .icon-popularize; //推广图标
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        top: 0;
        left: 0;
      }
    }
  }
  //推广模块
  > .popularize {
    width: 100%;
    height: 230px;
    display: flex;
    > .content {
      flex: 1;
      height: 100%;
      > .storey-box {
        width: 100%;
        height: 150px;
      }
    }
    > .adpos {
      width: 260px;
      height: 100%;
      margin-left: 20px;
      > .adpos-top {
        width: 100%;
        height: 40px;
        line-height: 40px;
        margin: 10px 0;
      }
      > .adpos-img {
        width: 260px;
        height: 150px;
        background-image: url('/static/images/content/adpos.jpg');
        background-size: 100% 100%;
        border-radius: 5px;
      }
    }
  }
  //直播模块
  > .live-module {
    position: relative;
    width: 100%;
    height: 480px;
    > .lazy-img {
      height: 80px;
      width: 100%;
      background-size: 100% 100%;
      background-image: url('/static/images/content/lazy-img.jpg');
    }
    > .title:before {
      .icon-live;
    }
  }
}
</style>
