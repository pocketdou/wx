// pages/activity/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // txtHidden:true,
    disabled:'',
    detailList:[
      {
        id:1,
        title:'赛事信息',
        con:`赛事名称
        第五届＂国缘杯＂江西·万载·罗城半程马拉松赛

        主办单位
        中共万载县委宣传部

        万载县全民健身促进中心

        万载县罗城镇人民政府

        承办单位
        万载县红十字会

        万载县体育总会

        万载县志愿者协会罗城分会

        冠名单位
        江苏今世缘酒业股份有限公司

        运营单位
        北京中奥乐跑体育文化传媒有限公司

        支持单位
        万载县融媒体中心

        宜春市路跑运动协会

        媒体推广
        宜春发布、万载电视台、万载发布、万载在线、万载身边事、拇指万载、万载文旅

        比赛时间和地点
        1、时间：2022年12月11日 9:00

        2、地点：江西省万载县罗城镇九龙原始森林景区

        比赛项目
        1、男女半程马拉松（21.0975公里）

        2、半程马拉松团体赛

        3、迷你马拉松/亲子跑`
      },
      {
        id:2,
        title:'竞赛规程',
        con:`（一）按照中国田径协会审定的《世界田联竞赛与技术规则》、《世界田联标牌路跑赛事规则》（2021版）、《中国田径协会路跑管理文件汇编》（2022版）及本次比赛竞赛规程相关规定执行。

        （二）按照中国田径协会《关于残疾人选手参加全国马拉松及相关运动赛事的通知》，允许符合参赛条件的残疾人选手参加本次比赛（参赛选手须在组委会指定的区域集结、检录，比赛时统一出发）。
        
        （三）所有选手须在比赛过程中自始至终正确佩戴赛事号码布，将号码布佩戴在胸前，切勿用衣物、腰包等物品遮挡号码布。如选手私自折叠、遮挡、撕毁、损坏号码布，将取消参赛资格，不能检录入场，无法取得赛事成绩及完赛物品。未按规定佩戴号码布芯片，导致计时点未记录成绩者，将取消比赛成绩。如选手私自涂改、制作、转让、贩卖号码布，将按本次赛事处罚办法进行处罚，且发生的一切事故，由原号码布持有者负全部责任。
        
        （四）比赛检录：选手检录时间为比赛日12月11日上午6:30—7:45，选手至少在赛前60分钟到达指定区域进行检录集结，按竞赛项目分别进行检录。精英选手须在赛前40分钟到火把广场起点专门检录区进行检录，检录时须出示运动员注册卡或身份证原件。请选手合理安排出行时间，提早到达起点检录。选手入场通过号码布查验后，进入相应集结区。
        
        （五）起跑顺序：按马拉松（精英选手、大众选手）、半程马拉松、迷你健康跑项目的顺序分区检录集结，各项目间距20米。非竞速轮椅选手须在大众选手分区站位最尾端出发。
        
        （六）发令：本次比赛采用一枪发令各项目同时起跑的办法。如果选手无效起跑，不会被叫停，裁判将直接取消其参赛资格。
        
        （七）比赛计时
        
        1、本次比赛对马拉松项目和半程马拉松项目采用感应计时办法，感应计时芯片将在选手通过起点开始计时，迷你健康跑不记取成绩；
        
        2、在起点、每5公里点、远端折返点和终点均设有计时感应地毯，选手在跑进过程中，必须逐一通过所有的地面计时感应地毯。在关门时间内完成比赛但缺少任何一个计时点的成绩，将不予排名。除起点外，两个计时芯片在多个计时感应点的误差少于1秒，也将取消相关者的成绩；
        
        3、计时芯片将在参赛物品领取现场与号码布等参赛物品同时发放，本次比赛采用一次性计时芯片，不收取芯片押金。
        
        （八）关门距离和时间
        
        为了保证参赛选手比赛安全，限时对社会交通进行滚动封闭。比赛路线各段专设了赛事关门时间，到了关门时间，相应公里点的计时地毯停止工作，相应路段将恢复社会交通。在规定关门时间内，未跑完对应距离的参赛选手须立即停止比赛，退出赛道，以免发生危险。退出比赛的选手等候组委会提供的援助车或选乘公共交通抵达终点。
        
        关门时间（以08:00发令枪声时间为准）具体见下表：`
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let list = [];
    for(let i in this.data.detailList){
      this.data.detailList[i].txtHidden = false
      list.push(this.data.detailList[i])
    }
    this.setData({
      detailList:list
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },
  txtToggle(e){
    // console.log('e=',e);
    let index = e.currentTarget.dataset.index;
    // console.log('index=',index);
    let list = this.data.detailList;
    // console.log('list=',list);
    list[index].txtHidden = !list[index].txtHidden;
    this.setData({
      detailList:list
    })
  },
  activity_apply(){
    let that = this;
    wx.showModal({
      title:'温馨提示',
      content:'确定报名吗?',
      success(res){
        if(res.confirm){
          wx.showToast({
            title: '报名成功',
            success(){
              that.setData({
                disabled:'disabled'
              })
            }
          })
        }
      }
    })
  }
})