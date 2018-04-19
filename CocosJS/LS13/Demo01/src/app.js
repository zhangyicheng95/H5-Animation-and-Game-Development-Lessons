
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        // var fire = new cc.ParticleFire();
        // fire.texture = cc.textureCache.addImage("res/fire.png");
        // fire.setPosition(size.width*0.5,size.height*0.5);
        // this.addChild(fire);

        var customParticle = new cc.ParticleSystem(res.Untitled_plist);
        customParticle.x = size.width / 2;
        customParticle.y = size.height / 2;
        this.addChild(customParticle);
//下边为设置具体粒子发射器属性
        customParticle.setTotalParticles(1000);
        customParticle.setStartColor(cc.color.RED);
        customParticle.setStartSize(10);
        customParticle.setEndSize(10);

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

