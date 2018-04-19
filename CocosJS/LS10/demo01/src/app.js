
var HelloWorldLayer = cc.Layer.extend({
    sprites:[],
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.GRAY));
        for(var i=0;i<3;i++){
            this.sprites[i] = new cc.Sprite('res/sprite'+(i+1)+'.png');
            this.sprites[i].x = size.width*0.2;
            this.sprites[i].y = size.height*(0.2*i+0.2);
            this.addChild(this.sprites[i]);
        }
        //及时动作
/*
        var action01 = cc.place(200,size.height*0.3);
        this.sprites[0].runAction(action01);
        this.sprites[1].runAction(cc.flipX(true));
        this.sprites[1].runAction(cc.flipY(true));
        this.sprites[2].runAction(cc.hide());
        //this.sprites[2].runAction(cc.show());

        this.sprites[2].runAction(cc.callFunc(function(){
            this.sprites[2].runAction(cc.show());
        },this));
*/
        //间隔动作
        /*
        var action02 = new cc.moveBy(5,200,0);
        // this.sprites[0].runAction(cc.jumpTo(10,cc.p(500,size.height*0.2),500,4));
        // this.sprites[0].runAction(cc.rotateBy(10,360,0));
        // this.sprites[0].runAction(cc.scaleBy(4.0,0.9,0.5));
        // this.sprites[0].runAction(cc.scaleTo(4.0,2));
        this.sprites[0].runAction(cc.blink(20.0,10));
        // this.sprites[0].runAction(cc.speed(cc.blink(20.0,10),5));//5倍速

        this.sprites[1].runAction(cc.moveTo(10,400,size.height*0.4));
        this.sprites[1].runAction(cc.rotateBy(10,360,180));
        this.sprites[1].runAction(cc.fadeIn(2));

        this.sprites[2].runAction(cc.jumpBy(8,300,0,50,4));
        this.sprites[2].runAction(cc.rotateTo(8,90,0));
        // this.sprites[2].runAction(cc.fadeOut(2));
*/
        //squence 动作组合    //分步执行
        var mAction = cc.moveBy(5,200,0);
        var rAction = cc.rotateBy(5,360);
        var dAction = cc.delayTime(2);
        var scaleAction = cc.scaleTo(5,0.5);
        var cAction = cc.callFunc(function(){
            console.log('xx');
            this.sprites[0].runAction(cc.scaleTo(5,1.0));
        },this);
        var sAction = cc.sequence(mAction,rAction,dAction,scaleAction,cAction);
        this.sprites[0].runAction(sAction);

        //spawn动作组合       //多步同时执行    注意：spawn和callFunc不能组合
        var mAction02 = cc.moveBy(5,200,0);
        var rAction02 = cc.rotateBy(5,120);
        var sAction02 = cc.spawn(mAction02,rAction02);
        this.sprites[1].runAction(sAction02);

        //repeat动作组合
        // var mAction03 = cc.moveBy(5,200,0);
        // var rAction03 = cc.rotateBy(0.5,90);
        // this.sprites[2].runAction(cc.repeat(rAction03,5));
        // this.sprites[2].runAction(cc.repeatForever(rAction03));

        //reverse动作组合
        var jAction = cc.jumpBy(0.01,cc.p(0,0),20,6);
        this.sprites[2].runAction(cc.repeatForever(cc.sequence(jAction,jAction.reverse())));

        //菜单按钮

        var isPaused = false;
        var menuFont01 = new cc.MenuItemFont('暂停/播放',function(){
            if(!isPaused){
                for(var i=0;i<3;i++){
                    this.sprites[i].pause();
                    isPaused = !isPaused;
                }
            }else{
                for(var i=0;i<3;i++){
                    this.sprites[i].resume();
                    isPaused = !isPaused;
                }
            }
        },this);
        var menuFont02 = new cc.MenuItemFont('停止/开始',function(){
            if(!isPaused) {
                cc.director.pause();
                isPaused = !isPaused;
            }else{
                cc.director.resume();
                isPaused = !isPaused;
            }

        },this);
        var menu = new cc.Menu(menuFont01,menuFont02);
        menu.setPosition(size.width/2,size.height/2);
        menu.alignItemsHorizontallyWithPadding(50);
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

