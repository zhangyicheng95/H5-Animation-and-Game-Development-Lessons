
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

        var layer1 = new cc.LayerColor(cc.color.RED,100,100);
        var layer2 = new cc.LayerColor(cc.color.YELLOW,100,100);
        // var layer3 = new cc.LayerColor(cc.color.BLUE,100,100);
        layer1.ignoreAnchor = false;
        layer2.ignoreAnchor = false;
        // layer3.ignoreAnchor = false;

        // layer1.setAnchorPoint(0.5,0.5);
        // layer2.setAnchorPoint(1,1);
        // layer3.setAnchorPoint(0,1);

        layer1.setPosition(200,200);
        layer2.setPosition(50,50);
        // layer3.setPosition(size.width/2,size.height/2);

        // layer1.setAnchorPoint(1.5,1);
        // layer1.runAction(cc.rotateBy(0.8,90).repeatForever());  //自转
        // layer2.runAction(cc.rotateBy(0.8,60).repeatForever());  //自转
        // layer3.runAction(cc.rotateBy(0.8,30).repeatForever());  //自转

        // layer1.rotation = 45;     //旋转任意角度
        // layer1.setScale(1.5);   //缩放比例
        // layer2.setScale(0.5,1);

        this.addChild(layer1);
        this.addChild(layer2);
        // this.addChild(layer3);
        var point = layer1.convertToNodeSpaceAR(layer2.getPosition());
        // var point = layer1.convertToNodeSpace(layer2.getPosition());
        console.log(point.x);
        console.log(point.y);

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

