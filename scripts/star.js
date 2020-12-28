const Star = extendContent(ItemTurret, "star", {});

Star.buildType = prov(()=>{
    const StarBuild = extendContent(ItemTurret.ItemTurretBuild, Star, {
        rot: 360,
        directing: Star.rotateSpeed,
        draw(){
            const vec = new Vec2();
      
            Draw.rect(Star.baseRegion, this.x, this.y, 0);
            
            Draw.z(Layer.turret);
            
            vec.trns(0, 0);
            
            Draw.rect(Star.region, this.x + vec.x, this.y + vec.y, 0);
            
            if(this.heat <= 0.00001) return;
            
            Draw.color(Star.heatColor, this.heat);
            Draw.blend(Blending.additive);
            Draw.rect(Star.heatRegion, this.x + vec.x, this.y + vec.y, 0);
            Draw.blend();
            Draw.color();
        },
        turnToTarget(targetRot){
            if(this.rot==0?this.rotation<=this.rot:this.rotation>=this.rot){
                this.rot=Math.abs(this.rot-360);
                this.directing=-this.directing;
            }
            this.rotation+=this.directing;
        },
        bullet(type, angle){
            const vec = new Vec2();
            vec.trns(this.rotation, 0);
            
            let lifeScl = type.scaleVelocity ? Mathf.clamp(Mathf.dst(this.x + vec.x, this.y + vec.y, this.targetPos.x, this.targetPos.y) / type.range(), this.minRange / type.range(), this.range / type.range()) : 1;

            type.create(this, this.team, this.x + vec.x, this.y + vec.y, angle, 1 + Mathf.range(Star.velocityInaccuracy), lifeScl);
        }
    });
    return StarBuild;
});
