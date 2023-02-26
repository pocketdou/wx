import qqmapsdk from "../../utils/location"

Page({
  data: {
    bannerList: [
      {
        id: 1,
        img: "/assets/images/home/item_01.jpg",
      },
      {
        id: 2,
        img: "/assets/images/home/item_02.jpg",
      },
      {
        id: 3,
        img: "/assets/images/home/item_03.jpg",
      },
      {
        id: 4,
        img: "/assets/images/home/item_04.jpg",
      },
      {
        id: 5,
        img: "/assets/images/home/item_05.jpg",
      },
    ],

    location: "",
    longitude: "",

    latitude: "",
  },

  onLoad() {
    this.getPosition()
  },

  async getPosition() {
    const { latitude, longitude } = await wx.getLocation({
      type: "wgs84",
    })

    this.setData({
      latitude,
      longitude,
    })

    const res = await qqmapsdk.reverseGeocoder({
      location: {
        latitude,
        longitude,
      },
      success: (res) => {
        this.setData({
          location: res.result.address,
        })
      },
    })
  },

  onShow() {
    if (typeof this.getTabBar === "function" && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0,
      })
    }
  },

  goToMore() {
    wx.navigateTo({
      url: "/pages/more-activity/more-activity",
    })
  },

  goToMap() {
    wx.navigateTo({
      url: `/pages/map/map?longitude=${this.data.longitude}&latitude=${this.data.latitude}`,
    })
  },

  goToDetail(e) {
    const id = e.detail

    wx.navigateTo({
      url: "/pages/activity-detail/activity-detail?id=" + id,
    })
  },
})
