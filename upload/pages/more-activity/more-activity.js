import debounce from "../../utils/debounce"
import throttle from "../../utils/throttle"
import { service } from "../../service/service"

import { typeList } from "../../config/activityType"

typeList.unshift({ id: 0, name: "全部" })

Page({
  data: {
    inputValue: null,
    selected: 0,
    typeList,
    activityList: [],
    page: 1,
    searchList: [],
  },

  onLoad() {
    this.getActivityList()
  },

  async getActivityList() {},

  handleInput: debounce(function (e) {
    console.log(e)
    this.setData({
      inputValue: "",
    })
  }, 1000),

  handleClear() {
    this.setData({
      inputValue: "",
    })
  },

  handleSelected(e) {
    const { index, id } = e.currentTarget.dataset

    this.setData({
      selected: index,
    })
  },

  onReachBottom() {},
  onPullDownRefresh() {
    this.setData({
      inputValue: "",
      page: 1,
      searchList: [],
      selected: 0,
      activityList: [],
    })

    this.getActivityList()
  },

  goToDetail(e) {
    const id = e.detail
    wx.navigateTo({
      url: "/pages/activity-detail/activity-detail?id=" + id,
    })
  },
})
