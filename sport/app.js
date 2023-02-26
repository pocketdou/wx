// app.js
App({
  data: {
    tabList: [
      {
        id: 1,
        text: "首页",
        path: "/pages/home/home",
        active: true,
      },
      {
        id: 2,
        text: "发布",
        path: "/pages/publish/publish",
        active: false,
        special: true,
      },
      {
        id: 3,
        text: "我的",
        path: "/pages/my/my",
        active: false,
      },
    ],
  },
})
