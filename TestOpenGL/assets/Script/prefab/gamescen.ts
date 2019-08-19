import DataMannager from "../dataMgr";
import { clientDefineGame1 } from '../headDine'
import PlayerData from '../PlayerData';
import prefabMgr from '../prefabMgr';
import { setPoints } from '../../../creator';


const { ccclass, property } = cc._decorator;

@ccclass
export default class gameSence extends cc.Component {
  //游戏界面

  @property(cc.Node)
  barrelNode: cc.Node = null;

  @property(cc.Node)
  cardPoolNode: cc.Node = null;

  @property(cc.Button)
  kaipaibutton1: cc.Button = null;

  @property(cc.Button)
  Button1: cc.Button = null;

  @property(cc.Button)
  Button2: cc.Button = null;

  @property(cc.Button)
  Button3: cc.Button = null ;
    
  @property(cc.Sprite) 
  myHead:cc.Sprite = null;
    
  @property(cc.Sprite)
  enemyHead:cc.Sprite = null;

  @property(cc.Node)
  cardNode:cc.Node  =null

  buttonIndex = 0 

  // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //初始化第一步，随机头像 
        
        
        //魔法桶隐藏 
        this.barrelNode.active = false;
        
        //添加监听事件
    
        this.listenEvent()

        //增加更新服务器消息
        cc.systemEvent.on(clientDefineGame1.servceGameUpdata,this.servceGame.bind(this))
    }
    
    listenEvent(){

        this.Button1.node.on("click",function(){
            if (this.buttonIndex==0 ){
                this.buttonIndex = this.buttonIndex +1 ;
                PlayerData.getInstance().setWsSendData(
                    PlayerData.getInstance().getGameCard()
                );
                DataMannager.getInstance().send()
            }    
        }.bind(this))

        this.Button2.node.on("click",function(){
            if (this.buttonIndex == 1) {
                this.buttonIndex = this.buttonIndex + 1;
                PlayerData.getInstance().setWsSendData(
                  PlayerData.getInstance().getGameCard()
                );
                DataMannager.getInstance().send()
            }
        }.bind(this))

        this.Button3.node.on("click",function(){
            if (this.buttonIndex == 2) {
                this.buttonIndex = this.buttonIndex + 1;
                PlayerData.getInstance().setWsSendData(
                  PlayerData.getInstance().getGameCard()
                );
                DataMannager.getInstance().send()
            }
        }.bind(this))

        this.kaipaibutton1.node.on("click",function(){
            
        })
        
    }

    servceGame(){
        if (PlayerData.getInstance().getGameCommand() ==0x01){
            //prefabMgr.getInstance().fabMgr.gethi
            this.lidtoOn()
        } else if (PlayerData.getInstance().getGameCommand() == 0x02){
            
        }
    }


    lidtoOn(){
        console.log("开始开盖子动作")
        this.barrelNode.active = true
        this.barrelNode.getChildByName("lid").runAction(cc.sequence(cc.moveTo(1,cc.v2(0,230)),cc.callFunc(function(){
            this.barrelNode.active = false 
            this.barrelNode.getChildByName("lid").setPosition(0, 47)
            let node = prefabMgr.getInstance().getfabMgr().get("cardPre").get();
            console.log(node);
            node.getComponent("cardPre").init(PlayerData.getInstance().getGameMeCard())
            
            this.cardNode.addChild(node);

        },this)))
        
    }

    start() {}

  // update (dt) {}
}
