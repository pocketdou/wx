// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected:0,
    "list": [{
      "pagePath": "/pages/index/index",
      "text": "赛事",
      "iconPath": "/assest/img/icon01.png",
      "selectedIconPath": "/assest/img/icon01ho.png"
    },{
      "pagePath": "/pages/activity/create",
      "text": "发布",
      "iconPath": "/assest/img/icon03.png",
      "selectedIconPath": "/assest/img/icon03ho.png",
      "isSpecial":true
    },{
      "pagePath": "/pages/my/index",
      "text": "我的",
      "iconPath": "/assest/img/icon02.png",
      "selectedIconPath": "/assest/img/icon02ho.png"
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e){
      let path = e.currentTarget.dataset.path;
      wx.switchTab({
        url: path
      })
    }
  }
})
