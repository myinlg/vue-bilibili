<template>
  <div class="menus-items">
     <ul class="menus">
      <li v-for="(item,index) in menusList" :key="index">
        <a :href="item.url">
          <div :class="[{'menu-bg':!item.num},item.img]">
            <span v-if="item.num" class="num-wrap">{{item.num}}</span>
          </div>
          <div>{{item.title}}</div>
        </a>
        <ul class="sub-nav">
          <li v-for="(subItem,sub_index) in item.children" :key="sub_index">
            <a :href="subItem.url">{{subItem.title}}</a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="gif-menu"></div>
  </div>
</template>
<script>
export default {
  name: 'NavigationMenu',
  data () {
    return {
      menusList: []
    }
  },
  created(){
    this.$util.ajax({
      url:'/api/api/navigation.json'
      // url:require.resolve('./navigation.json')
    }).then((res,data)=>{
      debugger
    });
  }
}
</script>
<style lang="less" scoped>
@import url(~assets/css/icon.less);
.menus-items {
  height: 100%;
  width: 100%;
  display: flex; /* Chrome 29+, Firefox 22+, IE 11+, Opera 12.1/17/18, Android 4.4+ */
  background-color: #fff;
  .menus {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    flex: 1;
    justify-content: space-between;
    .menu-size {
      height: 100%;
      width: 50px;
    }
    > li {
      font-size: 12px;
      .menu-size;
      a {
        text-decoration: none;
        color: #232;
      }
      > a {
        .menu-size;
        display: block;
        padding: 7px;
        box-sizing: border-box;

        > div {
          width: 100%;
          height: 18px;
          line-height: 18px;
          text-align: center;
        }
        .menu-bg {
          width: 18px;
          margin: 0 auto;
        }
        .num-wrap {
          display: inline-block;
          vertical-align: top;
          font-size: 12px;
          -webkit-transform: scale(0.85);
          -ms-transform: scale(0.85);
          transform: scale(0.85);
          color: #fff;
          background-color: #ffafc9;
          border-radius: 3px;
          height: 12px;
          line-height: 14px;
          max-width: 28px;
          padding: 1px 3px;
          font-family: sans-serif;
        }
      }
      /*悬停时显示隐藏子目录*/
      &:hover .sub-nav {
        display: block;
      }
      .sub-nav {
        display: none;
        list-style: none;
        width: 126px;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border-radius: 3px;
        box-shadow: 0px 0px 3px #888888;
        background-color: #fff;
        > li {
          position: relative;
          text-indent: 30px;
          width: 100%;
          height: 30px;
          line-height: 30px;
          display: inline-flex;
          &:hover {
            background-color: #e5e9ef;
          }
          > a {
            flex: 1;
            &:before {
              .arrow-left; /*左箭头*/
              position: absolute;
              content: '';
              left: 15px;
              top: 10px;
              width: 8px;
              height: 10px;
            }
          }
        }
      }
    }
  }
  .gif-menu {
    width: 70px;
    height: 40px;
    margin: 5px 0 0 20px;
    background-image: url(~assets/images/gif.gif);
    background-size: 100% 100%;
  }
}
</style>
