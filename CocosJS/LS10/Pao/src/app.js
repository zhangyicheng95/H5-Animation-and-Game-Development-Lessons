
var HelloWorldLayer = cc.Layer.extend({
    runner:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        //设置地面
        this.addChild(new cc.LayerColor(cc.color.WHITE));
        var land = new cc.Sprite(res.Land_png);
        land.setPosition(cc.p(size.width*0.5,size.height*0.2));
        land.setScaleX(1.5);
        this.addChild(land);

        //设置初始人物
        cc.spriteFrameCache.addSpriteFrames(res.Run_plist,res.Run_png);
        var sp = new cc.Sprite('#run_1.png');
        sp.setPosition(cc.p(size.width*0.2,size.height*0.2));
        sp.setAnchorPoint(0.5,0);
        this.addChild(sp);
        this.runner = sp;

        //设置人物动画
        var spriteframes = [];
        for(var i=1;i<15;i++){
            var frameName = "run_"+i+".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(frameName);
            spriteframes.push(frame);
        }
        var animation = new cc.Animation(spriteframes);
        animation.setDelayPerUnit(1/30);
        animation.setRestoreOriginalFrame(true);
        var animate = cc.animate(animation);
        this.runner.runAction(animate.repeatForever());
        // sp.runAction((cc.repeat(cc.jumpBy(1,cc.p(100,0),100,1),1)));

        //设置障碍物
        var stone = new cc.Sprite(res.Stone_png);
        stone.setPosition(cc.p(size.width*0.25,size.height*0.2));
        stone.setAnchorPoint(0.5,0);
        this.stone = stone;
        this.schedule(this.stoneCallBack);
        this.touchCallBack();
        this.addChild(stone);

        //设置监听动作

        return true;
    },

    stoneCallBack:function(dt){
        if(this.stone.x<0){
            this.stone.x = cc.winSize.width*(1+cc.random0To1());
            this.speed +=this.speed;
        }else{
            this.stone.x -= this.speed;
        }
        if(cc.rectContainsPoint(this.runner.getBoundingBox(),this.stone.getPosition())){
            cc.log('碰到了！');

        }
    },
    touchCallBack:function(){
        var that = this;
        var listener = cc.EventListener.create({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            onTouchBegan:function(touch,event){
                var location = touch.getLocation();
                that.runner.runAction(cc.jumpBy(0.8,cc.p(0,0),100,1));
                return true;
            }
        });
        cc.eventManager.addListener(listener,this);
    }
});
var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

