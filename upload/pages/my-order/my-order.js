Page({
  data: {
    isShowCert: false,
  },

  showPopup() {
    this.setData({
      isShowCert: true,
    })
  },

  handleClosePopup() {
    this.setData({
      isShowCert: false,
    })
  },
})
