Page({
  data: {
    imgUrl: "/assets/images/my/cert.jpg",
    imgInfo: {},
    paintUrl: "",
  },

  async onLoad() {
    const res = await wx.getSystemInfo()
    console.log(res.pixelRatio)

    this.setData({
      pixelRatio: res.pixelRatio,
    })

    wx.getImageInfo({
      src: "/assets/images/my/cert.jpg",
      success: (res) => {
        console.log(res)
        this.setData({
          imgInfo: res,
        })
      },
    })
  },
  onShow() {
    this.onCanvas()
  },

  async chooseImage() {
    await wx.chooseMedia({
      count: 1,
      mediaType: ["image", "video"],
      sourceType: ["album", "camera"],
      maxDuration: 30,
      camera: "back",
      success: (res) => {
        console.log(res)
      },
      fail: (err) => {
        console.log(err)
      },
    })

    return

    this.setData({
      imgUrl: res.tempFiles[0].tempFilePath,
    })

    this.onCanvas()
  },

  // 初始化canvas
  onCanvas() {
    wx.createSelectorQuery()
      .select("#myCanvas") // 在 WXML 中填入的 id
      .fields({ node: true, size: true })
      .exec((res) => {
        // Canvas 对象
        const canvas = res[0].node
        // 渲染上下文
        const ctx = canvas.getContext("2d")
        const dpr = wx.getSystemInfoSync()
          .pixelRatio
        canvas.width = res[0].width * dpr
        canvas.height = res[0].height * dpr
        ctx.scale(dpr, dpr)

        const image = canvas.createImage()

        image.onload = () => {
          ctx.drawImage(
            image,
            0,
            0,
            690,
            460,
            0,
            0,
            345,
            230
          )
          ctx.font = "20px sans-serif"
          ctx.fillText("恭喜 孟庭伟同学", 50, 120)
          ctx.fillText(
            "在20KM长跑获得第一名",
            50,
            150
          )

          wx.canvasToTempFilePath({
            canvas,
            quality: 0.1,

            success: async (res) => {
              const path = res.tempFilePath
              wx.getFileInfo({
                filePath: path,
                success: (res) => {
                  console.log(res)
                },
              })
              // console.log(path)
              this.setData({
                paintUrl: path,
              })
            },
          })
        }

        image.src = this.data.imgUrl
      })
  },

  handleSave() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.paintUrl,
    })
  },
})
