
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

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.Red_png);
        this.sprite.attr({
            x: size.width / 1.5,
            y: size.height / 1.5
        });
        this.addChild(this.sprite, 0);

        this.sprite2 = new cc.Sprite(res.Yellow_png);
        this.sprite2.attr({
            x: size.width / 3,
            y: size.height / 1.5
        });
        this.addChild(this.sprite2, 0);

        this.sprite2 = new cc.Sprite(res.Green_png);
        this.sprite2.attr({
            x: size.width / 2,
            y: size.height / 2.5
        });
        this.addChild(this.sprite2, 0);
        // this.sprite.runAction(cc.rotateBy(0.5,15).repeatForever());//让图片旋转
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

