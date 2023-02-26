const app = getApp()

Page({
  data: {
    isShow: true,
    imgUrl: [
      "https://xyylcdn.weein.cn/group1/M00/06/BF/rBUgBF8WtdWAKPOrAABgCedJ7gk388.jpg",
      "https://xyylcdn.weein.cn/group1/M00/06/BF/rBUgBF8WtyuASPvRAABkG1TAPl8877.jpg",
      "https://xyylcdn.weein.cn/group1/M00/04/19/rBUUDl78bAyAUgpEAAMr1h87H1A753.jpg",
    ],
  },
  onShow() {
    if (
      typeof this.getTabBar === "function" &&
      this.getTabBar()
    ) {
      const tabList = this.getTabBar().data
        .tabList
      tabList.forEach((v) =>
        v.id === 3
          ? (v.active = true)
          : (v.active = false)
      )
      this.getTabBar().setData({
        tabList,
      })
    }
  },
  handleImages() {
    wx.showToast({
      title: "正在清除",
      icon: "loading",
    })

    setTimeout(() => {
      wx.showToast({
        title: "清除成功",
      })
    }, 500)

    wx.previewImage({
      urls: this.data.imgUrl,

      success: (res) => console.log(res),
      fail: (err) => console.log(err),
      complete: () => {
        console.log(111)
      },
    })
  },

  handleAbout() {
    wx.navigateTo({
      url: "/pages/about/about",
    })
  },
})
