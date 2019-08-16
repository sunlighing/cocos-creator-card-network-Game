import { Sprite } from '../../../creator';
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
  @property(cc.Sprite)
  loadin_node: cc.Sprite = null;

  // LIFE-CYCLE CALLBACKS:

   onLoad () {
     let animation = this.loadin_node.getComponent(cc.Animation)

     var frames: Array<cc.SpriteFrame> = [];

     for (let i = 0; i <= 38; i++) {
       frames[i] = new cc.SpriteFrame(cc.url.raw("resources/clip/" + i.toString() + ".png"));
     }

     var clip = cc.AnimationClip.createWithSpriteFrames(frames, 38);
     clip.name = 'anim_boom';
     clip.wrapMode = cc.WrapMode.Loop;

     animation.addClip(clip);
     animation.play('anim_boom');
   }
  
  

  start() {}

  // update (dt) {}
}
