var TestBullet = extend(BasicBulletType, {
  rotation: 0,     //Насколько повернуть
  angle: true,     //В какую сторону повернуть
  update(b){
    this.super$update(b);


    this.rotation+=10;
    
    if(this.rotation >= 45){
      this.rotation=0;
      this.angle=!this.angle;
    }
   
    var rotation = b.rotation() + (this.angle?5:-5);

    b.vel.setAngle(Mathf.slerpDelta(b.rotation(), rotation, 0.1));
  }
})

TestBullet.speed=5;

var Test = extendContent(ItemTurret, "TestTurret", {})
Test.ammo(
  Items.copper, TestBullet
);
Test.reloadTime=1;
Test.xRand = 10;