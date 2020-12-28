module.exports = (name) => {
  let VolleyTurret = extendContent(ItemTurret, name, {});

  VolleyTurret.buildType = prov(()=>{
    const VolleyTurretBuild = extendContent(ItemTurret.ItemTurretBuild, VolleyTurret, {
      gun: true,
      bullet(type, angle){
        var i = (angle-this.rotation)/360+Math.round(VolleyTurret.shots/2);
        VolleyTurret.tr.trns(this.rotation, 0, (i/VolleyTurret.shots)*VolleyTurret.xRand-VolleyTurret.size * Vars.tilesize / 2 / (VolleyTurret.xRand/11));

        this.effects();

        var lifeScl = type.scaleVelocity ? Mathf.clamp(Mathf.dst(this.x + VolleyTurret.tr.x, this.y + VolleyTurret.tr.y, this.targetPos.x, this.targetPos.y) / type.range(), VolleyTurret.minRange / type.range(), VolleyTurret.range / type.range()) : 1;
        type.create(this, this.team, this.x + VolleyTurret.tr.x, this.y + VolleyTurret.tr.y, angle, 1 + Mathf.range(VolleyTurret.velocityInaccuracy), lifeScl);
        this.gun=!this.gun;
      }
    });
    return VolleyTurretBuild;
  });


  return VolleyTurret;
};

