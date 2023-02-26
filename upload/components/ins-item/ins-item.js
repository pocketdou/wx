Component({
  properties: {
    list: {
      type: Array,
      value: () => [],
    },
  },

  methods: {
    panel(e) {
      this.properties.list[e.currentTarget.dataset.index].t = !this.properties
        .list[e.currentTarget.dataset.index].t
      this.setData({
        list: this.properties.list,
      })
      if (e.currentTarget.dataset.index != this.properties.showIndex) {
        this.setData({
          showIndex: e.currentTarget.dataset.index,
        })
      } else {
        this.setData({
          showIndex: 10,
        })
      }
    },
  },
})
