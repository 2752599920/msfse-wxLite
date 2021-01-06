import {Base} from '../../utils/base.js';
class Comment extends Base{
  constructor(){
    super();
  }
  getCommentdata(id,callBack){
    // console.log(id);
    var obj = {
      url:`getCommentList?boothId=${id}`,
      sCallback:function(res){
        // console.log(res);
        callBack && callBack(res);
      }
    };
    this.requset(obj);
  }
  addComment(addData,callBack){
    var data = `boothId=${addData.boothId}&userId=${addData.userId}&text=${addData.text}&imgs=${addData.imgs}&stars=${addData.stars}`;
    var obj = {
      url:`addComment?${data}`,
      sCallback:function(res){
        // console.log(res);
        callBack && callBack(res);
        
      }
    };
    this.requset(obj);
  }

}
export {Comment}