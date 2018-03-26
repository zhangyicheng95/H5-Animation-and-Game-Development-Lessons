
var HelloWorldLayer = cc.Layer.extend({
    redLayer:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        this.redLayer = new cc.LayerColor(cc.color.RED,100,100);
        this.redLayer.x = size.width/2;
        this.redLayer.y = 400;
        this.addChild(this.redLayer);
        this.redLayer.setLocalZOrder(3);
        // this.scheduleUpdate();
        this.schedule(this.myCallBack,0.01,cc.REPEAT_FOREVER,2);
        return true;
    },
    update:function(dt){{
        this.redLayer.x -= 1;
    }},
    myCallBack:function(dt){
        // this.redLayer.x += 10;
        this.redLayer.y -= this.speed;
        if(this.redLayer.y < 0){
            this.speed = -this.speed;
        }else{
            this.speed += 10*dt;
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

