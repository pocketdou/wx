// pages/activity/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityList:[
      {
        id:1,
        imgUrl:'/assest/img/banner02.png',
        title:'112022绍兴上旬',
        time:'报名进行中2天11小时4分34秒'
      },
      {
        id:2,
        imgUrl:'/assest/img/banner02.png',
        title:'222022绍兴上旬',
        time:'报名进行中2天11小时4分34秒'
      },
      {
        id:3,
        imgUrl:'/assest/img/banner02.png',
        title:'332022绍兴上旬',
        time:'报名进行中2天11小时4分34秒'
      },
      {
        id:4,
        imgUrl:'/assest/img/banner02.png',
        title:'442022绍兴上旬',
        time:'报名进行中2天11小时4分34秒'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      search:this.search.bind(this)
    })
  },
  search(value){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve([
            {text: '搜索结果', value: 1}, 
            {text: '搜索结果2', value: 2}
          ])
      }, 200)
  })
  },
  handselectresult(e){
    console.log('searchVal=',e);
  },
  activity_detail(e){
    // console.log('e=',e);
    wx.navigateTo({
      url: '/pages/activity/detail?id='+e.currentTarget.dataset.id
    })
  },

})