module.exports = (name) => {
  let StormTurret = extendContent(ItemTurret, name, {});

  StormTurret.buildType = prov(()=>{
    const StormTurretBuild = extendContent(ItemTurret.ItemTurretBuild, StormTurret, {
      bullet(type, angle){
        const vec = new Vec2();
        vec.trns(this.rotation, 0);
        
        let lifeScl = type.scaleVelocity ? Mathf.clamp(Mathf.dst(this.x + vec.x, this.y + vec.y, this.targetPos.x, this.targetPos.y) / type.range(), this.minRange / type.range(), this.range / type.range()) : 1;

        type.create(this, this.team, this.x + vec.x, this.y + vec.y, angle, 1 + Mathf.range(StormTurret.velocityInaccuracy), lifeScl);
      },
      turnToTarget(targetRot){
        this.rotation+=StormTurret.rotateSpeed;
      }
    });
    return StormTurretBuild;
  });


  return StormTurret;
};