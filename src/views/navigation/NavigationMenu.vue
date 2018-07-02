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
      menusList: [
        { title: '首页',
          img: 'icon-home',
          url: 'http://www.baidu.com',
          children: [
            { title: 'MAD-AMV', url: '' },
            { title: 'MMD-3D', url: '' },
            { title: '短片', url: '' },
            { title: '手书', url: '' },
            { title: '配音', url: '' }
          ]
        },
        { title: '动画', img: '', num: '999+', url: 'http://www.baidu.com' },
        { title: '番剧', img: '', num: '99', url: 'http://www.baidu.com' },
        { title: '国创', img: '', num: '122', url: 'http://www.baidu.com' },
        { title: '音乐', img: '', num: '144', url: 'http://www.baidu.com' },
        { title: '舞蹈', img: '', num: '123', url: 'http://www.baidu.com' },
        { title: '科技', img: '', num: '123', url: 'http://www.baidu.com' },
        { title: '生活', img: '', num: '534', url: '' },
        { title: '鬼畜', img: '', num: '154', url: '' },
        { title: '时尚', img: '', num: '52', url: '' },
        { title: '广告', img: '', num: '124', url: '' },
        { title: '娱乐', img: '', num: '72', url: '' },
        { title: '影视', img: '', num: '621', url: '' },
        { title: '放映厅', img: '', num: '213', url: '' },
        { title: '专栏', img: 'icon-column', url: '' },
        { title: '广场', img: 'icon-square', url: '' },
        { title: '直播', img: 'icon-live ', url: '' },
        { title: '小黑屋', img: 'icon-blackroom', url: '' }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@import url(~assets/css/icon.less);
.menus-items {
  height: 100%;
  width: 100%;
  display: flex;
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
