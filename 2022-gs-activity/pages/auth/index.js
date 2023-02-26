// pages/auth/index.js
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
        name:'files',
        rules:[
          {
            required:true,
            message:'请上传图片',
          }
        ]
      },
      {
        name:'username',
        rules:[
          {
            required:true,
            message:'请上传身份证',
          }
        ]
      },
      {
        name:'idnumber',
        rules:[
          {
            required:true,
            message:'请上传身份证',
          }
        ]
      }
    ],
    base64Img:'',
    access_token:'',
    username:'',
    idnumber:''
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
  handbindselect(e){
    let tempPath = e.detail.tempFilePaths
    // console.log('tempPath=',tempPath[0]);
    let file = {
      url:tempPath[0]
    }

    this.data.formData.files.push(file)

    this.setData({
      formData:this.data.formData
    })
    // console.log('222=',this.data.formData);
    this.FileSystemManager(tempPath[0]);
  },
  FileSystemManager(img){
    // console.log('filesystem=');
    wx.showLoading();
    let that = this;
    wx.getFileSystemManager().readFile({
      filePath:img,
      encoding:'base64',
      success(res){
        // console.log('res=',res.data);
        that.setData({
          base64Img:res.data
        })
        // console.log('base64Img=',that.data.base64Img);
        that.OCRoauth();
      }
    })
  },
  OCRoauth(){
    let that = this;
    let data = {
      grant_type:'client_credentials',
      client_id:'6HZ1HFF4GyylVgVuEG5BoE77',
      client_secret:'HysiYOb2GwWbKh5HIkfT8aP03ziYGAYQ'
    }
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token',
      data: data,
      dataType: 'json',
      header: {
        "Content-Type":'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: (res) => {
        // console.log('res=',res);
        that.setData({
          access_token:res.data.access_token
        })
        that.ORC_accurate_basic();
      }
    })
  },
  ORC_accurate_basic(){
    let that = this;
    let data = {
      image:this.data.base64Img,
      id_card_side:'front'
    }
    wx.request({
      url: 'https://aip.baidubce.com/rest/2.0/ocr/v1/idcard?access_token='+this.data.access_token,
      data: data,
      dataType: 'json',
      header: {
        "Content-Type":'application/x-www-form-urlencoded',
      },
      method: 'POST',
      success: (res) => {
        wx.hideLoading();
        // console.log('res222=',res);
        this.setData({
          username:res.data.words_result.姓名.words,
          idnumber:res.data.words_result.公民身份号码.words,
          [`formData.username`]:res.data.words_result.姓名.words,
          [`formData.idnumber`]:res.data.words_result.公民身份号码.words,
        })
      }
    })
  }
})