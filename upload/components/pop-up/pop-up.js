Component({
  properties: {
    // 是否遮罩
    isMask: {
      type: Boolean,
      value: true,
    },
    // 弹出层显示
    isShow: {
      type: Boolean,
      value: true,
    },
  },

  data: {},

  methods: {
    closePopup() {
      this.triggerEvent("close")
    },
  },
})
