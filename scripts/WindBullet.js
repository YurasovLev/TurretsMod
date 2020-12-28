var WindBullet = extend(BasicBulletType, {
  rotation: 0,
  update(b){
    this.super$update(b);


    this.rotation+=10;
    
    if(this.rotation >= 45){
      this.rotation=0;
      this.angle=!this.angle;
    }
   
    var rotation = b.rotation() + (this.angle?5:-5);

    b.vel.setAngle(Mathf.slerpDelta(b.rotation(), rotation, 10));
  }
})

module.exports = WindBullet