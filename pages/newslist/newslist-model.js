import {Base} from '../../utils/base.js';
class Newslist extends Base{
  constructor(){
    super();
  }
  getNewslist(id,callBack){
    var obj = {
      url:'getArticle?id=' + id,
      sCallback:function(res){
        callBack && callBack(res);
      }
    };
    this.requset(obj);
  }
}
export {Newslist}