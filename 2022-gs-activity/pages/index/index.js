// index.js
const qqmap = require("../../assest/lib/qqmap-wx-jssdk.min")
let qqmapsdk
Page({
  data: {
    dialogShow: true,
    dialogButtons: [
      { text: "关闭", extClass: "dialogButton" },
    ],
    current: 0,
    swiperCurrent: 0,
    positonAdress: "",
    latitude: "",
    longitude: "",
    swiperList: [
      "/assest/img/banner01.png",
      "/assest/img/banner02.png",
      "/assest/img/banner03.png",
    ],
    show: false,
    activityList: [
      {
        id: 1,
        imgUrl: "/assest/img/banner02.png",
        title: "112022绍兴上旬",
        time: "报名进行中2天11小时4分34秒",
      },
      {
        id: 2,
        imgUrl: "/assest/img/banner02.png",
        title: "222022绍兴上旬",
        time: "报名进行中2天11小时4分34秒",
      },
      {
        id: 3,
        imgUrl: "/assest/img/banner02.png",
        title: "332022绍兴上旬",
        time: "报名进行中2天11小时4分34秒",
      },
      {
        id: 4,
        imgUrl: "/assest/img/banner02.png",
        title: "442022绍兴上旬",
        time: "报名进行中2天11小时4分34秒",
      },
    ],
  },
  onLoad() {
    wx.setBackgroundColor({
      backgroundColorTop: "red", // 顶部窗口的背景色为白色
      backgroundColorBottom: "green", // 底部窗口的背景色为白色
    })
    this.getlocation()
    this.setData({
      dialogShow: true,
    })
    // wx.showModal({
    //   title:'111',
    //   content:'222'
    // })
  },
  onShow() {
    this.getTabBar().setData({
      selected: 0,
    })
  },
  dots(e) {
    // console.log('e=',e);
    this.setData({
      current: e.detail.current,
    })
  },
  dot(e) {
    //  console.log('e=',e);
    let dot = e.currentTarget.dataset.index
    this.setData({
      swiperCurrent: dot,
    })
  },
  activity_link() {
    wx.navigateTo({
      url: "/pages/activity/list",
    })
  },
  activity_detail(e) {
    // console.log('e=',e);
    wx.navigateTo({
      url:
        "/pages/activity/detail?id=" +
        e.currentTarget.dataset.id,
    })
  },
  getlocation() {
    let that = this
    // console.log(1111);
    wx.getLocation({
      success(res) {
        // console.log('res=',res);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
        qqmapsdk = new qqmap({
          key:
            "IQFBZ-VRGCX-YMH4B-Z7T4C-XXWYE-SEF3P",
        })
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude,
          },
          success(res2) {
            // console.log('res2=',res2);
            that.setData({
              positonAdress: res2.result.address,
            })
          },
        })
      },
    })
  },
  getlocationMap() {
    wx.navigateTo({
      url:
        "/pages/map/index?latitude=" +
        this.data.latitude +
        "&longitude=" +
        this.data.longitude,
    })
  },
  previewImage(e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      show: true,
      current: index,
    })
  },
  hideDialog() {
    this.setData({
      dialogShow: false,
    })
  },
})
