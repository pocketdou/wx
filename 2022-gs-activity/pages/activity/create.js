// pages/activity/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    error:'',
    formData:{
      files:[]
    },
    rules:[
      {
        name:'type',
        rules:[
          {
            required:true,
            message:'请选择活动类型',
          }
        ]
      },
      {
        name:'title',
        rules:[
          {
            required:true,
            message:'活动名称必填',
          }
        ]
      },
      {
        name:'files',
        rules:[
          {
            required:true,
            message:'请上传图片',
          },
          {
            min:3,
            message:'上传图片数量至少3张'
          }
        ]
      },
      {
        name:'text',
        rules:[
          {
            required:true,
            message:'请填写活动详情',
          }
        ]
      },
      {
        name:'address',
        rules:[
          {
            required:true,
            message:'请填写活动地址',
          }
        ]
      }
    ],
    activityArrayIndex:'',
    activityArray: [
      {
        id: 0,
        name: '田径'
      },
      {
        id: 1,
        name: '游泳'
      },
      {
        id: 2,
        name: '武术'
      },
      {
        id: 3,
        name: '举重'
      }
    ],
    date: '',
    startTime:'',
    endTime:''
  },
  onLoad: function (options) {
    this.getTabBar().setData({
      selected:1
    })
  }, 

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },
  formInputChange(e){
    // console.log('e=',e);
    const {field} = e.currentTarget.dataset;
    // console.log('field=',field);
    this.setData({
      [`formData.${field}`]:e.detail.value
    })
  },
  submitForm(){
    this.selectComponent('#form').validate((valid,errors)=>{
      console.log('valid=',valid);
      console.log('errors=',errors);
      console.log('field=',this.data.formData);
      if(!valid){
        const firstError = Object.keys(errors);
        if(firstError.length){
          this.setData({
            error:errors[firstError[0]].message
          })
        }
      }else{
        wx.showToast({
          title: '校验通过',
        })
      }
    })
  },
  bindPickerChange(e){
    // console.log('e=',e);
    const {field} = e.currentTarget.dataset;
    this.setData({
      activityArrayIndex:e.detail.value,
      [`formData.${field}`]:e.detail.value
    })
  },
  handbindselect(e){
    let tempPath = e.detail.tempFilePaths
    // console.log('tempPath=',tempPath);
    let file = {
      url:tempPath[0]
    }
    // console.log('file=',file);
    // arrays.push(file);
    this.data.formData.files.push(file)
    // this.data.formData.push()
    // let files = [
    //   url:e.detail.tempFilePaths[0]
    // ]
    this.setData({
      formData:this.data.formData
    })
    // console.log('222=',this.data.formData);
  }
})