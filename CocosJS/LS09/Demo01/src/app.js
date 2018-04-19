
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.WHITE));
        var layer1 = new cc.Sprite(res.Bg_jpg);
        layer1.ignoreAnchor = false;
        layer1.setPosition(size.width/2,size.height/2);
        this.addChild(layer1);

        //添加精灵方法一：
        var sprite1 = new cc.Sprite(res.Spider_png);
        sprite1.setPosition(size.width/2,size.height*0.7);
        this.addChild(sprite1);

        //添加精灵方法二：
        cc.spriteFrameCache.addSpriteFrames(res.Enemy11_plist,res.Enemy11_png);
        var sp2 = new cc.Sprite('#11_L_wk_00001.png');
        sp2.setPosition(size.width/2,size.height*0.5);
        this.addChild(sp2);

        //添加精灵方法三：
        cc.spriteFrameCache.addSpriteFrames(res.Enemy11_plist,res.Enemy11_png);
        var spriteFrame = cc.spriteFrameCache.getSpriteFrame('11_L_wk_00004.png');
        var sp3 = new cc.Sprite(spriteFrame);
        sp3.setPosition(size.width/2,size.height*0.3);
        this.addChild(sp3);

        var move1 = new cc.MenuItemFont("移动",function(){
            sp2.y -= 5;
            if(cc.rectContainsPoint(sp3.getBoundingBox(),sp2.getPosition())){
                cc.log("碰到了");
                sp2.y = size.height*0.5;
            }
        },this);
        var menu = new cc.Menu(move1);
        menu.setPosition(0,0);
        move1.setPosition(size.width/2,size.height*0.2);
        this.addChild(menu);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

