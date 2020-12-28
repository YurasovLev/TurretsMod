module.exports = (name) => {
  let DoubleTurret = extendContent(ItemTurret, name, {});

  DoubleTurret.buildType = prov(()=>{
    const DoubleTurretBuild = extendContent(ItemTurret.ItemTurretBuild, DoubleTurret, {
      gun: true,
      bullet(type, angle){
        DoubleTurret.tr.trns(this.rotation, DoubleTurret.size * Vars.tilesize / 2, (this.gun?DoubleTurret.spread:-DoubleTurret.spread));

        var lifeScl = type.scaleVelocity ? Mathf.clamp(Mathf.dst(this.x + DoubleTurret.tr.x, this.y + DoubleTurret.tr.y, this.targetPos.x, this.targetPos.y) / type.range(), DoubleTurret.minRange / type.range(), DoubleTurret.range / type.range()) : 1;
        type.create(this, this.team, this.x + DoubleTurret.tr.x, this.y + DoubleTurret.tr.y, angle, 1 + Mathf.range(DoubleTurret.velocityInaccuracy), lifeScl);
        this.gun=!this.gun;
      }
    });
    return DoubleTurretBuild;
  });


  return DoubleTurret;
};

