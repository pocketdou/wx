// pages/myActivity/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialogShow:false,
    dialogButtons:[{text:'关闭',extClass:'dialogButton'}],
    slideButtons:[
      {
        text: '删除',
        type:'warn',
        extClass: 'test'
      },
    ],
    activityList:[
      {
        id:1,
        imgUrl:'/assest/img/banner02.png',
        title:'112022绍兴上旬',
        time:'报名进行中2天11小时4分34秒'
      },
      {
        id:2,
        imgUrl:'/assest/img/banner02.png',
        title:'222022绍兴上旬',
        time:'报名进行中2天11小时4分34秒'
      }
    ],
    info: {
      headimgurl: '/assest/img/zs.png',
      nickname: '罗大侠',
      nicktype: '同学:',
      diss: '恭喜您在2019-2020年度个人表现突出,特制此奖，以资鼓励:',
      designation: '三好学生',
      date: '2020年01月13日',
      organame: '微信测试中学'
    },
    width: '750rpx',
    height: '660rpx',
    img: ''
  },
  onLoad: function(){
    const that = this
    const query = wx.createSelectorQuery();
    query.select('#canvas').boundingClientRect(function (res) {
        that.setData({
            width: res.width,
            height: res.height
        })
        const { width, height } = that.data
        const { headimgurl, nickname, nicktype, diss, designation, date, organame } = that.data.info
        //写入模板图片
        const ctx = wx.createCanvasContext('canvas')
        ctx.drawImage(headimgurl, 0, 0, width, height)


        //写入获奖人
        ctx.save() 
        ctx.beginPath();//创建路径 
        ctx.setFontSize(16)
        ctx.setLineWidth(1);
        ctx.setFillStyle('#000');
        ctx.fillText( nickname, 80, 156);
true
        //画下划线
        ctx.moveTo(70, 164)
        ctx.lineTo(140, 164)
        ctx.setLineWidth(2);
        ctx.stroke()

        //写昵称
        ctx.beginPath();//创建路径 
        ctx.setFontSize(14)
        ctx.setLineWidth(2);
        ctx.setFillStyle('#333');
        ctx.fillText( nicktype, 140, 156);

        //评语绘制
        if(diss.length > 24){
            //写奖励评语
            ctx.save()
            ctx.beginPath();//创建路径 
            ctx.setFontSize(14)
            ctx.setLineWidth(2);
            ctx.setFillStyle('#333');
            ctx.fillText(diss.substr(0,24), 80, 182);

            //写奖励评语
            ctx.save()
            ctx.beginPath();//创建路径 
            ctx.setFontSize(14)
            ctx.setLineWidth(2);
            ctx.setFillStyle('#333');
            ctx.fillText( diss.substr(24,), 60, 200);
        }else{
             //写奖励评语
            ctx.save()
            ctx.beginPath();//创建路径 
            ctx.setFontSize(14)
            ctx.setLineWidth(2);
            ctx.setFillStyle('#333');
            ctx.fillText( diss, 80, 182);
      }

        //称号绘制
        ctx.save() 
        ctx.beginPath();//创建路径 
        ctx.setFontSize(24)
        ctx.setTextBaseline('middle');//设置文本的垂直对齐方式
        ctx.setTextAlign('center'); //设置文本的水平对对齐方式
        ctx.setLineWidth(2);
        ctx.setFillStyle('#f00');
        ctx.fillText(designation, width/2, 230);

      //写入署名
        ctx.save() 
        ctx.beginPath();//创建路径 
        ctx.setFontSize(8)
        ctx.setTextBaseline('middle');//设置文本的垂直对齐方式
        ctx.setTextAlign('center'); //设置文本的水平对对齐方式
        ctx.setFillStyle('#000');
        ctx.fillText(organame, 320, 260);

        //写入日期
        ctx.save() 
        ctx.beginPath();//创建路径 
        ctx.setFontSize(8)
        ctx.setTextBaseline('middle');//设置文本的垂直对齐方式
        ctx.setTextAlign('center'); //设置文本的水平对对齐方式
        ctx.setFillStyle('#000');
        ctx.fillText(date, 320, 270);

      // 画外圆
        ctx.beginPath()
        ctx.arc(320, 260, 30, 0, 2 * Math.PI)
        ctx.setLineWidth(2)
        ctx.setStrokeStyle('red')
        ctx.stroke()


      //画五角星
      ctx.save()
      
        ctx.translate(320, 260);
        ctx.rotate(Math.PI);//旋转  
        ctx.beginPath();//创建路径  
        var x = Math.sin(0);  
        var y= Math.cos(0);  
        var dig = Math.PI/5 *4;  
        for(var i = 0;i< 5;i++){//画五角星的五条边  
            var x = Math.sin(i*dig);  
            var y = Math.cos(i*dig);  
            ctx.lineTo(x*10, y*10);  
        }
        ctx.setFillStyle('red')
        ctx.setGlobalAlpha(0.6)
        ctx.closePath();  
        ctx.stroke();  
        ctx.fill();  
        ctx.restore();

    
        //绘制单位名称
        ctx.translate(320, 260);// 平移到此位置,
        ctx.setFontSize(10)
        var count =organame.length;// 字数   
        var angle = 4*Math.PI/(3*(count - 1));// 字间角度   
        var chars =organame.split("");   
        var c;
        for (var i = 0; i < count; i++){
            c = chars[i];// 需要绘制的字符   
            if(i==0)
                ctx.rotate(5*Math.PI/6);
            else
                ctx.rotate(angle);
                ctx.save(); 
                ctx.translate(90, 0);// 平移到此位置,此时字和x轴垂直   
                ctx.rotate(Math.PI/2);// 旋转90度,让字平行于x轴   
                ctx.setFillStyle('#f00');
                ctx.setLineWidth(1);
                ctx.fillText(c, 0, 68);// 此点为字的中心点   
                ctx.restore();             
        }

    

        wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width,
            height,
            destWidth: width,
            destHeight: height,
            canvasId: 'canvas',
            success(res) {
                console.log(res.tempFilePath)
                that.setData({
                    img: res.tempFilePath
                })
            },
            fail(err){
                console.log(err)
            }
        })
        ctx.draw()
    }).exec();
},
getPosterHandle: function(){
    console.log(this.data.img)
    wx.saveImageToPhotosAlbum({
        filePath: this.data.img,
        //授权成功，保存图片
        success: function (data) {
            console.log(data)
        }
    })
 },
  hideDialog(){
    this.setData({
      dialogShow:false
    })
  },
  lookzs(){
    console.log('11111');
    this.setData({
      dialogShow:true
    })
  },
  slideDel(e){
    // console.log('e=',e.currentTarget.dataset.index);
    let index = e.currentTarget.dataset.index;
    this.data.activityList.splice(index,1);
    this.setData({
      activityList:this.data.activityList
    })
  },
  
})