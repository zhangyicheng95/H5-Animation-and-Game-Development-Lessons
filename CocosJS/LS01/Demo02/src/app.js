
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var layer1 = new cc.LayerColor(cc.color.RED,150,150);
        layer1.ignoreAnchor = false;
        layer1.x = size.width/2;
        layer1.y = size.height/2;
        this.addChild(layer1);
        layer1.moveBy(5,200,0);
        // layer1.setAnchorPoint(1.5,1);
        // layer1.runAction(cc.rotateBy(0.8,90).repeatForever());

        var layer2 = new cc.LayerColor(cc.color.GREEN,50,50);
        layer2.ignoreAnchor = false;
        layer2.x = 0;
        layer2.y = 0;
        layer1.addChild(layer2);

        var layer3 = new cc.LayerColor(cc.color.BLUE,50,50);
        layer3.ignoreAnchor = false;
        // layer3.setPosition(0,0);
        layer3.setPosition(cc.p(150,0));
        layer1.addChild(layer3);

        // var layer2 = new cc.LayerColor(cc.color.GREEN,100,20);
        // layer2.ignoreAnchor = false;
        // layer2.x = size.width/8;
        // layer2.y = size.height/1.1;
        // this.addChild(layer2);
        // var layer3 = new cc.LayerColor(cc.color.GREEN,10,38);
        // layer3.ignoreAnchor = false;
        // layer3.x = size.width/5.82;
        // layer3.y = size.height/1.14;
        // this.addChild(layer3);
        // var layer4 = new cc.LayerColor(cc.color.GREEN,100,20);
        // layer4.ignoreAnchor = false;
        // layer4.x = size.width/8;
        // layer4.y = size.height/1.2;
        // this.addChild(layer4);
        // var layer5 = new cc.LayerColor(cc.color.GREEN,10,38);
        // layer5.ignoreAnchor = false;
        // layer5.x = size.width/12.8;
        // layer5.y = size.height/1.25;
        // this.addChild(layer5);

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

