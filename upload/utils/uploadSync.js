function uploadFile(filePath, name, url) {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      filePath,
      name,
      url,
      success: (res) => resolve(res),
      fail: reject,
    })
  })
}

export default uploadFile
