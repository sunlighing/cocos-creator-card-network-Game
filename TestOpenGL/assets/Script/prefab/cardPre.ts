// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Label)
  label: cc.Label = null;

  @property(cc.Sprite)
  img: cc.Sprite = null;

  textname = 0;

  cardsort = [
    "king",
    "Knight",
    "Swordman",
    "Princess",
    "monster",
    "duke",
    "dragon",
    "Viscount",
    "vampire",
    "dark man",
    "darkMan"
  ];

  url = [
    "resources/card1/card1.png",
    "resources/card1/card2.png",
    "resources/card1/card3.png",
    "resources/card1/card4.png",
    "resources/card1/card5.png",
    "resources/card1/card6.png",
    "resources/card1/card7.png",
    "resources/card1/card8.png",
    "resources/card1/card9.png",
    "resources/card1/card10.png",
    "resources/card1/card111.png",

  ];

  // LIFE-CYCLE CALLBACKS:

  // onLoad () {}
    
  init(index){
      this.label.string = this.cardsort[index-1];
      this.img.spriteFrame = new cc.SpriteFrame(cc.url.raw(this.url[index - 1]));
      this.textname = index ;
  }

  initLabel(temp: string) {
    this.label.string = temp;
  }

  initSprinte(temp: cc.SpriteFrame) {
    this.img.spriteFrame = temp;
  }

  initname(temp: number) {
    this.textname = temp;
  }

  start() {}

  // update (dt) {}
}
