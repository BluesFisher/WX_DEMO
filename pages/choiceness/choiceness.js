//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    cityWeather: null,
    lifeIndex: null,
    popHidden: true,
    navItem: [
      { name: '618减免', src: '#', pic: '/images/店铺.png' },
      { name: '精选', src: '#', pic: '/images/精选.png' },
      { name: '女装', src: '#', pic: '/images/女装.png' },
      { name: '女鞋', src: '#', pic: '/images/女鞋.png' },
      { name: '男装', src: '#', pic: '/images/男装.png' },
      { name: '男鞋', src: '#', pic: '/images/男鞋.png' },
      { name: '时尚', src: '#', pic: '/images/时尚.png' },
      { name: '国际', src: '#', pic: '/images/国际.png' },
      { name: '美妆', src: '#', pic: '/images/美妆.png' },
      { name: '包包', src: '#', pic: '/images/包包.png' },
      { name: '家居', src: '#', pic: '/images/家居.png' },
      { name: '生活', src: '#', pic: '/images/生活.png' },
      { name: '数码家电', src: '#', pic: '/images/数码家电.png' },
      { name: '运动户外', src: '#', pic: '/images/运动户外.png' },
    ],
    chooseItem: { name: '请选择', src: '#' },
    headerNav: null,
    morePic: false,
    moreNav: null,
    choose: '',
    showItem: {
      show1: [
        { name: '618减免', src: '#', pic: '/images/店铺.png' },
        { name: '精选', src: '#', pic: '/images/精选.png' },
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
  },

  //事件处理函数
  getCityWeather: function () {
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

  }
})
