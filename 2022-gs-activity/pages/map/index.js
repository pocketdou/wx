// pages/map/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:'',
    longitude:'',
    markers:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
    console.log('e=',e);
    let markers = [
      {
        id:1,
        latitude:e.latitude,
        longitude:e.longitude,
        iconPath:'/assest/img/car.png',
        width:'64rpx',
        height:'96rpx'
      }
    ];
    this.setData({
      latitude:e.latitude,
      longitude:e.longitude,
      markers:markers
    })
  },

 
})