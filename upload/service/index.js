import { baseURL } from "./config"

const token = wx.getStorageSync("user-info").token

class ServiceInstance {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  request(options) {
    const { url } = options

    return new Promise((resolve, reject) => {
      wx.request({
        ...options,
        url: this.baseURL + url,
        header: {
          token,
          "content-type": "application/x-www-form-urlencoded",
        },
        success: (res) => {
          if (res.data.code !== 200 || res.code !== 200) {
            wx.showModal({
              title: "提示",
              content: res.data.message,
            })
          }
          resolve(res.data)
        },
        fail: reject,
      })
    })
  }

  get(options) {
    return this.request({ ...options, method: "GET" })
  }

  post(options) {
    return this.request({ ...options, method: "POST" })
  }
}

export default ServiceInstance
