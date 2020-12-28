module.exports = (name) => {
  let CTurret = extendContent(ItemTurret, name, {});

  CTurret.buildType = prov(()=>{
    const CTurretBuild = extendContent(ItemTurret.ItemTurretBuild, CTurret, {
      bullet(type, angle){
        const vec = new Vec2();
        vec.trns(this.rotation, 0);
        
        let lifeScl = type.scaleVelocity ? Mathf.clamp(Mathf.dst(this.x + vec.x, this.y + vec.y, this.targetPos.x, this.targetPos.y) / type.range(), this.minRange / type.range(), this.range / type.range()) : 1;

        type.create(this, this.team, this.x + vec.x, this.y + vec.y, angle, 1 + Mathf.range(CTurret.velocityInaccuracy), lifeScl);
      }
    });
    return CTurretBuild;
  });


  return CTurret;
};

