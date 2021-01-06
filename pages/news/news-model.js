import {Base} from '../../utils/base.js';
class News extends Base{
  constructor(){
    super();
  }
  getArticleList(callBack){
    var obj = {
      url:'getArticleList',
      sCallback:function(res){
        callBack && callBack(res);
      }
    };
    this.requset(obj);
  }
}
export {News}