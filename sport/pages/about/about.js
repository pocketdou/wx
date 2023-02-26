// pages/about/about.js
Page({
  data: {
    flag: false,
    aboutList: [
      {
        text:
          "户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分",
        active: false,
      },
      {
        text:
          "户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分",
        active: false,
      },
      {
        text:
          "户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分",
        active: false,
      },
      {
        text:
          "户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分",
        active: false,
      },
      {
        text:
          "户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分户籍的实际得分",
        active: false,
      },
    ],
  },
  handleShow(e) {
    const { index } = e.currentTarget.dataset

    const aboutList = this.data.aboutList

    aboutList[index].active = !aboutList[index]
      .active

    this.setData({
      aboutList,
    })
  },
})
