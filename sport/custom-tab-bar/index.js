const app = getApp()

Component({
  data: {
    tabList: app.data.tabList,
  },
  methods: {
    handleChangeTab(e) {
      const { id, path } = e.currentTarget.dataset
      const tabList = this.data.tabList
      tabList.forEach((v) => {
        if (v.id === id) {
          v.active = true
        } else {
          v.active = false
        }

        this.setData({
          tabList,
        })

        if (id === 2) {
          console.log(path)
          wx.navigateTo({
            url: path,
          })
          return
        }

        wx.switchTab({
          url: path,
        })
      })
    },
  },
})
