Page({
  data: {
    longitude: "",
    latitude: "",
  },

  onLoad(query) {
    const { longitude, latitude } = query

    this.setData({
      longitude,
      latitude,
    })
  },
})
