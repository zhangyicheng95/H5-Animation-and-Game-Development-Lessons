
var SecondLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var bg = new cc.Sprite(res.bg_png);
        bg.x = size.width/2;
        bg.y = size.height/2;
        this.addChild(bg);

        var p1 = new cc.Sprite(res.p1_png);
        p1.x = size.width/2;
        p1.y = size.height/2;
        this.addChild(p1);
        p1.setAnchorPoint(1.5,1);
        p1.runAction(cc.rotateBy(0.2,90).repeatForever());

        var p2 = new cc.Sprite(res.p2_png);
        p2.x = size.width/2;
        p2.y = size.height/2;
        this.addChild(p2);
        p2.setAnchorPoint(1.5,1);
        p2.runAction(cc.rotateBy(0.5,90).repeatForever());

    }
});

var SecondScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new SecondLayer();
        this.addChild(layer);
    }
});

