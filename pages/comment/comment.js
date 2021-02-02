// pages/comment/comment.js
import {Comment} from './comment-model'
var comment = new Comment()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    boothId:'',
    userId:1,
    CommentData:[],
    commentWords:[],
    stars:'',
    imgs:"",
    fileList: [],
    show: false,
    show2:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadCommentList(options.boothId)
    this.setData({
      boothId:options.boothId
    })
    this.addComment()
  },
  loadCommentList(id){
    comment.getCommentdata(id,(res)=>{ 
      res.data.CommentList.filter(item=>{
        let times = item.created_at.split(' ');
        item.created_at = times
        // console.log(item.created_at)
        return item.created_at
      })
      this.setData({
        CommentData:res.data.CommentList,
      })
    })
  },
  showPopup() {
    this.setData({ 
      show: true
    });
    setTimeout(()=>{
      this.setData({ 
        show2: true
      })
    },400);
  },
  onClose() {
    this.setData({
      show: false,
      show2:false
    });
  },
  addComment(){
    var obj = {
      boothId:this.data.boothId,
      userId:this.data.userId,
      text:this.data.commentWords,
      imgs:this.data.imgs,
      stars:this.data.stars,
    };
    comment.addComment(obj,(res)=>{
      // console.log(res);
    });
    this.loadData(this.data.boothId);
  },
  getwords(e){
    this.setData({
      commentWords:e.detail.value
    })
  },
  onChange(event) {
    this.setData({
      stars: event.detail
    });
  },
  addComment(){
    var obj = {
      boothId:this.data.boothId,
      userId:this.data.userId,
      text:this.data.commentWords,
      imgs:this.data.imgs,
      stars:this.data.stars,
    };
    comment.addComment(obj,(res)=>{
      // console.log(res);
    });
    this.loadData(this.data.boothId);
  },
  // afterRead(event) {
  //   const { file } = event.detail;
  //   console.log(file);
 
  //   // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
  //   wx.uploadFile({
  //     header: {
  //       'content-type': 'multipart/form-data'
  //     },
  //     url: 'http://localhost/msfse/api/v1/uploadsFile', // 仅为示例，非真实的接口地址
  //     filePath: file.url,
  //     name: 'file',
  //     formData: { user: 'test',file:file },
  //     success(res) {
  //       // console.log(res.data);
  //       console.log(JSON.parse(res.data));
  //       // 上传完成需要更新 fileList
  //       // const { fileList = [] } = this.data;
  //       // fileList.push({ ...file, url: res.data });
  //       // this.setData({ fileList });
  //     },
  //   });
  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})