// components/home-activity-item/home-activity-item.js
Component({
  properties: {
    activityItem: {
      type: Object,
      value: () => {},
    },
    isMy: {
      type: Boolean,
      value: false,
    },
  },

  data: {},

  methods: {
    click(e) {
      const id = e.currentTarget.dataset.id

      this.triggerEvent("click", id)
    },

    show() {
      this.triggerEvent("show")
    },
  },
})
