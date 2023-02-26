const app = getApp()

Page({
  data: {},
  onShow() {
    this.getPostion()
    this.setData({
      handleSearch: this.handleSearch.bind(this),
    })

    if (
      typeof this.getTabBar === "function" &&
      this.getTabBar()
    ) {
      const tabList = this.getTabBar().data
        .tabList
      tabList.forEach((v) =>
        v.id === 1
          ? (v.active = true)
          : (v.active = false)
      )
      this.getTabBar().setData({
        tabList,
      })
    }
  },

  getPostion() {
    wx.getLocation({
      success: (res) => {
        console.log(res)
      },
    })
  },

  handleSearch(value) {
    console.log(value)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            text: "hello",
            value: 1,
          },
          {
            text: "world",
            value: 2,
          },
        ])
      }, 200)
    })
  },

  handleSave() {
    wx.getImageInfo({
      src: "/images/add.png",
      success: (res) => {
        console.log(res)
      },
    })
  },
})
