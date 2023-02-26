import { encode, decode } from "../../utils/pwd"

Page({
  data: {
    userInfo: null,
    formData: {},
    error: [],
    rules: [
      {
        name: "username",
        rules: { required: true, message: "用户名不能为空" },
      },
      {
        name: "password",
        rules: { required: true, message: "密码不能为空" },
      },
    ],
  },

  onLoad() {
    const userInfo = wx.getStorageSync("user-info")

    const code = encode("你好哇")
    decode(code)

    if (userInfo) {
      this.setData({
        userInfo,
      })
    }
  },

  // 解决需要点击两次问题
  onShow() {
    if (typeof this.getTabBar === "function" && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2,
      })
    }
  },

  handleInput(e) {
    const field = e.currentTarget.dataset.field
    const value = e.detail.value

    this.setData({
      [`formData.${field}`]: value,
    })
  },

  // 登录
  handleLogin() {
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

    const userInfo = {
      avatar: "/assets/images/my/avatar.jpg",
      nickname: "boom米花",
      uid: 4602,
    }

    this.setData({
      userInfo,
    })

    wx.setStorageSync("user-info", userInfo)
  },

  // 打开设置
  goToSetting() {
    wx.openSetting({
      withSubscriptions: true,
    })
  },

  // 实名认证
  goToAuth() {
    if (this.data.userInfo.is_cert) {
      wx.showModal({
        title: "提示",
        content: "已实名",
      })

      return
    }
    wx.navigateTo({
      url: "/pages/auth/auth",
    })
  },

  // 我的报名
  goToMyOrder() {
    wx.navigateTo({
      url: "/pages/my-order/my-order",
    })
  },
})
