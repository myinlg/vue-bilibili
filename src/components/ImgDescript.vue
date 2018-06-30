<template>
  <div class="img-descript">
      <div class="module" v-for="(item,index) in imgList" :key="index" >
        <div class="img" :style="{backgroundImage:'url('+item.imgUrl+')'}"></div>
        <p>{{item.descript}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ImgDescript',
  data () {
    return {
      imgList: [
        {title: '', descript: '【祖娅纳惜·Fre】谁杀死了知更鸟【和声伴奏2P更新】', imgUrl: '/static/images/content/recommend-module5.jpg'},
        {title: '', descript: '【祖娅纳惜·Fre】谁杀死了知更鸟【和声伴奏2P更新】', imgUrl: '/static/images/content/recommend-module6.jpg'},
        {title: '', descript: '【祖娅纳惜·Fre】谁杀死了知更鸟【和声伴奏2P更新】', imgUrl: '/static/images/content/recommend-module7.jpg'},
        {title: '', descript: '【该细还得细】Fate/EXTRA世界线的前世今生(前)', imgUrl: '/static/images/content/recommend-module0.jpg'},
        {title: '', descript: '【星火行动】谁杀死了知更鸟【言和】【神华社x踏云社】', imgUrl: '/static/images/content/recommend-module1.jpg'},
        {title: '', descript: '【新番吐个爽】只要胆子大，标题不取也罢', imgUrl: '/static/images/content/recommend-module2.jpg'},
        {title: '', descript: '【赤ティン】如果能成为谁的心脏的话【高音】', imgUrl: '/static/images/content/recommend-module3.jpg'},
        {title: '', descript: '彩♂虹六号', imgUrl: '/static/images/content/recommend-module4.jpg'}
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.img-descript {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: space-between;
  > .module {
    width: 160px;
    height: 150px;
    &:hover p {
      color: '#f00';
    }
    > .img {
      width: 100%;
      height: 100px;
      background-size: 100% 100%;
      border-radius: 5px;
    }
    > p {
      width: 100%;
      margin: 5px 0;
      height: 40px;
      line-height: 20px;
      font-size: 12px;
      color: #222;
      overflow: hidden;
    }
  }
}
</style>
