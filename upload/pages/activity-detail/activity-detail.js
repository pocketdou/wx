import { service } from "../../service/service"
import { btnActivityList } from "../../config/index"

import { baseURL } from "../../service/config"

Page({
  data: {
    activityDetail: {
      type: 5,
      user: {
        name: "李白",
      },
      cover: "/assets/images/activity/2.png",
      title: "马拉松比赛",
      address: "城南新区新都街道紫薇广场C区10259号",
      max: 0,
      desc: "线下马拉松",
      order_time: "2022-10-28 14:56",
      start_time: "2022-10-28 14:56",
      end_time: "2022-10-28 17:56",
      status: 1,
    },
    baseURL,
    id: -1,
    count: 0,
    cover: "",
    btnActivityList,
  },
  onLoad(options) {
    const id = options.id
    this.setData({
      id,
    })
    // this.getActivityDetail(id)
    // this.getActivityCount()
  },

  async getActivityDetail(id) {
    const res = await service.get({
      url: "/activity/detail-activity?id=" + id,
    })

    if (res.errno === 0) {
      this.setData({
        activityDetail: res.data,
        cover: baseURL + "/activity/" + res.data.cover,
      })
    }
  },

  async getActivityCount() {
    const id = this.data.id
    const res = await service.post({
      url: "/userwithactivity/count",
      data: {
        id,
      },
    })

    if (res.errno === 0) {
      this.setData({
        count: res.data,
      })
    }
  },

  async handleJoinActivity() {
    let formData = {}

    const user_id = wx.getStorageSync("user-detail").id
    const activity_id = parseInt(this.data.id)

    formData.user_id = user_id
    formData.activity_id = activity_id

    const res = await service.post({
      url: "/userwithactivity/create-participant",
      data: formData,
    })

    console.log(res)

    wx.showModal({
      title: res.message,
      showCancel: false,
    })
  },

  handleJoin() {
    if (this.data.activityDetail.status !== 1) return

    wx.showModal({
      title: "提示",
      content: "报名成功",
      success: (res) => {
        if (res.confirm) {
          this.setData({
            ["activityDetail.status"]: 5,
          })
        }
      },
    })
  },
})
