// index.js
Page({
  data: {
    red: "bg",
    showIndex: 10,
    questList: [
      {
        title: "马拉松比赛",
        content:
          "规则1规则1规则1规则1规则1规则1规则1规则1规则1规则1规则1规则1规则1规则1规则1",
        t: false,
      },
      {
        title: "Q：这是问题",
        content:
          "A：答案内答案内容答案内容答案内容答案内容答案内容答案内容容容答案内容容容答案内容容",
        t: false,
      },
      {
        title: "Q：这是问题",
        content:
          "A：答案内答案内容答案内容答案内容答案内容答案内容答案内容容容答案内容容容答案内容容",
        t: false,
      },
    ],
    list: [
      {
        title: "马拉松比赛",
        content:
          "规则1规则1规则1规则1规则1规则1规则1规则1规则1规则1规则1规则1规则1规则1规则1",
        t: false,
      },
      {
        title: "Q：这是问题",
        content:
          "A：答案内答案内容答案内容答案内容答案内容答案内容答案内容容容答案内容容容答案内容容",
        t: false,
      },
      {
        title: "Q：这是问题",
        content:
          "A：答案内答案内容答案内容答案内容答案内容答案内容答案内容容容答案内容容容答案内容容",
        t: false,
      },
    ],
  },

  panel: function (e) {
    this.data.questList[e.currentTarget.dataset.index].t = !this.data.questList[
      e.currentTarget.dataset.index
    ].t
    this.setData({
      questList: this.data.questList,
    })
    if (e.currentTarget.dataset.index != this.data.showIndex) {
      this.setData({
        showIndex: e.currentTarget.dataset.index,
      })
    } else {
      this.setData({
        showIndex: 10,
      })
    }
  },
  onLoad() {},
})
