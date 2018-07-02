<!--图片轮播组件-->
<template>
  <div class="shuffling" @mouseover="mouseOver(true)" @mouseout="mouseOver(false)">
    <el-row class="main">
      <ul class="img-list" ref="shuff">
        <li v-for="(item,index) in imgList" :key="index">
          <a href=""> <img :src="item.imgUrl"></a>
        </li>
      </ul>
    </el-row>
    <el-row class="foot">
				<div class="title" v-if="imgList[count]">
          <a href="" target="_blank">{{ imgList[count].descript }}</a>
				</div>
				<ul class="slide-bar">
					<li :class="{on: count == index}" v-for="(item, index) in imgList" :key="index" @click="cutItem(index)"></li>
				</ul>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Shuffling',
  data () {
    return {
      imgList: [
        {title: '', descript: '【和声伴奏2P更新】', imgUrl: '/static/images/content/shuffling0.jpg'},
        {title: '', descript: '【祖娅纳惜·Fre】谁杀死了知更鸟【和声伴奏2P更新】', imgUrl: '/static/images/content/shuffling1.jpg'},
        {title: '', descript: '【祖娅纳惜·Fre】谁杀死了知更鸟【和声伴奏2P更新】', imgUrl: '/static/images/content/shuffling2.jpg'},
        {title: '', descript: '【该细还得细】Fate/EXTRA世界线的前世今生(前)', imgUrl: '/static/images/content/shuffling3.jpg'},
        {title: '', descript: '【星火行动】谁杀死了知更鸟【言和】【神华社x踏云社】', imgUrl: '/static/images/content/shuffling5.jpg'},
      ],
      interval:Function,
      count:0,
      show:false
    }
  },
  mounted() {
    this.startInterval();
  },
  methods:{
    startInterval() {
			//轮播图定时滚动
			this.interval = setInterval(() => {
				this.count ++
				if (this.count === 5) {
					this.count = 0
				}
				let distance = -100 * this.count
				let left = distance + "%"
				if (this.$refs.shuff) {
					this.$refs.shuff.style.marginLeft = left
				}
			}, 2000)
    },
    cutItem(index) {
			this.count = index
			let distance = -100 * this.count
			let left = distance + "%"
			this.$refs.shuff.style.marginLeft = left
			//点击圆点停止计时 并重新开启
			clearInterval(this.interval)
		},
    mouseOver(state){
      this.show = state;
      if(state){
        clearInterval(this.interval);
      } else {
        this.startInterval();
      }
    }
  }
}
</script>
<style lang="less" scoped>
.shuffling {
  position: relative;
  height: 100%;
  width: 100%;
  .main {
    width: 100%;
    height: 100%;
    .img-list {
      width: 500%;
      height: 100%;
      list-style: none;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      transition: 0.2s;
      > li {
        width: 440px;
        height: 220px;
        float: left;
      }
    }
  }
  .foot {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 35px;
    background: linear-gradient(
      transparent,
      rgba(0, 0, 0, 0.1) 20%,
      rgba(0, 0, 0, 0.2) 35%,
      rgba(0, 0, 0, 0.5) 65%,
      rgba(0, 0, 0, 0.66)
    );
    border-radius: 0 0 4px 4px;
    .title {
      position: absolute;
      bottom: 0;
      vertical-align: top;
      left: 20px;
      top: 0;
      height: 35px;
      line-height: 35px;
      width: 290px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #fff;
      font-size: 14px;
      a {
        text-decoration: none;
        color: #fff;
      }
    }
    .slide-bar {
      position: absolute;
      right: 5px;
      bottom: 5px;
      overflow: hidden;
      padding: 2px 5px;
      margin: 0;
      list-style: none;
      li {
        float: left;
        cursor: pointer;
        width: 18px;
        height: 18px;
        margin: 2px 2px;
        background: url(~assets/images/icons.png) -855px -790px no-repeat;
        &:hover {
          background-position: -919px -790px;
        }
        &.on {
          background-position: -855px -727px;
        }
      }
    }
  }
}
</style>
