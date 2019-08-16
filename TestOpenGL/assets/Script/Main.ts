
import dataMgr from "./dataMgr"
import prefabMgr from './prefabMgr';
import { clientDefineGame1} from './headDine'


/**
 * 主要的管理场景其他的都以预制体加载进来
 * 
 */


const {ccclass, property} = cc._decorator;

@ccclass
export default class MainSence extends cc.Component {
  

 

  onLoad() { 
   
    dataMgr.getInstance(); //初始化网络消息
  }

  start() {
    // ini(t logic
    cc.log("loadSecen before ==>", prefabMgr.getInstance().getfabMgr().get("login").size())
    
    let node = prefabMgr.getInstance().getfabMgr().get("login").get();

    cc.log("loadSecen after", prefabMgr.getInstance().getfabMgr().get("login").size());

    this.node.getChildByName('0').addChild(node,0,"login");  //加入最底层
    
    

    cc.systemEvent.on(clientDefineGame1.loginEvent,this.logintoHall.bind(this));   //进入大厅
    cc.systemEvent.on(clientDefineGame1.hallIntoGameScene, this.hallToGame.bind(this));   //进入游戏
  }

  logintoHall(){

    let loginode = this.node.getChildByName('0').getChildByName("login")
    cc.log("loadhall before ==>",prefabMgr.getInstance().getfabMgr().get("login").size()); 

    prefabMgr.getInstance().getfabMgr().get("login").put(loginode);   //登录的节点重新放回去

    cc.log("loadhall after ==>", prefabMgr.getInstance().getfabMgr().get("login").size()); 
  
    let hallNode =prefabMgr.getInstance().getfabMgr().get("hall").get()

    this.node.getChildByName("0").addChild(hallNode,0,"hall");

  }
  
  hallToGame(){
    let loginode = this.node.getChildByName('0').getChildByName("hall")
    cc.log("loadhall before ==>", prefabMgr.getInstance().getfabMgr().get("hall").size());

    prefabMgr.getInstance().getfabMgr().get("login").put(loginode);   //登录的节点重新放回去

    cc.log("loadhall after ==>", prefabMgr.getInstance().getfabMgr().get("hall").size());

    let gameNode = prefabMgr.getInstance().getfabMgr().get("gameSence").get()

    this.node.getChildByName("0").addChild(gameNode, 0, "gameSence");
  }

  gameToHall(){

  }


}
