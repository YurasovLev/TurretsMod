let ProjectOmega = extendContent(ItemTurret, "project-omega", {});

let charge = new Effect(60, e => {
  let vec=new Vec2();
  Draw.color(Pal.lightOrange);
  for(let i=0; i<110; i+=30){
    vec.trns(e.rotation, -i, 2);
    Lines.lineAngle(e.x + vec.x, e.y + vec.y, e.rotation-10, e.fslope() * 5 + 1);
    vec.trns(e.rotation, -i, -2);
    Lines.lineAngle(e.x + vec.x, e.y + vec.y, e.rotation+10, e.fslope() * 5 + 1);
  }
  Draw.color();
})


let laser = extend(ContinuousLaserBulletType, {
  update(b){
    if(Math.random()>0.5){
      let vec = new Vec2();
      Damage.collideLine(b, b.team, this.hitEffect, b.x, b.y, b.rotation(), this.length, this.largeHit);
      vec.trns(b.rotation(), 0, 11)
      Damage.collideLine(b, b.team, this.hitEffect, b.x+vec.x, b.y+vec.y, b.rotation(), this.length, this.largeHit);
      vec.trns(b.rotation(), 0, -11)
      Damage.collideLine(b, b.team, this.hitEffect, b.x+vec.x, b.y+vec.y, b.rotation(), this.length, this.largeHit);
    }
    if(this.shake > 0){
        Effect.shake(this.shake, this.shake, b);
    }
  }
})
laser.damage = 10000
laser.hitEffect = Fx.hitMeltdown
laser.hitSize = 1800
laser.lifetime = 40
laser.width = 30
laser.oscScl = 2.0
laser.oscMag = 4.0
laser.length = 1000
laser.drawSize = 5500
laser.collidesAir = false


ProjectOmega.chargeEffect = charge;
ProjectOmega.ammo(Items.surgeAlloy, laser)

ProjectOmega.buildType = prov(()=>{
  const ProjectOmegaBuild = extendContent(ItemTurret.ItemTurretBuild, ProjectOmega, {
    bullet(type, angle){
      ProjectOmega.tr.trns(this.rotation, -(ProjectOmega.size * Vars.tilesize / 3.5));

      var lifeScl = type.scaleVelocity ? Mathf.clamp(Mathf.dst(this.x + ProjectOmega.tr.x, this.y + ProjectOmega.tr.y, this.targetPos.x, this.targetPos.y) / type.range(), ProjectOmega.minRange / type.range(), ProjectOmega.range / type.range()) : 1;
      
      type.create(this, this.team, this.x + ProjectOmega.tr.x, this.y + ProjectOmega.tr.y, angle, 1 + Mathf.range(ProjectOmega.velocityInaccuracy), lifeScl);
    }
  });
  return ProjectOmegaBuild;
});