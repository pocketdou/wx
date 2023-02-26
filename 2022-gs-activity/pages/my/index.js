// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow(){
    this.getTabBar().setData({
      selected:2
    })
  },
  reg(){
    wx.navigateTo({
      url: '/pages/reg/index'
    })
  },
  login(){
    wx.navigateTo({
      url: '/pages/login/index'
    })
  },
  myActivity(){
    wx.navigateTo({
      url: '/pages/myActivity/index'
    })
  },
  auth(){
    wx.navigateTo({
      url: '/pages/auth/index'
    })
  },
  use(){
    wx.navigateTo({
      url: '/pages/use/index'
    })
  },
  clear(){
    wx.showModal({
      title:'温馨提示',
      content:'清理本地缓存？',
      success(res){
        // console.log('res=',res);
        if(res.confirm){
          wx.clearStorage({
            success: (res) => {
              // console.log('res2=',res);
              wx.showToast({
                title: '清理成功'
              })
            },
          })
        }
      }
    })
  }
})