<template>
  <div class="header" :class="[showHead ? 'slide-down':'slide-up']">
    <el-row class="bg-animate">
      <div class="sailor-wrapper">
        <el-col class="title" :span="6">
          <NavigationText></NavigationText>
        </el-col>
        <el-input
            size="small"
            placeholder="搜索..."
            suffix-icon="el-icon-search"
            >
        </el-input>
      </div>
    </el-row>
    <el-row class="menu-items sailor-wrapper">
      <NavigationMenu></NavigationMenu>
    </el-row>
  </div>
</template>
<script>
import NavigationText from '@/views/navigation/NavigationText'
import NavigationMenu from '@/views/navigation/NavigationMenu'
export default {
  name: 'Navigation',
  components: {
    NavigationText,
    NavigationMenu
  },
  props: {
    showHead: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
@import url(~assets/css/index.less);
.header {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  .bg-animate {
    position: relative;
    background-position: center -10px;
    background-repeat: no-repeat;
    height: 150px;
    width: 100%;
    background-image: url(~assets/images/head_logo.png);
    > div {
      position: relative;
      height: 100%;
      margin: 0 auto;
    }
    .title {
      height: 100%;
    }
    .el-input {
      position: absolute;
      width: 300px;
      right: 10px;
      bottom: 15px;
      /deep/ .el-input__suffix {
        color: #00aed6;
        font-size: 18px;
      }
    }
  }
  .menu-items {
    height: 50px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
  }
}
/*平滑效果*/
@animate-style: top 0.5s cubic-bezier(0.17, 0.04, 0.03, 0.94);
.slide-up {
  -webkit-transition: @animate-style;
  transition: @animate-style;
  top: -150px !important;
}
.slide-down {
  -webkit-transition: @animate-style;
  transition: @animate-style;
}
</style>
