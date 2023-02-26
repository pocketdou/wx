// pages/reg/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    error: '',
    rules:[
      {
        name:'username',
        rules:[
          {
            required:true,
            message:'用户名必填'
          }
        ]
      },
      {
        name:'password',
        rules:[
          {
            required:true,
            message:'密码必填'
          },
          {
            minlength:6,
            message:'密码最小长度为6'
          }
        ]
      },
      // {
      //   name:'qrpassword',
      //   rules:[
      //     {
      //       equalTo:'password',
      //       message:'密码不一致'
      //     }
      //   ]
      // }
    ],
    formData:{}
  },

  formInputChange(e){
    console.log('e=',e);
    const {field} = e.currentTarget.dataset;
    console.log(field);
    this.setData({
      [`formData.${field}`]:e.detail.value
    })
    console.log('formData=',this.data.formData);
  },
  submitForm(){
    this.selectComponent('#form').validate((valid,errors)=>{
      console.log('valid=',valid);
      console.log('errors=',errors);
      if(!valid){
        const firstError = Object.keys(errors);
        // console.log('firstError=',firstError);
        if(firstError.length){
          this.setData({
            error: errors[firstError[0]].message
          })
        }
       
      }else{
        wx.showToast({
          title: '校验通过'
        })
      }
    })
  }
})