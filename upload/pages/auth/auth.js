import { bdBrainURL } from "../../config/common"

import readFileSync from "../../utils/readFieSync"

import { dbService } from "../../service/service"

Page({
  data: {
    card: "",
    img: "",
    formData: {},
    error: [],
    rules: [
      {
        name: "realname",
        rules: { required: true, message: "姓名不能为空" },
      },
      {
        name: "user_id",
        rules: { required: true, message: "身份证不能为空" },
      },
    ],
    isShowProgress: false,
  },

  // 选择图片识别信息
  async handleSelect(e) {
    let tempPath = e.detail.tempFilePaths

    const card = tempPath.map((item) => {
      return { url: item }
    })

    const filePath = card[0].url

    const imgBase64 = await readFileSync(filePath)

    this.handleIdentifyCard(imgBase64)

    this.setData({
      card,
    })
  },

  // 识别信息
  async handleIdentifyCard(img) {
    const res = await dbService.post({
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: {
        image: img,
        id_card_side: "front",
      },
    })

    console.log(res)

    if (res.idcard_number_type !== 1) {
      wx.showModal({
        title: "提示",
        content: "上传图片错误，请重新上传",
      })

      this.setData({
        formData: {},
      })
      return
    }

    this.setData({
      ["formData.realname"]: res.words_result["姓名"].words,
      ["formData.user_id"]: res.words_result["公民身份号码"].words,
    })
  },

  // 输入
  handleInput(e) {
    console.log(e)
    const field = e.currentTarget.dataset.field

    const value = e.detail.value

    this.setData({
      [`formData.${field}`]: value,
    })
  },

  // 身份证上传
  async handleChooseImage() {
    const res = await wx.chooseMedia({
      count: 1,
      mediaType: ["image"],
      sourceType: ["album", "camera"],
      maxDuration: 30,
      camera: "back",
    })

    if (res) {
      const img = res.tempFiles[0].tempFilePath

      const imgBase64 = await readFileSync(img)

      this.handleIdentifyCard(imgBase64)

      this.setData({
        img,
      })
    }
  },

  // 提交认证
  handleAuth() {
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

    if (error.length > 0) {
      // 验证信息
      this.setData({
        error,
      })
      return
    }

    this.setData({
      isShowProgress: true,
    })
  },

  handleProgress() {
    wx.showModal({
      title: "提示",
      content: "认证成功",
      showCancel: false,
      success: (res) => {
        if (res.confirm) {
          this.setData({
            isShowProgress: false,
          })

          wx.switchTab({
            url: "/pages/my/my",
          })
        }
      },
    })
  },
})
