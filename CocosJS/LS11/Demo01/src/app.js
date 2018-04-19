
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.GRAY));

        var label = new cc.LabelTTF("xxx");
        label.setFontFillColor(cc.color.WHITE);
        label.enableStroke(cc.color.RED);
        label.setPosition(size.width*0.5,size.height*0.8);
        label.setFontSize(40);
        this.addChild(label);
        //添加精灵
        var sp1 = new cc.Sprite(res.RED_png);
        sp1.setPosition(size.width*0.4,size.height*0.5);
        sp1.tag = 100;
        this.addChild(sp1);
        var sp2 = new cc.Sprite(res.YELLOW_png);
        sp2.setPosition(size.width*0.6,size.height*0.5);
        sp2.tag = 99;
        this.addChild(sp2);
        sp2.setRotation(45);

        var listener = cc.EventListener.create({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            onTouchBegan:function(touch,event){
                var location = touch.getLocation();
                var target = event.getCurrentTarget();
                if(cc.rectContainsPoint(target.getBoundingBox(),location)){
                    label.setString("点击到"+target.tag+"矩形！");
                    return true;//若返回false，则后边回掉不再执行
                }
            },
            onTouchMoved:function(touch,event){
                var delta = touch.getDelta();
                var target = event.getCurrentTarget();
                target.x += delta.x;
                target.y += delta.y;
            },
            onTouchEnded:function(touch,event){
                // var target = event.getCurrentTarget();
                // if(target.tag === 99){
                //     target.setPosition(size.width*0.6,size.height*0.5);
                // }
                // if(target.tag === 100){
                //     target.setPosition(size.width*0.4,size.height*0.5);
                // }
            }
        },this);
        cc.eventManager.addListener(listener,sp1);
        cc.eventManager.addListener(listener.clone(),sp2);
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

