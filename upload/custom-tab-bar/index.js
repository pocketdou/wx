Component({
  data: {
    selected: 0,
    color: "#caced9",
    selectedColor: "#fe641d",
    list: [
      {
        pagePath: "/pages/home/home",
        iconPath: "/assets/images/tabbar/1.png",
        selectedIconPath: "/assets/images/tabbar/1-b.png",
        text: "首页",
      },

      {
        pagePath: "/pages/publish/publish",
        iconPath: "/assets/images/tabbar/add.png",
        selectedIconPath: "/assets/images/tabbar/add.png",
        isSpecial: true,
        text: "发布",
      },

      {
        pagePath: "/pages/my/my",
        iconPath: "/assets/images/tabbar/4.png",
        selectedIconPath: "/assets/images/tabbar/4-b.png",
        text: "我的",
      },
    ],
  },

  attached() {},

  methods: {
    switchTab(e) {
      const { index, path } = e.currentTarget.dataset

      this.setData({
        selected: index,
      })

      if (index === 1) {
        wx.navigateTo({
          url: "/pages/publish/publish",
        })
      }
      wx.switchTab({
        url: path,
      })
    },
  },
})
