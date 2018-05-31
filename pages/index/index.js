//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    cityWeather: null,
    lifeIndex: null,
    popHidden: true,
    navItem: [
      { name: '618减免', src: 0, id: 'id0', pic: '/images/店铺.png' },
      { name: '精选', src: 1, id: 'id1', pic: '/images/精选.png' },
      { name: '女装', src: 2, id: 'id2', pic: '/images/女装.png' },
      { name: '女鞋', src: 3, id: 'id3', pic: '/images/女鞋.png' },
      { name: '男装', src: 4, id: 'id4', pic: '/images/男装.png' },
      { name: '男鞋', src: 5, id: 'id5', pic: '/images/男鞋.png' },
      { name: '时尚', src: 6, id: 'id6', pic: '/images/时尚.png' },
      { name: '国际', src: 7, id: 'id7', pic: '/images/国际.png' },
      { name: '美妆', src: 8, id: 'id8', pic: '/images/美妆.png' },
      { name: '包包', src: 9, id: 'id9', pic: '/images/包包.png' },
      { name: '家居', src: 10, id: 'id10', pic: '/images/家居.png' },
      { name: '生活', src: 11, id: 'id11', pic: '/images/生活.png' },
      { name: '数码家电', src: 12, id: 'id12', pic: '/images/数码家电.png' },
      { name: '运动户外', src: 13, id: 'id13', pic: '/images/运动户外.png' },
    ],
    chooseItem: { name: '请选择', src: '#' },
    headerNav: null,
    morePic: false,
    moreNav: null,
    choose: '',
    showItem: {
      show1: [
        { name: '618减免', src: '#', pic: '/images/店铺.png' },
        { name: '精选', src: '/pages/choiceness/choiceness', pic: '/images/精选.png' },
        { name: '女装', src: '#', pic: '/images/女装.png' },
        { name: '女鞋', src: '#', pic: '/images/女鞋.png' },
      ],
      show2: [
        { name: '男装', src: '#', pic: '/images/男装.png' },
        { name: '男鞋', src: '#', pic: '/images/男鞋.png' },
        { name: '时尚', src: '#', pic: '/images/时尚.png' },
        { name: '国际', src: '#', pic: '/images/国际.png' },
      ],
      show3: [
        { name: '美妆', src: '#', pic: '/images/美妆.png' },
        { name: '包包', src: '#', pic: '/images/包包.png' },
        { name: '家居', src: '#', pic: '/images/家居.png' },
        { name: '生活', src: '#', pic: '/images/生活.png' },
      ],
      show4: [
        { name: '数码家电', src: '#', pic: '/images/数码家电.png' },
        { name: '运动户外', src: '#', pic: '/images/运动户外.png' },
        { name: '', src: '', pic: '' },
        { name: '', src: '', pic: '' },
      ],
    },
    currentTab: 0,
    toView: 'id0',
    imgUrls: [
      '/images/包包show.jpg',
      '/images/化妆品show.jpg',
      '/images/男装show.jpg',
      '/images/女鞋show.jpg',
      '/images/家电show.jpg',
    ],
    homePageItem: {
      show1: [
        { name: '男装馆', src: '#', pic: '/images/homepage/男装.png' },
        { name: '鞋靴馆', src: '#', pic: '/images/homepage/鞋靴.png' },
        { name: '运动馆', src: '#', pic: '/images/homepage/板鞋.png' },
        { name: '箱包馆', src: '#', pic: '/images/homepage/包包.png' },
        { name: '今日秒杀', src: '#', pic: '/images/homepage/礼品.png' },
      ],
      show2: [
        { name: '护肤馆', src: '#', pic: '/images/homepage/护肤品.png' },
        { name: '裤装馆', src: '#', pic: '/images/homepage/裤子.png' },
        { name: '内衣馆', src: '#', pic: '/images/homepage/内衣.png' },
        { name: '女装馆', src: '#', pic: '/images/homepage/女装.png' },
        { name: '查看更多', src: '#', pic: '/images/homepage/更多.png' },
      ],
      show3: [
        { title: '型男节-觉醒新主张', time: '仅剩2天', pic: '/images/homepage/宣传1.jpg', explain: '买满300返100' },
        { title: '新风尚-舍我其谁', time: '仅剩2天', pic: '/images/homepage/宣传2.jpg', explain: '满1件打5折，满2件打3.5折' },
        { title: '大牌来袭', time: '仅剩2天', pic: '/images/homepage/宣传3.jpg', explain: '满1件打5折，满2件打3.5折' },
        { title: '你的绣花鞋', time: '仅剩2天', pic: '/images/homepage/宣传4.jpg', explain: '全场3折' },
        { title: '夏季风暴', time: '仅剩2天', pic: '/images/homepage/宣传5.jpg', explain: '赢积分送好礼' }, 
        { title: '你的选择你做主', time: '仅剩2天', pic: '/images/homepage/宣传6.jpg', explain: '' },
        { title: '品牌张力', time: '仅剩2天', pic: '/images/homepage/宣传7.jpg', explain: '满1件打5折，满2件打3.5折' },
      ]
    },
    floorstatus: false,
  },

  //事件处理函数
  getCityWeather: function() {
    var self = this;
    wx.request({
      url: 'http://www.weather.com.cn/data/cityinfo/101280601.html',
      method: 'GET',
      success: function (res) {
        console.log(res);
        var imgApi = 'http://m.weather.com.cn/img/';
        var img1 = res.data.weatherinfo.img1;
        var img2 = res.data.weatherinfo.img2;
        res.data.weatherinfo.img1 = imgApi + img1;
        res.data.weatherinfo.img2 = imgApi + img2;
        self.setData({
          cityWeather: res.data.weatherinfo,
        });
      }
    });
    wx.request({
      url: 'http://www.weather.com.cn/data/sk/101280601.html',
      method: 'GET',
      success: function (res) {
        console.log(res);
      }
    })
  },
  onLoad: function () {
    var self = this;
    this.setData({
      headerNav: self.data.navItem,
    })
  },
  onShareAppMessage: function () {
    return {
      title: '小草落雨',
      desc: '最具人气的新星!',
      path: '/pages/index/index'
    }
  },
  searchEvent: function () {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  showMore: function (e) {
    var hidden = !this.data.popHidden;
    var chooseItem = hidden ? this.data.navItem : null;
    var moreNav = !hidden ? this.data.navItem : null;
    var choose = !hidden ? this.data.chooseItem.name : '';
    this.setData({
      popHidden: hidden,
      headerNav: chooseItem,
      morePic: !hidden,
      moreNav: moreNav,
      choose: choose,
    });
  },
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      var id = parseInt(e.target.id.substring(2));
      var toViewTemp = 'id0'; 
      if (id > 2) {
        toViewTemp = 'id' + (id - 2);
      }
      console.log(toViewTemp);
      that.setData({
        currentTab: e.target.dataset.current,
        toView: toViewTemp,
      })
    }
  },
  swiperChange: function (e) {
    this.setData({
      currentTab: e.detail.current,
    })
  },
  scroll: function (e) {
    console.log(e);
    if (e.detail.scrollTop > 500) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },
})
