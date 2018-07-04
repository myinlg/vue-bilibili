<template>
	<div class="recommend">
		<ul class="top-list" clearfix>
			<RecommendItem v-for="(item, index) in imgList" :contentTop="item" :key="index"></RecommendItem>
		</ul>
		<div class="prev" @click="now = now > 0 ? now -= 1 : now = 2">{{ this.pre = this.now === 0 ? '昨日' : this.now === 1 ? '三日' : '一周'}}</div>
    <div class="next" @click="now = now < 2 ? now += 1 : now = 0">{{ this.next = this.now === 0 ? '一周' : this.now === 1 ? '昨日' : '三日'}}</div>
	</div>
</template>

<script>
import RecommendItem from './RecommendItem';
export default {
  name: 'Recommend',
  components:{
    RecommendItem
  },
  data () {
    return {
      now: 0, // 0三日  1
      pre: '',
      next: '',
      imgList:[
        {
          aid:"12853735",
          author:"Orsuan",
          badgepay:false,
          coins:871,
          create:"2018-06-02 01:14",
          description:"【该细还得细】Fate/EXTRA世界线的前世今生(前)",
          duration:"3:19",
          favorites:2177,
          mid:424141,
          pic:"/static/images/content/recommend-module0.jpg",
          play:15456,
          review:149,
          subtitle:"",
          title:"彩♂虹六号",
          typename:"短片·手书·配音",
          video_review:352
        },{
          aid:"12818431",
          author:"oldcaptainMMD",
          badgepay:false,
          coins:902,
          create:"2018-06-02 08:44",
          description:"【星火行动】谁杀死了知更鸟【言和】【神华社x踏云社】",
          duration:"1:37",
          favorites:8726,
          mid:2345169,
          pic:"/static/images/content/recommend-module1.jpg",
          play:70449,
          review:264,
          subtitle:"",
          title:"Tda式改变超短裙Miku【yeah oh ahhh oh！】",
          typename:"MMD·3D",
          video_review:334
        },{
          aid:"12825132",
          author:"潇湘公子寻",
          badgepay:false,
          coins:8280,
          create:"2018-06-02 12:35",
          description:"应该能过审了吧？T_T",
          duration:"6:56",
          favorites:4792,
          mid:8934654,
          pic:"/static/images/content/recommend-module2.jpg",
          play:63474,
          review:2977 ,
          subtitle:"",
          title:"【什么是三观正】如何评价一部作品的三观？",
          typename:"综合",
          video_review:1456,
        },{
          aid:"12858052",
          author:"一條翔",
          badgepay:false,
          coins:329,
          create:"2018-06-02 09:11",
          description:"【新番吐个爽】只要胆子大，标题不取也罢",
          duration:"0:14",
          favorites:1713,
          mid:280668,
          pic:"/static/images/content/recommend-module3.jpg",
          play:6849,
          review:129,
          subtitle:"",
          title:"【灵能百分百手书】「恋」",
          typename:"短片·手书·配音",
          video_review:80,
        },{
          aid:"12802603",
          author:"洛天依",
          badgepay:false,
          coins:78198,
          create:"2018-06-02 19:41",
          description:"Vsinger Live 2017洛天依全息演唱会官方录播完整版发布。\r\n2017年6月17日，“Vsinger Live 2017洛天依全息演唱会”在上海梅赛德斯－奔驰文化中心举行。本次演唱会是以洛天依为首的Vsinger全员举行的首次大型演唱会，在本次演唱会上，墨清弦和徵羽摩柯首次发声，大量优秀的UGC作品被列入歌单。",
          duration:"120:31",
          favorites:98059,
          mid:36081646,
          pic:"/static/images/content/recommend-module4.jpg",
          review:15968,
          subtitle:"",
          title:"Vsinger Live 2017洛天依全息演唱会【官方录播完整版】",
          typename:"VOCALOID·UTAU",
          video_review:179347,
        },{
          aid:"12892731",
          author:"Nyamazing字幕组",
          badgepay:false,
          coins:856,
          create:"2018-06-02 00:17",
          description:"all by はみさん\nniconico：sm31669144\n就是弹过缪组曲的那个大师。出过一张同人CD「my FAVORITE μ’ｓ」。\n没有谱子的，安静听就好。",
          duration:"18:22",
          favorites:1550,
          mid:554122,
          pic:"/static/images/content/recommend-module5.jpg",
          play:9162,
          review:290,
          subtitle:"",
          title:"【木吉他组曲】Love Live! Sunshine!! Acoustic Guitar Arrange Medley【",
          typename:"演奏",
          video_review:396,
        },{
          aid:"12894334",
          author:"黑娘KuLA_DM",
          badgepay:false,
          coins:2219,
          create:"2017-08-03 01:31",
          description:"【※借物表请见视频内※】\n\n作为冷热流的干妈！！我！！终于把他们弄出来啦！！\n深夜投稿我要困死了【……】\n\n【所有刷安没马梗的弹幕评论发送者都将永久拉黑】【所有刷安没马梗的弹幕评论发送者都将永久拉黑】【所有刷安没马梗的弹幕评论发送者都将永久拉黑】\n\n【By：黑娘Kula】",
          duration:"4: 7",
          favorites:4725,
          mid:2321152,
          pic:"/static/images/content/recommend-module6.jpg",
          play:14448,
          review:434,
          subtitle:"",
          title:"【凹凸世界MMD】〓黑色还是白色，以双剑来审判〓「Echo」【冷热流拟人/模型展示】",
          typename:"MMD·3D",
          video_review:917,
        },{
          aid:"12892949",
          author:"_鹤丸国永帅无敌",
          badgepay:false,
          coins:928,
          create:"2018-06-02 00:25",
          description:"第一次做手书，画的很吃藕，许愿圣火老婆！！！！祝大家食用愉快~·",
          duration:"1:16",
          favorites:2055,
          mid:13690997,
          pic:"/static/images/content/recommend-module7.jpg",
          play:17318,
          review:329,
          subtitle:"",
          title:"【梦间集-手书】因为我们是男♂人啊",
          typename:"短片·手书·配音",
          video_review:316,
        }
      ],

    }
  }
}
</script>
<style lang="less" scoped>
.recommend {
  position: relative;
  height: 240px;
  overflow: hidden;
  .top-list {
    margin-right: -20px;
    list-style: none;
    padding: 0;
    margin: 0;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .prev,
  .next {
    display: none;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    background-image: url('http://static.hdslb.com/images/v3images/icons2.png'); // static.hdslb.com/images/v3images/icons2.png)
    background-repeat: no-repeat;
    width: 20px;
    top: 50%;
    margin-top: -30px;
    cursor: pointer;
    font-size: 12px;
    color: #fff;
    z-index: 99;
    text-align: center;
    line-height: 16px;
    user-select: none;
  }

  .prev {
    left: 0px;
    border-radius: 0 2px 2px 0;
    background-position: 6px -1211px;
    padding: 13px 5px 13px 10px;
  }

  .next {
    right: 0px;
    border-radius: 2px 0 0 2px;
    background-position: 25px -1262px;
    padding: 13px 10px 13px 5px;
  }

  &:hover .prev,
  &:hover .next {
    display: block;
  }

  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
}
</style>

