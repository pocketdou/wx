import uploadFile from "../../utils/uploadSync"
import { service } from "../../service/service"

import { typeList } from "../../config/activityType"

Page({
  data: {
    error: "",
    typeList: typeList,
    formData: { cover: [] },
    rules: [
      {
        name: "type",
        rules: { required: true, message: "活动类型不能为空" },
      },
      {
        name: "title",
        rules: [
          { required: true, message: "请填写活动名称" },
          { maxlength: 30, message: "活动名称不超过30个字" },
        ],
      },
      {
        name: "cover",
        rules: { required: true, message: "活动图片不能为空" },
      },

      {
        name: "address",
        rules: { required: true, message: "活动地点不能为空" },
      },

      {
        name: "max",
        rules: [
          { required: true, message: "人数限制不能为空" },
          { range: [0, Infinity], message: "人数不能少于0人" },
        ],
      },

      {
        name: "order_time",
        rules: { required: true, message: "报名截止时间不能为空" },
      },
      {
        name: "start_time",
        rules: { required: true, message: "开始时间不能为空" },
      },
      {
        name: "end_time",
        rules: { required: true, message: "结束时间不能为空" },
      },
    ],
  },
  onLoad() {},

  // 文本输入
  handleInput(e) {
    const value = e.detail.value
    const field = e.currentTarget.dataset.field

    this.setData({
      [`formData.${field}`]: value,
    })
  },

  // 人数限制输入
  handleNumberInput(e) {
    let value = this.validateNumber(e.detail.value)
    this.setData({
      ["formData.max"]: value,
    })
  },
  validateNumber(val) {
    return val.replace(/\D/g, "")
  },

  // 类型选择
  handleTypePicker(e) {
    const index = e.detail.value

    this.setData({
      ["formData.type"]: this.data.typeList[index].id,
    })
  },

  // 图片上传
  handleSelectCover(e) {
    let tempPath = e.detail.tempFilePaths

    // 多图上传需要往这个数组push数据 不是直接覆盖
    let cover = tempPath.map((item) => {
      return { url: item }
    })

    console.log(cover)

    this.setData({
      ["formData.cover"]: [...this.data.formData.cover, ...cover],
    })
  },

  // 删除封面
  handleDeleteCover() {
    this.setData({
      ["formData.cover"]: [],
    })
  },

  // 活动报名时间
  handleOrderTime(e) {
    const order_time = e.detail.value

    this.setData({
      ["formData.order_time"]: order_time,
    })
  },

  // 活动开始时间
  handleStartTime(e) {
    const start_time = e.detail.value

    this.setData({
      ["formData.start_time"]: start_time,
    })
  },

  // 活动结束时间
  handleEndTime(e) {
    const end_time = e.detail.value

    this.setData({
      ["formData.end_time"]: end_time,
    })
  },

  // 提交
  async handleSubmit() {
    let error = []
    let formData = {}

    // 表单校验
    this.selectComponent("#form").validate((valid, errors) => {
      if (!valid) {
        const errMsg = errors.map((error) => error.message)

        error.push(errMsg.join(";"))
        return
      }
    })

    // 图片校验
    if (!this.data.formData.cover) {
      error.push("请上传活动图片")
    }

    // 活动详情校验
    if (!this.data.formData.desc) {
      error.push("请填写活动详情")
    }

    // 时间校验
    const start_time = new Date(this.data.formData.start_time).valueOf()
    const end_time = new Date(this.data.formData.end_time).valueOf()
    const order_time = new Date(this.data.formData.order_time).valueOf()
    const now = new Date().valueOf()

    const diff1 = end_time - start_time
    const diff2 = end_time - order_time

    if (diff1 <= 0) {
      error.push("结束时间应晚于开始时间")
    }
    if (diff2 <= 0) {
      error.push("结束时间应晚于报名截止时间")
    }
    if (order_time - now <= 0) {
      error.push("报名截止时间应晚于当前时间")
    }

    if (error.length > 0) {
      // 验证信息
      this.setData({
        error,
      })
      return
    }

    // 图片上传
    const url = "http://localhost:3000/activity/upload"
    const coverFilePath = this.data.formData.cover[0].url

    const cover = await uploadFile(coverFilePath, "cover", url)

    console.log(cover)

    // 表单参数
    formData.cover = cover.data
    formData.user_id = wx.getStorageSync("user-detail").id
    formData.type = this.data.formData.type
    formData.title = this.data.formData.title
    formData.desc = this.data.formData.desc
    formData.address = this.data.formData.address
    formData.max = this.data.formData.max
    formData.order_time = this.data.formData.order_time
    formData.start_time = this.data.formData.start_time
    formData.end_time = this.data.formData.end_time

    const res = await service.post({
      url: "/activity/create",
      data: formData,
    })
    console.log(res)

    if (res.errno) {
      wx.showModal({
        title: res.data.message,
      })
      return
    }

    wx.showModal({
      title: res.message,
      showCancel: false,
      success: () => {
        wx.navigateBack({
          delta: 0,
        })
      },
    })
  },
})
